package models

import (
	"dappapi/global/orm"

	"github.com/jinzhu/gorm"
)

type FullStats struct {
	Id     int    `gorm:"column:id" json:"id"`
	Day    int    `gorm:"column:day" json:"day"`
	Site   int    `gorm:"column:site" json:"site"`
	Item   string `gorm:"column:item" json:"item"`
	Amount int    `gorm:"column:amount" json:"amount"`
}

func (fs *FullStats) TableName() string {
	return "full_stats"
}

func (fs *FullStats) Save() (err error) {
	// sql := " INSERT INTO "+ fs.TableName() + "(`gameid`, `zoneid`, `day`, `site`, `tax`, `win`, `consume`) VALUES "
	var row FullStats
	table := orm.Eloquent["main"].Table(fs.TableName())

	table.Where("`site` = ? and `day`= ? and `item` = ? ", fs.Site, fs.Day, fs.Item).First(&row)

	if row.Id == 0 {
		if err = table.Set("gorm:insert_option", "ON DUPLICATE KEY UPDATE amount =amount + VALUES(amount)").Create(&fs).Error; err != nil {
			return
		}
	} else {
		table.Where("id = ?", row.Id).Update(map[string]interface{}{"amount": gorm.Expr("amount  + ?", fs.Amount)})
	}

	return nil
}
