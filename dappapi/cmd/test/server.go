package test

import (
	"dappapi/models"
	config2 "dappapi/tools/config"
	"encoding/json"
	"fmt"

	"github.com/spf13/cobra"
)

var (
	secret   string
	api      string
	config   string
	StartCmd = &cobra.Command{
		Use:   "test",
		Short: "initialize the database",
		Run: func(cmd *cobra.Command, args []string) {
			run()
		},
	}
)

func init() {
	// StartCmd.PersistentFlags().StringVarP(&config, "config", "c", "config/settings.yml", "Start server with provided configuration file")
	// StartCmd.PersistentFlags().StringVarP(&mode, "mode", "m", "dev", "server mode ; eg:dev,test,prod")
	StartCmd.PersistentFlags().StringVarP(&secret, "secret", "s", "YVXX6XOJPTT2LH4ZXC6U7IQ6DA23AFGN", "test secret; eg:YVXX6XOJPTT2LH4ZXC6U7IQ6DA23AFGN")
	StartCmd.PersistentFlags().StringVarP(&api, "api", "a", "users/list", "test secret; eg:YVXX6XOJPTT2LH4ZXC6U7IQ6DA23AFGN")
}

func run() {
	config = "config/dev/settings.yml"
	config2.ConfigSetup(config)
	usage := `start test`
	// secret := tools.NewGoogleAuth().GetSecret()
	// secret := "UTHGQODT7AXEFE5EOX7NU746EVX6CST6"

	// qrcordUrl := tools.NewGoogleAuth().GetQrcodeUrl("test.qq.com", secret)

	// code, err := tools.NewGoogleAuth().GetCode(secret)

	// sec := time.Duration(2) * time.Second

	param := map[string]interface{}{
		"uids": []int{12382, 138620},
	}
	jsonStr, _ := json.Marshal(param)
	models.Post(api, jsonStr)
	fmt.Println(usage)
}
