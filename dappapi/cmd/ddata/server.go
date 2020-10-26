package ddata

import (
	"dappapi/database"
	"dappapi/models"
	config2 "dappapi/tools/config"
	"fmt"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var (
	config   string
	secret   string
	mode     string
	StartCmd = &cobra.Command{
		Use:   "ddata",
		Short: "initialize the database menu",
		Run: func(cmd *cobra.Command, args []string) {
			run()
		},
	}
)

// "name":"sys","title":"系统管理","type":"m","route":"","icon":"rate-half","pname":"0","perm":"","sort":80,"show":0
type node struct {
	Name  string  `json:"name"`
	Title string  `json:"title"`
	Type  string  `json:"type"`
	Route string  `json:"route"`
	Icon  string  `json:"icon"`
	Pname string  `json:"pname"`
	Perm  string  `json:"perm"`
	Sort  int     `json:"sort"`
	Show  int8    `json:"show"`
	Child []*node `json:"child"`
}

type conf struct {
	Title string `json:"title"`
	List  []*node
}

func init() {
	StartCmd.PersistentFlags().StringVarP(&mode, "mode", "m", "dev", "server mode ; eg:dev,test,prod")
}

func run() {
	config = "config/" + mode + "/settings.yml"
	usage := `start ddata init menu`
	//1. 读取配置
	config2.ConfigSetup(config)
	//2. 初始化数据库链接
	database.Setup()
	viper.SetConfigType("json")
	viper.SetConfigName("menu")
	viper.AddConfigPath("config")
	err := viper.ReadInConfig() // Find and read the config file
	if err != nil {             // Handle errors reading the config file
		panic(fmt.Errorf("Fatal error config file: %s \n", err))
	}
	//二维数据 不能直接接  json map 结构 坑位
	var c *conf
	viper.Unmarshal(&c)
	fmt.Println(usage)
	for _, o := range c.List {
		upMenu(o)
	}
	// fmt.Println(viper.ReadConfig)

}

func upMenu(item *node) (err error) {
	var menu models.Menu
	menu.Name = item.Name
	menu.Title = item.Title
	menu.Itype = item.Type
	menu.Icon = item.Icon
	menu.Route = item.Route
	menu.Show = item.Show
	menu.Sort = item.Sort
	menu.Perm = item.Perm
	if item.Pname == "0" {
		menu.Pid = 0
	} else {
		menu.PName = item.Pname
		pmenu, _ := menu.GetOneByName()
		if pmenu.Id != 0 {
			menu.Pid = pmenu.Id
		}
	}
	smenu, _ := menu.GetOne()
	if smenu.Id != 0 {
		menu.Update(smenu.Id)
	} else {
		menu.Create()
	}
	if item.Child != nil {
		for _, v := range item.Child {
			upMenu(v)
		}
	}
	return
}
