package system

import (
	"dappapi/models"
	"dappapi/tools"
	"dappapi/tools/app"
	"encoding/json"
	"time"

	"github.com/gin-gonic/gin"
)

func Glist(c *gin.Context) {
	var err error
	var gs models.GameStats
	stime, etime := tools.RequestTime(c)

	stimeStru, _ := time.Parse("2006-01-02", stime)
	nstime := stimeStru.Format("20060102")

	etimeStru, _ := time.Parse("2006-01-02", etime)
	netime := etimeStru.Format("20060102")

	istime := tools.StrToInt(err, nstime)
	ietime := tools.StrToInt(err, netime)
	if err != nil {
		tools.HasError(err, "", -1)
	}
	site := tools.GetChannel(c)

	gslist, err1 := gs.GetData(istime, ietime, site)
	if err1 != nil {
		tools.HasError(err, "", -2)
	}

	// app.PageOK(c, gslist, len(gslist), 1, 1, stime+"##"+etime)
	app.PageExtOk(c, gslist, len(gslist), "", gin.H{"stime": stime, "etime": etime})
}

func Win(c *gin.Context) {
	var err error
	var ugs models.UserGameStats
	stime, etime := tools.RequestTime(c)

	stimeStru, _ := time.Parse("2006-01-02", stime)
	nstime := stimeStru.Format("20060102")

	etimeStru, _ := time.Parse("2006-01-02", etime)
	netime := etimeStru.Format("20060102")

	istime := tools.StrToInt(err, nstime)
	ietime := tools.StrToInt(err, netime)
	if err != nil {
		tools.HasError(err, "", -1)
	}
	site := tools.GetChannel(c)
	gameidstr := c.Request.FormValue("gameid")
	gameid, _ := tools.StringToInt(gameidstr)
	actstr := c.Request.FormValue("act")
	act, _ := tools.StringToInt(actstr)

	ugslist, err1 := ugs.GetData(istime, ietime, site, gameid, act)
	if err1 != nil {
		tools.HasError(err, "", -2)
	}

	if len(ugslist) == 0 {
		app.OK(c, gin.H{}, "")
	} else {
		userSlice := make([]int, len(ugslist))
		for i, p := range ugslist {
			userSlice[i] = p.Uid
		}
		param := map[string]interface{}{
			"uids": userSlice,
		}
		jsonStr, _ := json.Marshal(param)
		var userRet models.CpRet
		userRet = models.Post("users/list", jsonStr)
		if userRet.Code != 0 {
			app.OK(c, gin.H{"list": ugslist, "user": ""}, "")
		} else {
			app.OK(c, gin.H{"list": ugslist, "userinfo": userRet.Data["userinfo"]}, "")
		}
	}

}
