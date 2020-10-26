package models

import (
	"dappapi/global/orm"
)

type SysRole struct {
	RoleId  int    `json:"id" gorm:"column:id;primary_key;AUTO_INCREMENT"`        // 角色编码
	Name    string `json:"name" gorm:"type:varchar(191);column:name" form:"name"` // 角色名称
	Channel int    `json:"channel" gorm:"type:int(10);column:channel"`
	Cname   string `json:"cname" gorm:"type:varchar(191);column:cname" form:"cname"` // 中文名称
	Ctime   int64  `json:"ctime" gorm:"type:bigint(20);column:ctime"`                // 创建时间
}

func (SysRole) TableName() string {
	return "admin_roles"
}

type MenuIdList struct {
	MenuId int `json:"menuId"`
}

func (role *SysRole) Get() (SysRole SysRole, err error) {
	table := orm.Eloquent["admin"].Table(role.TableName())
	if role.RoleId != 0 {
		table = table.Where("role_id = ?", role.RoleId)
	}

	if err = table.First(&SysRole).Error; err != nil {
		return
	}

	return
}

func (role *SysRole) GetAll() (SysRole []SysRole, err error) {
	table := orm.Eloquent["admin"].Table(role.TableName())
	if role.Channel != 0 {
		table = table.Where("channel = ?", role.Channel)
	}
	if err = table.Find(&SysRole).Error; err != nil {
		return
	}

	return
}

func (role *SysRole) GetList(channel, page, limit int) (SysRole []SysRole, count int, err error) {
	table := orm.Eloquent["admin"].Table(role.TableName())
	if channel != 0 {
		table = table.Where("channel = ?", channel)
	}

	table.Count(&count)
	if count == 0 {
		return
	}

	if err = table.Offset((page - 1) * limit).Limit(limit).Find(&SysRole).Error; err != nil {
		return
	}

	return
}

func (role *SysRole) Save() (id int, err error) {
	result := orm.Eloquent["admin"].Table(role.TableName()).Create(&role)
	if result.Error != nil {
		err = result.Error
		return
	}
	id = role.RoleId
	return
}

func (role *SysRole) GetOne() (sysrole SysRole, err error) {
	table := orm.Eloquent["admin"].Table(role.TableName())

	if role.RoleId != 0 {
		table = table.Where("id = ? ", role.RoleId)
	}

	if err = table.First(&sysrole).Error; err != nil {
		return
	}
	return
}
