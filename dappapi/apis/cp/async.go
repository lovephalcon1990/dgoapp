package cp

import (
	"dappapi/models"
	"dappapi/tools/app"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/sirupsen/logrus"
)

func Report(c *gin.Context) {
	cCp := c.Copy()
	go func() {
		var report models.JsonBody
		err := cCp.ShouldBindWith(&report, binding.JSON)

		if err != nil {
			logrus.WithField("logFile", "asyncerror").Error(report)
		} else {
			logrus.WithField("logFile", "async").Info(report)
			report.Handle()
		}
	}()
	app.OK(c, gin.H{}, "success")
}
