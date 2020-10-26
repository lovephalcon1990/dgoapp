package table2struct

import (
	"dappapi/database"
	"dappapi/global/orm"
	config2 "dappapi/tools/config"
	"fmt"
	"strings"

	"github.com/gohouse/converter"
	"github.com/spf13/cobra"
)

var (
	config   string
	mode     string
	db       string
	table    string
	StartCmd = &cobra.Command{
		Use:   "tbl2struct",
		Short: "table to struct",
		Run: func(cmd *cobra.Command, args []string) {
			run()
		},
	}
)

func init() {
	StartCmd.PersistentFlags().StringVarP(&db, "database", "d", "main", "select table eg main:aiwan_stats;admin:aiwan_admin")
	StartCmd.PersistentFlags().StringVarP(&table, "table", "t", "req_log", "table name")
	StartCmd.PersistentFlags().StringVarP(&mode, "mode", "m", "dev", "server mode ; eg:dev,test,prod")

}

func run() {
	config = "config/" + mode + "/settings.yml"
	//1. 读取配置
	config2.ConfigSetup(config)
	//2. 初始化数据库链接
	database.Setup()

	adminConn := orm.MysqlConn[db]

	t2stru := converter.NewTable2Struct()
	t2stru.Config(&converter.T2tConfig{
		// 如果字段首字母本来就是大写, 就不添加tag, 默认false添加, true不添加
		RmTagIfUcFirsted: false,
		// tag的字段名字是否转换为小写, 如果本身有大写字母的话, 默认false不转
		TagToLower: false,
		// 字段首字母大写的同时, 是否要把其他字母转换为小写,默认false不转换
		UcFirstOnly: false,
		//// 每个struct放入单独的文件,默认false,放入同一个文件(暂未提供)
		//SeperatFile: false,
	})
	modelName := strings.Replace(table, "_", "", 2) + ".go"
	// fmt.Println(viper.ReadConfig)
	// 开始迁移转换
	err := t2stru.
		// 指定某个表,如果不指定,则默认全部表都迁移
		Table(table).
		// 是否添加json tag
		EnableJsonTag(true).
		// 生成struct的包名(默认为空的话, 则取名为: package model)
		PackageName("models").
		// tag字段的key值,默认是orm
		TagKey("gorm").
		// 是否添加结构体方法获取表名
		RealNameMethod("TableName").
		// 生成的结构体保存路径
		SavePath("/data/mego/dappapi/models/" + modelName).
		// 数据库dsn,这里可以使用 t2t.DB() 代替,参数为 *sql.DB 对象
		Dsn(adminConn).
		// 执行
		Run()
	fmt.Println(err)
}
