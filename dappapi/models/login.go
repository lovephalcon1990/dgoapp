package models

import (
	"dappapi/global/orm"
	"dappapi/tools"
	"fmt"
)

type Login struct {
	Username string `form:"username" json:"username" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
	Code     string `form:"code" json:"code" binding:"required"`
}

func (u *Login) GetUser() (user SysUser, role SysRole, e error) {

	e = orm.Eloquent["admin"].Table("admin_user").Where("username = ? ", u.Username).Find(&user).Error
	if e != nil {
		return
	}
	fmt.Println(user.Password, u.Password)
	_, e = tools.CompareHashAndPassword(user.Password, u.Password)
	if e != nil {
		return
	}

	e = orm.Eloquent["admin"].Table("admin_roles").Where("id = ? ", user.Roleid).First(&role).Error
	if e != nil {
		return
	}

	return
}
