package models

import (
	"dappapi/global/orm"
	"fmt"
)

type Perm struct {
	Id     int   `gorm:"column:permid;" json:"permid"`
	Roleid int32 `gorm:"column:roleid;" json:"roleid"`
}

func (p *Perm) TableName() string {
	return "role_permissions"
}

func (p *Perm) GetByRoleid(roleid int) (permList []*Perm, err error) {
	table := orm.Eloquent["admin"].Table(p.TableName())

	table = table.Where("`roleid` = ?", roleid)

	if err = table.Find(&permList).Error; err != nil {
		return
	}
	return
}

func (p *Perm) DeleteRoleMenu(roleId int) (bool, error) {
	if err := orm.Eloquent["admin"].Table(p.TableName()).Where("roleid = ?", roleId).Delete(p).Error; err != nil {
		return false, err
	}

	var role SysRole
	if err := orm.Eloquent["admin"].Table("admin_roles").Where("id = ?", roleId).First(&role).Error; err != nil {
		return false, err
	}

	sql := fmt.Sprintf("delete from casbin_rule where `p_type`= '%s' and `v0` = '%s' ;", "p", role.Name)

	orm.Eloquent["admin"].Exec(sql)

	return true, nil
}

func (p *Perm) Insert(roleId int, menuId []string) (bool, error) {
	var role SysRole
	if err := orm.Eloquent["admin"].Table("admin_roles").Where("id = ?", roleId).First(&role).Error; err != nil {
		return false, err
	}
	var menu []Menu
	if err := orm.Eloquent["admin"].Table("admin_menu").Where("id in (?)", menuId).Find(&menu).Error; err != nil {
		return false, err
	}

	sql := "INSERT INTO `role_permissions` (`permid`, `roleid`) VALUES "

	sql2 := "INSERT INTO `casbin_rule` (`p_type`, `v0`, `v1`, `v2`) VALUES "

	for i := 0; i < len(menu); i++ {
		sql += fmt.Sprintf("(%d, %d),", menu[i].Id, role.RoleId)
		if menu[i].Itype == "f" {
			sql2 += fmt.Sprintf("('p', '%s', '%s', '%s'),", role.Name, menu[i].Perm, menu[i].Route)
		}
	}
	sql = sql[0:len(sql)-1] + ";"
	sql2 = sql2[0:len(sql2)-1] + ";"
	orm.Eloquent["admin"].Exec(sql)
	orm.Eloquent["admin"].Exec(sql2)
	return true, nil
}
