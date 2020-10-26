package api

import (
	"dappapi/database"
	"dappapi/global/orm"
	"dappapi/router"
	"dappapi/tools"
	config2 "dappapi/tools/config"
	"context"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var (
	config   string
	port     string
	mode     string
	StartCmd = &cobra.Command{
		Use:     "server",
		Short:   "Start API server",
		Example: "app server config/settings.yml",
		PreRun: func(cmd *cobra.Command, args []string) {
			usage()
			setup()
		},
		RunE: func(cmd *cobra.Command, args []string) error {
			return run()
		},
	}
)

func init() {
	StartCmd.PersistentFlags().StringVarP(&port, "port", "p", "8000", "Tcp port server listening on")
	StartCmd.PersistentFlags().StringVarP(&mode, "mode", "m", "dev", "server mode ; eg:dev,test,prod")
}

func usage() {
	usageStr := `starting dappapi server`
	log.Printf("%s\n", usageStr)
}

func setup() {
	config = "config/" + mode + "/settings.yml"
	//1. 读取配置
	config2.ConfigSetup(config)
	//2. 设置日志
	tools.InitLogger()
	//3. 初始化数据库链接
	database.Setup()

}

func run() error {
	if mode != "" {
		config2.SetConfig(config, "settings.application.mode", mode)
	}
	if viper.GetString("settings.application.mode") == string(tools.ModeProd) {
		gin.SetMode(gin.ReleaseMode)
	}

	r := router.InitRouter()

	for _, gorm := range orm.Eloquent {
		defer gorm.Close()
	}
	// defer orm.Eloquent.Close()
	if port != "" {
		config2.SetConfig(config, "settings.application.port", port)
	}

	srv := &http.Server{
		Addr:    config2.ApplicationConfig.Host + ":" + config2.ApplicationConfig.Port,
		Handler: r,
	}

	go func() {
		// 服务连接
		if config2.ApplicationConfig.IsHttps {
			if err := srv.ListenAndServeTLS(config2.SslConfig.Pem, config2.SslConfig.KeyStr); err != nil && err != http.ErrServerClosed {
				log.Fatalf("listen: %s\n", err)
			}
		} else {
			if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
				log.Fatalf("listen: %s\n", err)
			}
		}
	}()
	content, _ := ioutil.ReadFile("./static/app.txt")
	fmt.Println(string(content))
	fmt.Printf("%s Server Run http://127.0.0.1:%s/ \r\n", tools.GetCurrntTimeStr(), config2.ApplicationConfig.Port)
	fmt.Printf("%s Swagger URL http://127.0.0.1:%s/swagger/index.html \r\n", tools.GetCurrntTimeStr(), config2.ApplicationConfig.Port)
	fmt.Printf("%s Enter Control + C Shutdown Server \r\n", tools.GetCurrntTimeStr())
	// 等待中断信号以优雅地关闭服务器（设置 5 秒的超时时间）
	quit := make(chan os.Signal)
	signal.Notify(quit, os.Interrupt)
	<-quit
	fmt.Printf("%s Shutdown Server ... \r\n", tools.GetCurrntTimeStr())

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		log.Fatal("Server Shutdown:", err)
	}
	log.Println("Server exiting")
	return nil
}
