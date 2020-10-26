package models

import (
	"dappapi/global/orm"

	"github.com/jinzhu/gorm"
)

type CoinStats struct {
	Id         int   `gorm:"column:id" json:"id"`
	Site       int   `gorm:"column:site" json:"site"`
	Day        int   `gorm:"column:day" json:"day"`
	Mainreason int   `gorm:"column:mainreason" json:"mainreason"`
	Subreason  int   `gorm:"column:subreason" json:"subreason"`
	Amount     int64 `gorm:"column:amount" json:"amount"`
}

func (cs *CoinStats) TableName() string {
	return "coin_stats"
}

func (cs *CoinStats) Save() (err error) {
	// sql := " INSERT INTO "+ cs.TableName() + "(`gameid`, `zoneid`, `day`, `site`, `tax`, `win`, `consume`) VALUES "
	var row GameStats
	table := orm.Eloquent["main"].Table(cs.TableName())

	table.Where("`site` = ? and `day`= ? and `mainreason` = ? and `subreason` = ?", cs.Site, cs.Day, cs.Mainreason, cs.Subreason).First(&row)

	if row.Id == 0 {
		if err = table.Set("gorm:insert_option", "ON DUPLICATE KEY UPDATE amount =amount + VALUES(amount)").Create(&cs).Error; err != nil {
			return
		}
	} else {
		table.Where("id = ?", row.Id).Update(map[string]interface{}{"amount": gorm.Expr("amount  + ?", cs.Amount)})
	}

	return nil
}

func (cs *CoinStats) GetData(istime, ietime, site int) (csList []CoinStats, err error) {
	table := orm.Eloquent["main"].Table(cs.TableName())

	table = table.Where("site = ?", site)

	if istime == ietime {
		table = table.Where("`day` = ?", istime)
	} else {
		table = table.Where("`day` >= ? and `day` <= ?", istime, ietime)
	}
	if err = table.Find(&csList).Error; err != nil {
		return
	}
	return
}
