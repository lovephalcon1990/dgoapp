package tools

import (
	config2 "dappapi/tools/config"
	"encoding/json"
	"errors"
	"os"
	"path"
	"time"

	log "github.com/sirupsen/logrus"
)

func InitLogger() {
	log.SetFormatter(&log.JSONFormatter{FieldMap: log.FieldMap{
		log.FieldKeyTime:  "@timestamp",
		log.FieldKeyLevel: "level",
		log.FieldKeyMsg:   "message",
	}})
	switch Mode(config2.ApplicationConfig.Mode) {
	case ModeDev:
		log.SetOutput(os.Stdout)
		log.SetLevel(log.TraceLevel)
	case ModeTest, ModeProd:
		file, err := os.OpenFile(config2.LogConfig.Dir+"/api-"+time.Now().Format("2006-01-02")+".log", os.O_WRONLY|os.O_APPEND|os.O_CREATE|os.O_SYNC, 0600)
		if err != nil {
			log.Fatalln("log init failed")
		}
		var info os.FileInfo
		info, err = file.Stat()
		if err != nil {
			log.Fatal(err)
		}
		fileWriter := logFileWriter{file, info.Size()}
		log.SetOutput(&fileWriter)
		log.SetLevel(log.TraceLevel)
	}

	log.SetReportCaller(true)
}

type logFileWriter struct {
	file *os.File
	size int64
}

func (p *logFileWriter) Write(data []byte) (n int, err error) {
	if p == nil {
		return 0, errors.New("logFileWriter is nil")
	}

	var mapStr map[string]string
	if err := json.Unmarshal(data, &mapStr); err != nil {
		return 0, errors.New("json is not formatter")
	}
	fileDir := config2.LogConfig.Dir + "/"
	var logFileName string
	now := time.Now()
	if mapStr["logFile"] != "" {
		logFileName = mapStr["logFile"] + "-" + now.Format("2006-01-02") + ".log"
	} else {
		logFileName = "api-" + now.Format("2006-01-02") + ".log"
	}
	fileName := path.Join(fileDir, logFileName)
	if p.file.Name() != fileName {
		p.file.Close()
		p.file, _ = os.OpenFile(fileName, os.O_WRONLY|os.O_APPEND|os.O_CREATE|os.O_SYNC, 0600)
	}
	n, e := p.file.Write(data)

	return n, e
}
