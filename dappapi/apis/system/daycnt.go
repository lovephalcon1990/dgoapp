package system

import (
	"dappapi/models"
	"dappapi/tools"
	"dappapi/tools/app"
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
)

func Dlist(c *gin.Context) {
	var err error
	var gs models.GameStats
	var cs models.CoinStats

	stime, etime := tools.RequestTime(c)

	stimeStru, _ := time.Parse("2006-01-02", stime)
	nstime := stimeStru.Format("20060102")

	etimeStru, _ := time.Parse("2006-01-02", etime)
	netime := etimeStru.Format("20060102")

	cntday := tools.TimeSub(etimeStru, stimeStru)

	l := cntday + 1
	daySlice := make([]int, cntday+1)

	for i := 0; i <= cntday; i++ {
		subhour := i * 24 * -1
		hh := fmt.Sprintf("%d%s", subhour, "h")
		h, _ := time.ParseDuration(hh)
		xtime := etimeStru.Add(h).Format("20060102")
		ixtime := tools.StrToInt(err, xtime)
		daySlice[i] = ixtime
	}

	istime := tools.StrToInt(err, nstime)
	ietime := tools.StrToInt(err, netime)

	if err != nil {
		tools.HasError(err, "", -1)
	}
	site := tools.GetChannel(c)

	gslist, err1 := gs.GetDataByDay(istime, ietime, site)
	if err1 != nil {
		tools.HasError(err, "", -2)
	}

	cslist, err2 := cs.GetData(istime, ietime, site)
	if err2 != nil {
		tools.HasError(err, "", -3)
	}

	gsmap := make(map[int]map[string]interface{}, l)
	csmap := make(map[int]map[string]interface{}, l)
	gslen := len(gslist)
	var subkey string
	if len(cslist) > 0 {
		for _, cs := range cslist {
			if _, ok := csmap[cs.Day]; ok == false {
				csmap[cs.Day] = make(map[string]interface{})
			}
			if cs.Mainreason == 21 {
				subkey = fmt.Sprintf("sub_%d", cs.Subreason)
			} else {
				subkey = fmt.Sprintf("svr_%d", cs.Mainreason)
			}
			csmap[cs.Day][subkey] = cs.Amount
		}
	}
	if gslen > 0 {
		for _, gs := range gslist {
			gsmap[gs.Day] = tools.Struct2Map(gs)
		}
	}
	retMap := tools.MergeMap(daySlice, csmap, gsmap)
	newmapdata := tools.SortByKey(retMap)
	app.PageOK(c, newmapdata, len(newmapdata), 1, 1, "")

}
