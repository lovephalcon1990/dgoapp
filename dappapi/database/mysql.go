package database

import (
	"dappapi/global/orm"
	"dappapi/tools/config"
	"bytes"
	"strconv"

	_ "github.com/go-sql-driver/mysql" //加载mysql
	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

var (
	DbType   string
	Host     string
	Port     int
	Name     string
	Username string
	Password string
)

func (e *Mysql) Setup(dbName string, dbConfig *config.Database) {

	var err error
	var db Database

	db = new(Mysql)
	orm.MysqlConn[dbName] = db.GetConnect(dbConfig)
	// log.Info(orm.MysqlConn)
	orm.Eloquent[dbName], err = db.Open(DbType, orm.MysqlConn[dbName])

	if err != nil {
		log.Fatalf("%s connect error %v", DbType, err)
	} else {
		log.Printf("%s connect success!", DbType)
	}

	if orm.Eloquent[dbName].Error != nil {
		log.Fatalf("database error %v", orm.Eloquent[dbName].Error)
	}

	orm.Eloquent[dbName].LogMode(true)

}

type Mysql struct {
}

func (e *Mysql) Open(dbType string, conn string) (db *gorm.DB, err error) {
	return gorm.Open(dbType, conn)
}

func (e *Mysql) GetConnect(dbconfig *config.Database) string {

	DbType = dbconfig.Dbtype
	Host = dbconfig.Host
	Port = dbconfig.Port
	Name = dbconfig.Name
	Username = dbconfig.Username
	Password = dbconfig.Password

	var conn bytes.Buffer
	conn.WriteString(Username)
	conn.WriteString(":")
	conn.WriteString(Password)
	conn.WriteString("@tcp(")
	conn.WriteString(Host)
	conn.WriteString(":")
	conn.WriteString(strconv.Itoa(Port))
	conn.WriteString(")")
	conn.WriteString("/")
	conn.WriteString(Name)
	conn.WriteString("?charset=utf8&parseTime=True&loc=Local&timeout=1000ms")
	return conn.String()
}
