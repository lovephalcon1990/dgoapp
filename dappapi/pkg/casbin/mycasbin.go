package mycasbin

import (
	"dappapi/global/orm"
	"dappapi/tools/config"
	"strings"

	"github.com/casbin/casbin/v2"
	gormadapter "github.com/casbin/gorm-adapter/v2"
	"github.com/go-kit/kit/endpoint"
	_ "github.com/go-sql-driver/mysql"
	log "github.com/sirupsen/logrus"
)

var Em endpoint.Middleware

func Casbin() (*casbin.Enforcer, error) {
	conn := orm.MysqlConn["admin"]
	Apter, err := gormadapter.NewAdapter(config.DBConfig["admin"].Dbtype, conn, true)
	if err != nil {
		return nil, err
	}
	e, err := casbin.NewEnforcer("config/rbac_model.conf", Apter)
	e.AddFunction("suffix_match", suffixMatchFunc)
	if err != nil {
		return nil, err
	}
	if err := e.LoadPolicy(); err == nil {
		return e, err
	} else {
		log.Printf("casbin rbac_model or policy init error, message: %v \r\n", err.Error())
		return nil, err
	}
}

func suffixMatchFunc(args ...interface{}) (interface{}, error) {
	key1 := args[0].(string)
	key2 := args[1].(string)
	return strings.Contains(key1, key2), nil
}
