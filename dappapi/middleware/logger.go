package middleware

import (
	"dappapi/models"
	"dappapi/tools"
	config2 "dappapi/tools/config"
	"bytes"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/url"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

type bodyLogWriter struct {
	gin.ResponseWriter
	body *bytes.Buffer
}

func (w bodyLogWriter) Write(b []byte) (int, error) {
	w.body.Write(b)
	return w.ResponseWriter.Write(b)
}

// 日志记录到文件
func LoggerToFile() gin.HandlerFunc {

	return func(c *gin.Context) {
		// 开始时间
		startTime := time.Now()

		// 返回内容
		blw := &bodyLogWriter{body: bytes.NewBufferString(""), ResponseWriter: c.Writer}
		c.Writer = blw
		//请求头 请求体
		var buf bytes.Buffer
		tee := io.TeeReader(c.Request.Body, &buf)
		body, _ := ioutil.ReadAll(tee)
		c.Request.Body = ioutil.NopCloser(&buf)
		bodyStr, _ := url.QueryUnescape(string(body[:]))

		// 处理请求
		c.Next()

		// 结束时间
		endTime := time.Now()

		// 执行时间
		latencyTime := endTime.Sub(startTime)

		// 请求方式
		reqMethod := c.Request.Method

		// 请求路由
		reqUri := c.Request.RequestURI

		// 状态码
		statusCode := c.Writer.Status()

		// 请求IP
		clientIP := c.ClientIP()

		// 日志格式
		log.Infof(" %s %3d %13v %15s %s %s \r\n",
			startTime.Format("2006-01-02 15:04:05.9999"),
			statusCode,
			latencyTime,
			clientIP,
			reqMethod,
			reqUri,
		)

		if c.Request.Method != "OPTIONS" && config2.LogConfig.Operdb {
			SetDBOperLog(c, clientIP, statusCode, reqUri, reqMethod, latencyTime, blw, bodyStr)
		}
	}
}

// 写入操作日志表
// 该方法后续即将弃用
func SetDBOperLog(c *gin.Context, clientIP string, statusCode int, reqUri string, reqMethod string, latencyTime time.Duration, blw *bodyLogWriter, body string) {
	var sysOperLog *models.Req_log = &models.Req_log{}
	sysOperLog.Clinetip = clientIP
	sysOperLog.Location = tools.GetLocation(clientIP)
	sysOperLog.Code = statusCode
	if strings.Contains(reqUri, "cpapi") {
		sysOperLog.Aname = "cpapi"
	} else {
		sysOperLog.Aname = tools.GetUserName(c)
	}

	sysOperLog.Method = c.Request.Method
	sysOperLog.Requri, _ = url.QueryUnescape(reqUri)

	jsonstr, _ := json.Marshal(c.Request.Header)

	sysOperLog.Reqheader = string(jsonstr)
	sysOperLog.Reqparam = body
	sysOperLog.Resbody = blw.body.String()
	// sysOperLog.Reqparam, _ = tools.StructToJsonStr(b)
	sysOperLog.Ctime = tools.GetCurrntTime().Unix()
	sysOperLog.Costtime = latencyTime.Microseconds() / 1000
	sysOperLog.Ua = c.Request.UserAgent()
	if c.Err() == nil {
		sysOperLog.Code = 0
	}
	_, _ = sysOperLog.Create()
}
