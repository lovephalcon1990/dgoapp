package router

import (
	"dappapi/middleware"

	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {

	r := gin.New()
	middleware.InitMiddleware(r)

	authMiddleware, _ := middleware.AuthInit()
	// 注册系统路由
	InitSysRouter(r, authMiddleware)

	return r
}
