package system

import (
	"dappapi/models"
	"dappapi/tools"
	"dappapi/tools/app"

	"github.com/gin-gonic/gin"
)

func GetSysUser(c *gin.Context) {
	var SysUser models.SysUser
	var SysRole models.SysRole

	userId := tools.GetUserIdStr(c)
	SysUser.UserId, _ = tools.StringToInt(userId)
	result, err := SysUser.GetUserInfo()
	SysRole.Channel = tools.GetChannel(c)
	role, err1 := SysRole.GetAll()

	dic := make(map[string]interface{})
	var cpdic models.CpRet
	cpdic = models.Post("dic/dlist", nil)
	dic["dic"] = cpdic.Data["dic"]

	dic["uinfo"] = result
	dic["role"] = role

	tools.HasError(err, "抱歉未找到相关信息", -1)
	tools.HasError(err1, "抱歉未找到相关信息", -2)

	app.Custum(c, gin.H{
		"code": 200,
		"data": dic,
		"msg":  "succ",
	})
}

// @Summary 列表数据
// @Description 获取JSON
// @Tags 用户
// @Param username query string false "username"
// @Success 200 {string} string "{"code": 200, "data": [...]}"
// @Success 200 {string} string "{"code": -1, "message": "抱歉未找到相关信息"}"
// @Router /api/v1/sysUserList [get]
// @Security Bearer
func GetSysUserList(c *gin.Context) {
	var data models.SysUser
	var err error
	var limit = 15
	var page = 1

	size := c.Request.FormValue("limit")
	if size != "" {
		limit = tools.StrToInt(err, size)
	}

	index := c.Request.FormValue("page")
	if index != "" {
		page = tools.StrToInt(err, index)
	}

	data.Username = c.Request.FormValue("name")
	data.Phone = c.Request.FormValue("phone")

	data.Channel = tools.GetChannel(c)
	result, count, err := data.GetPage(limit, page)
	tools.HasError(err, "", -1)

	app.PageOK(c, result, count, page, limit, "")
}

func InsertSysUser(c *gin.Context) {
	var sysuser models.SysUser
	err := c.ShouldBind(&sysuser)
	tools.HasError(err, "非法数据格式", 500)
	sysuser.Channel = tools.GetChannel(c)
	if sysuser.UserId != 0 {
		sysuser.Utime = tools.GetCurrntTime().Unix()
		_, err := sysuser.Update(sysuser.UserId)
		tools.HasError(err, "添加失败", 500)
		app.OK(c, 0, "更新成功")
	} else {
		sysuser.Ctime = tools.GetCurrntTime().Unix()
		sysuser.Uuid = tools.NewGoogleAuth().GetSecret()
		id, err := sysuser.Insert()
		tools.HasError(err, "添加失败", 500)
		app.OK(c, id, "添加成功")
	}

}

func SetPasswd(c *gin.Context) {
	var sysuser models.SysUser
	var passwd models.SysUserPwd

	c.ShouldBind(&passwd)
	sysuser.UserId = tools.GetUserId(c)
	if sysuser.UserId == 0 {
		app.Error(c, 200, nil, "用户数据失败，错误码 -1")
	}
	_, err := sysuser.SetPwd(passwd)
	tools.HasError(err, "修改密码失败，错误码-5", 500)
	app.OK(c, gin.H{}, "修改成功")
}

func ResetPasswd(c *gin.Context) {
	var sysuser models.SysUser

	c.ShouldBind(&sysuser)
	sysuser.Password = "QAZwsx123"
	_, err := sysuser.Update(sysuser.UserId)
	tools.HasError(err, "重置密码失败，错误码-5", 500)
	app.OK(c, gin.H{}, "重置成功")
}
