package system

import (
	"dappapi/models"
	"dappapi/tools"
	"dappapi/tools/app"

	"github.com/gin-gonic/gin"
)

// @Summary Menu列表数据
// @Description 获取JSON
// @Tags 菜单
// @Param menuName query string false "menuName"
// @Success 200 {string} string "{"code": 200, "data": [...]}"
// @Success 200 {string} string "{"code": -1, "message": "抱歉未找到相关信息"}"
// @Router /api/v1/sys/menu [get]
// @Security Bearer
func GetMenuList(c *gin.Context) {
	var Menu models.Menu
	roleid := tools.GetRoleId(c)
	roleName := tools.GetRoleName(c)
	if roleName == "admin" {
		result, err := Menu.SetMenu()
		tools.HasError(err, "抱歉未找到相关信息", -1)

		app.OK(c, result, "")
	} else {
		var perm *models.Perm
		permList, err1 := perm.GetByRoleid(roleid)
		tools.HasError(err1, "获取角色权限失败", 500)
		menuIdSlice := make([]int, len(permList))
		for i, p := range permList {
			menuIdSlice[i] = p.Id
		}
		result, err := Menu.GetByMenuIds(menuIdSlice)
		tools.HasError(err, "抱歉未找到相关信息", -2)

		app.OK(c, result, "")
	}

}

// @Summary 根据角色名称获取菜单列表数据（左菜单使用）
// @Description 获取JSON
// @Tags 菜单
// @Param id path int true "id"
// @Success 200 {string} string "{"code": 200, "data": [...]}"
// @Success 200 {string} string "{"code": -1, "message": "抱歉未找到相关信息"}"
// @Router /api/v1/menurole [get]
// @Security Bearer
func GetMenuRole(c *gin.Context) {
	var Menu models.Menu
	var Perm models.Perm
	var roleid int
	var err error
	roleid = tools.StrToInt(err, c.DefaultQuery("roleid", "1"))

	permResult, err := Perm.GetByRoleid(roleid)
	tools.HasError(err, "获取角色权限失败", 500)
	menuIdMap := make(map[int]int)

	for i, m := range permResult {
		menuIdMap[i] = m.Id
	}

	result, err := Menu.GetMenuLabel(menuIdMap)
	tools.HasError(err, "获取失败", 500)
	app.OK(c, result, "")
}
