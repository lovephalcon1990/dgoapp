package models

import (
	"dappapi/global/orm"
	"dappapi/tools"
	"strings"

	"golang.org/x/crypto/bcrypt"
)

type UserName struct {
	Username string `gorm:"type:varchar(64)" json:"username" form:"username"`
}

type PassWord struct {
	// 密码
	Password string `gorm:"type:varchar(128)" json:"password" form:"password"`
}

type LoginM struct {
	UserName
	PassWord
}

type SysUserId struct {
	UserId int `gorm:"column:id;primary_key;AUTO_INCREMENT"  json:"id" form:"id"` // 编码
}

type SysUserB struct {
	Phone    string `gorm:"type:varchar(191)" json:"phone" form:"phone"` // 手机号
	Name     string `gorm:"type:varchar(191), column:name" json:"name"`  //名称
	Email    string `gorm:"type:varchar(191)" json:"email" form:"email"` //邮箱
	Remtoken string `gorm:"type:varchar(100)" json:"remtoken"`           //备注
	Uuid     string `gorm:"type:char(36)" json:"uuid"`                   // uuid
	Roleid   int    `gorm:"type:int(10)" json:"roleid" form:"roleid"`
	Channel  int    `gorm:"type:int(10)" json:"channel"`
	Ctime    int64  `gorm:"type:bigint(20)" json:"ctime"`
	Utime    int64  `gorm:"type:bigint(20)" json:"utime"`
}

type SysUser struct {
	SysUserId
	SysUserB
	LoginM
}

func (SysUser) TableName() string {
	return "admin_user"
}

type SysUserPwd struct {
	OldPassword string `json:"oldPassword" form:"passwd"`
	NewPassword string `json:"newPassword" form:"newPasswd"`
}

type SysUserPage struct {
	SysUserId
	SysUserB
	LoginM
	DeptName string `gorm:"-" json:"deptName"`
}

type SysUserView struct {
	SysUserId
	SysUserB
	LoginM
	RoleCName string `gorm:"column:cname"  json:"cname"`
}

func (e *SysUser) GetUserInfo() (SysUserView SysUserView, err error) {

	table := orm.Eloquent["admin"].Table(e.TableName()).Select([]string{"admin_user.id", "admin_user.username", "admin_user.name",
		"admin_user.roleid",
		"admin_roles.cname"})
	table = table.Joins("left join admin_roles on admin_roles.id=admin_user.roleid")
	if e.UserId != 0 {
		table = table.Where("admin_user.id = ?", e.UserId)
	}

	if e.Username != "" {
		table = table.Where("admin_user.username = ?", e.Username)
	}

	if e.Password != "" {
		table = table.Where("admin_user.password = ?", e.Password)
	}

	if err = table.First(&SysUserView).Error; err != nil {
		return
	}
	return
}

func (e *SysUser) GetList() (SysUserView []SysUserView, err error) {

	table := orm.Eloquent["admin"].Table(e.TableName()).Select([]string{"sys_user.*", "sys_role.role_name"})
	table = table.Joins("left join sys_role on sys_user.role_id=sys_role.role_id")
	if e.UserId != 0 {
		table = table.Where("user_id = ?", e.UserId)
	}

	if e.Username != "" {
		table = table.Where("username = ?", e.Username)
	}

	if e.Password != "" {
		table = table.Where("password = ?", e.Password)
	}

	if err = table.Find(&SysUserView).Error; err != nil {
		return
	}
	return
}

func (e *SysUser) GetPage(pageSize int, pageIndex int) ([]SysUserPage, int, error) {
	var doc []SysUserPage
	var count int
	table := orm.Eloquent["admin"].Table(e.TableName())

	if e.Channel != 0 {
		table = table.Where("channel = ?", e.Channel)
	}

	if e.Username != "" {
		table = table.Where("username like ?", "%"+e.Username+"%")
	}

	if err := table.Offset((pageIndex - 1) * pageSize).Limit(pageSize).Find(&doc).Error; err != nil {
		return nil, 0, err
	}

	table.Count(&count)
	return doc, count, nil
}

//加密
func (e *SysUser) Encrypt() (err error) {
	if e.Password == "" {
		return
	}

	var hash []byte
	if hash, err = bcrypt.GenerateFromPassword([]byte(e.Password), bcrypt.DefaultCost); err != nil {
		return
	} else {
		e.Password = string(hash)
		return
	}
}

// 获取用户数据
func (e *SysUser) Get() (SysUserView SysUserView, err error) {

	table := orm.Eloquent["admin"].Table(e.TableName()).Select([]string{"admin_user.*", "admin_roles.name", "admin_roles.cname"})
	table = table.Joins("left join admin_roles on admin_user.roleid=admin_roles.id")
	if e.UserId != 0 {
		table = table.Where("id = ?", e.UserId)
	}

	if e.Username != "" {
		table = table.Where("username = ?", e.Username)
	}

	if e.Password != "" {
		table = table.Where("password = ?", e.Password)
	}

	if err = table.First(&SysUserView).Error; err != nil {
		return
	}

	SysUserView.Password = ""
	return
}

//添加
func (e SysUser) Insert() (id int, err error) {
	if err = e.Encrypt(); err != nil {
		return
	}

	// check 用户名
	var count int
	orm.Eloquent["admin"].Table(e.TableName()).Where("username = ?", e.Username).Count(&count)
	if count > 0 {
		tools.HasError(err, "用户已存在(代码500)", 500)
		return
	}

	//添加数据
	if err = orm.Eloquent["admin"].Table(e.TableName()).Create(&e).Error; err != nil {
		return
	}
	id = e.UserId
	return
}

//修改
func (e *SysUser) Update(id int) (update SysUser, err error) {
	if e.Password != "" {
		if err = e.Encrypt(); err != nil {
			return
		}
	}
	if err = orm.Eloquent["admin"].Table(e.TableName()).First(&update, id).Error; err != nil {
		return
	}
	//参数1:是要修改的数据
	//参数2:是修改的数据
	if err = orm.Eloquent["admin"].Table(e.TableName()).Model(&update).Updates(&e).Error; err != nil {
		return
	}
	return
}

func (e *SysUser) BatchDelete(id []int) (Result bool, err error) {
	if err = orm.Eloquent["admin"].Table(e.TableName()).Where("user_id in (?)", id).Delete(&SysUser{}).Error; err != nil {
		return
	}
	Result = true
	return
}

func (e *SysUser) GetOne() (sysuser SysUser, err error) {

	table := orm.Eloquent["admin"].Table(e.TableName())
	if e.UserId != 0 {
		table = table.Where("id = ?", e.UserId)
	}

	if err = table.First(&sysuser).Error; err != nil {
		return
	}
	return
}

func (e *SysUser) SetPwd(pwd SysUserPwd) (Result bool, err error) {
	user, err := e.GetOne()
	if err != nil {
		tools.HasError(err, "获取用户数据失败, 错误码-2", 500)
	}
	_, err = tools.CompareHashAndPassword(user.Password, pwd.OldPassword)
	if err != nil {
		if strings.Contains(err.Error(), "hashedPassword is not the hash of the given password") {
			tools.HasError(err, "密码错误, 错误码-3", 500)
		}
		return
	}
	e.Password = pwd.NewPassword
	_, err = e.Update(e.UserId)
	tools.HasError(err, "更新密码失败, 错误码-4", 500)
	return
}
