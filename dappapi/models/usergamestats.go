package models

import (
	"dappapi/global/orm"

	"github.com/jinzhu/gorm"
)

type UserGameStats struct {
	Id      int    `gorm:"column:id" json:"id"`
	Uid     int    `gorm:"column:uid" json:"uid"`
	Site    int    `gorm:"column:site" json:"site"`
	Gameid  int    `gorm:"column:gameid" json:"gameid"`
	Day     int    `gorm:"column:day" json:"day"`
	Win     int64  `gorm:"column:win" json:"win"`
	Tax     uint64 `gorm:"column:tax" json:"tax"`
	Consume uint64 `gorm:"column:consume" json:"consume"`
}

func (ugs *UserGameStats) TableName() string {
	return "user_game_stats"
}

func (ugs *UserGameStats) Save() (err error) {
	// sql := " INSERT INTO "+ ugs.TableName() + "(`gameid`, `zoneid`, `day`, `site`, `tax`, `win`, `consume`) VALUES "
	var row UserGameStats
	table := orm.Eloquent["main"].Table(ugs.TableName())

	table.Where("`site` = ? and `day`= ? and `gameid` = ? and `uid` = ?", ugs.Site, ugs.Day, ugs.Gameid, ugs.Uid).First(&row)

	if row.Id == 0 {
		if err = table.Set("gorm:insert_option", "ON DUPLICATE KEY UPDATE tax =tax + VALUES(tax), win =win + VALUES(win), consume =consume + VALUES(consume)").Create(&ugs).Error; err != nil {
			return
		}
	} else {
		table.Where("id = ?", row.Id).Update(map[string]interface{}{"tax": gorm.Expr("tax  + ?", ugs.Tax), "win": gorm.Expr("win  + ?", ugs.Win), "consume": gorm.Expr("consume  + ?", ugs.Consume)})
	}

	return nil
}

func (ugs *UserGameStats) GetData(istime, ietime, site, gameid, act int) (ugsList []UserGameStats, err error) {
	table := orm.Eloquent["main"].Table(ugs.TableName())
	var having string = "SUM(win) < 0"
	var sort string = "ASC"
	if act == 1 {
		having = "SUM(win) > 0"
		sort = "DESC"
	}
	table = table.Select("uid, SUM(win) as win").Group("uid").Where("site = ? and gameid = ?", site, gameid).Having(having).Order("SUM(win) " + sort)

	if istime == ietime {
		table = table.Where("`day` = ?", istime)
	} else {
		table = table.Where("`day` >= ? and `day` <= ?", istime, ietime)
	}
	if err = table.Find(&ugsList).Offset(0).Limit(10).Error; err != nil {
		return
	}
	return
}
