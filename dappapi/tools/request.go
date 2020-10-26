package tools

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
)

func RequestTime(c *gin.Context) (stime string, etime string) {
	var err error
	stime = c.Request.FormValue("stime")
	etime = c.Request.FormValue("etime")
	quickday := c.Request.FormValue("quickday")
	timeNow := time.Now()
	if stime == "" {
		stime = timeNow.Format("2006-01-02")
	}

	if etime == "" {
		etime = timeNow.Format("2006-01-02")
	}

	if quickday != "" {
		val := StrToInt(err, quickday)
		if err != nil {
			HasError(err, "", -1)
		}
		pd := val * 24 * -1
		hh := fmt.Sprintf("%d%s", pd, "h")
		h, _ := time.ParseDuration(hh)
		nowTime := timeNow.Add(h).Format("2006-01-02")
		stime = nowTime
		if val == 0 || val == 1 {
			etime = nowTime
		} else {
			etime = timeNow.Format("2006-01-02")
		}
	}

	return
}
