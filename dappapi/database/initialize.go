package database

import "dappapi/tools/config"

func Setup() {

	for dbName, dbconf := range config.DBConfig {
		dbType := dbconf.Dbtype
		if dbType == "mysql" {
			var db = new(Mysql)
			db.Setup(dbName, dbconf)
		}
	}
}
