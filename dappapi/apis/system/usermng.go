package system

import (
	"dappapi/models"
	"dappapi/tools"
	"dappapi/tools/app"
	"encoding/json"

	"github.com/gin-gonic/gin"
)

func UmngGet(c *gin.Context) {
	param := make(map[string]interface{})

	param["page"] = c.Request.FormValue("page")
	param["limit"] = c.Request.FormValue("limit")

	param["uname"] = c.Request.FormValue("uname")
	param["club"] = c.Request.FormValue("club")
	param["cliip"] = c.Request.FormValue("cliip")
	param["stime"] = c.Request.FormValue("stime")
	param["etime"] = c.Request.FormValue("etime")
	param["quickday"] = c.Request.FormValue("quickday")

	param["site"] = tools.GetChannel(c)
	jsonStr, _ := json.Marshal(param)
	var userRet models.CpRet
	userRet = models.Post("users/get", jsonStr)
	app.PageOK(c, userRet.Data["list"], userRet.Count, 1, 1, "")
}
