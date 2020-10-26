package router

import (
	"dappapi/apis/cp"
	"dappapi/apis/system"
	_ "dappapi/docs"
	"dappapi/handler"
	"dappapi/middleware"
	"dappapi/pkg/jwtauth"
	jwt "dappapi/pkg/jwtauth"

	"github.com/gin-gonic/gin"
	ginSwagger "github.com/swaggo/gin-swagger"
	"github.com/swaggo/gin-swagger/swaggerFiles"
)

func InitSysRouter(r *gin.Engine, authMiddleware *jwt.GinJWTMiddleware) *gin.RouterGroup {
	g := r.Group("/goapi/v1")

	cp := r.Group("/cpapi/v1")

	cpRouterInit(cp, authMiddleware)

	// swagger；注意：生产环境可以注释掉
	sysSwaggerRouter(g)

	// 需要认证
	sysCheckRoleRouterInit(g, authMiddleware)

	return g
}

func sysSwaggerRouter(r *gin.RouterGroup) {
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
}

func cpRouterInit(r *gin.RouterGroup, authMiddleware *jwt.GinJWTMiddleware) {
	r.POST("/user/reg", cp.Reg)
	r.POST("/user/epwd", cp.InitPasswd)
	r.POST("/user/token", authMiddleware.AuthToken)
	r.POST("/async/report", cp.Report)
}

func sysCheckRoleRouterInit(r *gin.RouterGroup, authMiddleware *jwtauth.GinJWTMiddleware) {
	r.POST("/user/login", authMiddleware.LoginHandler)
	r.POST("/user/setpwd", system.SetPasswd)
	v1 := r.Use(authMiddleware.MiddlewareFunc())
	{
		v1.GET("/logout", handler.LogOut)
		// v1.GET("/sys/info", system)
		v1.GET("/sys/menu", system.GetMenuList)
		v1.GET("/user/info", system.GetSysUser)
	}

	v2 := v1.Use(middleware.AuthCheckRole())
	{
		v2.GET("/user/list", system.GetSysUserList)
		v2.POST("/user/save", system.InsertSysUser)
		v2.POST("/user/resetpwd", system.ResetPasswd)

		v2.GET("/role/list", system.GetSysRoleList)
		v2.POST("/role/save", system.SaveSysRole)

		v2.GET("/role/perm", system.GetMenuRole)
		v2.POST("/role/saveperm", system.RolePermSave)

		v2.GET("/gdata/list", system.Glist)
		v2.POST("/gdata/win", system.Win)

		v2.GET("/daycnt/list", system.Dlist)
		v2.GET("/usermng/list", system.UmngGet)
	}

}
