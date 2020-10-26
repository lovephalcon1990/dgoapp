package handler

import (
	"dappapi/models"
	jwt "dappapi/pkg/jwtauth"
	"dappapi/tools"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/mojocn/base64Captcha"
	"github.com/mssola/user_agent"
)

var store = base64Captcha.DefaultMemStore

func PayloadFunc(data interface{}) jwt.MapClaims {
	if v, ok := data.(map[string]interface{}); ok {
		u, _ := v["user"].(models.SysUser)
		r, _ := v["role"].(models.SysRole)
		return jwt.MapClaims{
			jwt.IdentityKey: u.UserId,
			jwt.RoleIdKey:   r.RoleId,
			jwt.NiceKey:     u.Username,
			jwt.RoleKey:     r.Name,
			jwt.ChannelKey:  u.Channel,
		}
	}
	return jwt.MapClaims{}
}

func IdentityHandler(c *gin.Context) interface{} {
	claims := jwt.ExtractClaims(c)
	return map[string]interface{}{
		"IdentityKey": claims["identity"],
		"UserName":    claims["nice"],
		"RoleKey":     claims["rolekey"],
		"UserId":      claims["identity"],
		"RoleIds":     claims["roleid"],
		"DataScope":   claims["datascope"],
		"Channel":     claims["channel"],
	}
}

// @Summary 登陆
// @Description 获取token
// LoginHandler can be used by clients to get a jwt token.
// Payload needs to be json in the form of {"username": "USERNAME", "password": "PASSWORD"}.
// Reply will be of the form {"token": "TOKEN"}.
// @Accept  application/json
// @Product application/json
// @Param username body models.Login  true "Add account"
// @Success 200 {string} string "{"code": 200, "expire": "2019-08-07T12:45:48+08:00", "token": ".eyJleHAiOjE1NjUxNTMxNDgsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTU2NTE0OTU0OH0.-zvzHvbg0A" }"
// @Router /login [post]
func Authenticator(c *gin.Context) (interface{}, error) {
	var loginVals models.Login
	var loginlog models.LoginLog

	ua := user_agent.New(c.Request.UserAgent())
	loginlog.Ipaddr = c.ClientIP()
	location := tools.GetLocation(c.ClientIP())
	loginlog.Location = location
	loginlog.Ltime = tools.GetCurrntTime()
	loginlog.Status = "0"
	loginlog.Remark = c.Request.UserAgent()
	browserName, browserVersion := ua.Browser()
	loginlog.Browser = browserName + " " + browserVersion
	loginlog.Os = ua.OS()
	loginlog.Msg = "登录成功"
	loginlog.Platform = ua.Platform()
	if err := c.ShouldBind(&loginVals); err != nil {
		loginlog.Status = "1"
		loginlog.Msg = "数据解析失败"
		loginlog.Username = loginVals.Username
		loginlog.Create()
		return nil, jwt.ErrMissingLoginValues
	}

	loginlog.Username = loginVals.Username
	user, role, e := loginVals.GetUser()
	secret := user.Uuid
	code, _ := tools.NewGoogleAuth().GetCode(secret)
	if code != loginVals.Code {
		loginlog.Status = "1"
		loginlog.Msg = "验证码错误"
		loginlog.Create()
		return nil, jwt.ErrInvalidVerificationode
	}
	if e == nil {
		loginlog.Create()
		return map[string]interface{}{"user": user, "role": role}, nil
	} else {
		loginlog.Status = "1"
		loginlog.Msg = "登录失败"
		loginlog.Create()
		log.Println(e.Error())
	}

	return nil, jwt.ErrFailedAuthentication
}

func AuthCp(c *gin.Context) interface{} {
	var sysuser models.SysUser

	err := c.ShouldBindWith(&sysuser, binding.JSON)

	tools.HasError(err, "参数错误, 错误码 -1", 500)

	user, err1 := sysuser.GetOne()

	tools.HasError(err1, "返回数据错误, 错误码 -2", 500)

	var role models.SysRole
	role.RoleId = user.Roleid

	roleData, err2 := role.GetOne()

	tools.HasError(err2, "返回数据错误, 错误码 -3", 500)

	return map[string]interface{}{"user": user, "role": roleData}
}

// @Summary 退出登录
// @Description 获取token
// LoginHandler can be used by clients to get a jwt token.
// Reply will be of the form {"token": "TOKEN"}.
// @Accept  application/json
// @Product application/json
// @Success 200 {string} string "{"code": 200, "msg": "成功退出系统" }"
// @Router /logout [post]
// @Security
func LogOut(c *gin.Context) {
	var loginlog models.LoginLog
	ua := user_agent.New(c.Request.UserAgent())
	loginlog.Ipaddr = c.ClientIP()
	location := tools.GetLocation(c.ClientIP())
	loginlog.Location = location
	loginlog.Ltime = tools.GetCurrntTime()
	loginlog.Status = "0"
	loginlog.Remark = c.Request.UserAgent()
	browserName, browserVersion := ua.Browser()
	loginlog.Browser = browserName + " " + browserVersion
	loginlog.Os = ua.OS()
	loginlog.Platform = ua.Platform()
	loginlog.Username = tools.GetUserName(c)
	loginlog.Msg = "退出成功"
	loginlog.Create()
	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"msg":  "退出成功",
	})

}

func Authorizator(data interface{}, c *gin.Context) bool {
	if v, ok := data.(map[string]interface{}); ok {
		u, _ := v["user"].(models.SysUser)
		r, _ := v["role"].(models.SysRole)
		c.Set("role", r.Name)
		c.Set("roleIds", r.RoleId)
		c.Set("userId", u.UserId)
		c.Set("userName", u.UserName)

		return true
	}
	return false
}

func Unauthorized(c *gin.Context, code int, message string) {
	c.JSON(http.StatusOK, gin.H{
		"code": code,
		"msg":  message,
	})
}
