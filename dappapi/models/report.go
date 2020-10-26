package models

import (
	"github.com/mitchellh/mapstructure"
	"github.com/sirupsen/logrus"
)

type JsonBody struct {
	Scmd  string      `json:"scmd"`
	Sdata interface{} `json:"sdata"`
}

type jbfn func(interface{})

func (jb JsonBody) Handle() (err error) {
	mapFunc := map[string]jbfn{
		"gamestats":     FunGameStats,
		"fullstats":     FunFullStats,
		"usergamestats": FunUserGameStats,
		"coinstats":     FunCoinStats,
	}

	if mapFunc[jb.Scmd] == nil {
		logrus.WithField("logFile", "asyncerror").Error(jb)
		return err
	}
	logrus.WithField("logFile", "async").Info(jb)
	mapFunc[jb.Scmd](jb.Sdata)
	return nil
}

func FunGameStats(sdata interface{}) {
	var gs GameStats
	mapstructure.Decode(sdata, &gs)
	gs.Save()
}

func FunFullStats(sdata interface{}) {
	var fs FullStats
	mapstructure.Decode(sdata, &fs)
	fs.Save()
}

func FunUserGameStats(sdata interface{}) {
	var ugs UserGameStats
	mapstructure.Decode(sdata, &ugs)
	ugs.Save()
}

func FunCoinStats(sdata interface{}) {
	var cs CoinStats
	mapstructure.Decode(sdata, &cs)
	cs.Save()
}
