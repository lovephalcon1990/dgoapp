package cmd

import (
	"dappapi/cmd/api"
	"dappapi/cmd/ddata"
	"dappapi/cmd/table2struct"
	"dappapi/cmd/test"
	"os"

	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:               "dappapi",
	Short:             "-v",
	SilenceUsage:      true,
	DisableAutoGenTag: true,
	Long:              `dappapi`,
	Args: func(cmd *cobra.Command, args []string) error {
		// if len(args) < 1 {
		// 	return errors.New("requires at least one arg")
		// }
		return nil
	},
	PersistentPreRunE: func(*cobra.Command, []string) error { return nil },
	Run: func(cmd *cobra.Command, args []string) {
		usageStr := `dappapi 1.0.0 欢迎使用，可以是用 -h 查看命令`
		log.Printf("%s\n", usageStr)
	},
}

func init() {
	rootCmd.AddCommand(api.StartCmd)
	rootCmd.AddCommand(test.StartCmd)
	rootCmd.AddCommand(ddata.StartCmd)
	rootCmd.AddCommand(table2struct.StartCmd)
}

//Execute : dappapily commands
func Execute() {
	if err := rootCmd.Execute(); err != nil {
		os.Exit(-1)
	}
}
