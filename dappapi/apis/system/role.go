package system

import (
	"dappapi/models"
	"dappapi/tools"
	"dappapi/tools/app"
	"time"

	"github.com/gin-gonic/gin"
)

func GetSysRoleList(c *gin.Context) {
	var data models.SysRole
	var err error
	var pageIndex int
	var pageSize int

	limit := c.Request.FormValue("limit")
	if limit != "" {
		pageSize = tools.StrToInt(err, limit)
	}

	page := c.Request.FormValue("page")
	if page != "" {
		pageIndex = tools.StrToInt(err, page)
	}
	channel := tools.GetChannel(c)
	roles, count, err := data.GetList(channel, pageIndex, pageSize)
	tools.HasError(err, "", -1)

	app.PageOK(c, roles, count, pageIndex, pageSize, "")
}

func SaveSysRole(c *gin.Context) {
	var sysrole models.SysRole
	var err error

	err = c.ShouldBind(&sysrole)
	sysrole.Channel = tools.GetChannel(c)
	tools.HasError(err, "非法数据格式", 500)
	sysrole.Ctime = time.Now().Unix()
	id, err := sysrole.Save()
	tools.HasError(err, "添加失败", 500)
	app.OK(c, id, "添加成功")
}

func RolePermSave(c *gin.Context) {
	var perm models.Perm
	var err error
	roleid := tools.StrToInt(err, c.DefaultPostForm("roleid", "1"))
	perms := c.PostFormArray("perms[]")
	// perms := c.Request.PostForm[""]
	_, err = perm.DeleteRoleMenu(roleid)
	tools.HasError(err, "添加失败,错误码 100", 500)
	_, err = perm.Insert(roleid, perms)
	tools.HasError(err, "添加失败,错误码 101", 500)
	app.OK(c, 200, "添加成功")
}
