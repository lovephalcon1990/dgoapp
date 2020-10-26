package models

import (
	"dappapi/httplib"
	"dappapi/tools/config"
	"encoding/json"
	"io/ioutil"
	"time"

	"github.com/sirupsen/logrus"
)

type CpRet struct {
	Code  int                    `json:"code"`
	Msg   string                 `json:"msg"`
	Data  map[string]interface{} `json:"data"`
	Count int                    `json:"count"`
}

func Post(api string, reqbody []byte) (cpRet CpRet) {
	timeout := time.Duration(config.ApplicationConfig.ReadTimeout) * time.Second
	ReqUrl := config.ApplicationConfig.Cpdz + api

	req := httplib.Post(ReqUrl).SetTimeout(timeout, timeout).
		Header("Content-Type", "application/json").
		Body(reqbody)
	resp, err := req.Response()
	if err != nil {
		logrus.WithField("logFile", "err").Info("Param: %v", err)
		return
	}

	defer resp.Body.Close()

	p, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		logrus.WithField("logFile", "err").Info("read body: %s", err)
		return
	}
	json.Unmarshal(p, &cpRet)
	if cpRet.Code != 0 {
		logrus.WithField("logFile", "cpapi").Info(ReqUrl, string(reqbody), string(p))
		return
	}
	return cpRet
}
