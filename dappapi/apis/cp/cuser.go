package cp

import (
	"dappapi/models"
	"dappapi/tools"
	"dappapi/tools/app"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

func Reg(c *gin.Context) {
	var sysuser models.SysUser

	err := c.ShouldBindWith(&sysuser, binding.JSON)

	tools.HasError(err, "注册数据失败, 错误码 -1", 500)

	sysuser.Ctime = tools.GetCurrntTime().Unix()
	sysuser.Uuid = tools.NewGoogleAuth().GetSecret()
	id, err := sysuser.Insert()
	tools.HasError(err, "添加失败, 错误码 -2", 500)
	app.OK(c, gin.H{"id": id, "uuid": sysuser.Uuid}, "添加成功")
}

func InitPasswd(c *gin.Context) {
	var sysuser models.SysUser

	err := c.ShouldBindWith(&sysuser, binding.JSON)
	tools.HasError(err, "参数错误, 错误码 -1", 500)

	_, err = sysuser.Update(sysuser.UserId)

	tools.HasError(err, "修改失败, 错误码 -2", 500)
	app.OK(c, gin.H{"id": sysuser.UserId}, "修改成功")

}
