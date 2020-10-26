package orm

import (
	"dappapi/tools/config"

	"github.com/jinzhu/gorm"
)

var Eloquent = make(map[string]*gorm.DB, config.ApplicationConfig.DbLen)
var MysqlConn = make(map[string]string, config.ApplicationConfig.DbLen)

// var Eloquent *gorm.DB
// var MysqlConn string

// var MainEloquent *gorm.DB
// var MainMysqlConn string
