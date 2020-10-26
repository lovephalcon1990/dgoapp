package models

import (
	"dappapi/global/orm"

	"github.com/jinzhu/gorm"
)

type GameStats struct {
	Id      int    `gorm:"column:id" json:"id"`
	Gameid  int16  `gorm:"column:gameid" json:"gameid"`
	Zoneid  int    `gorm:"column:zoneid" json:"zoneid"`
	Day     int    `gorm:"column:day" json:"day"`
	Site    int    `gorm:"column:site" json:"site"`
	Tax     uint64 `gorm:"column:tax" json:"tax"`
	Win     int64  `gorm:"column:win" json:"win"`
	Consume uint64 `gorm:"column:consume" json:"consume"`
}

func (gs *GameStats) TableName() string {
	return "game_stats"
}

func (gs *GameStats) Save() (err error) {
	// sql := " INSERT INTO "+ gs.TableName() + "(`gameid`, `zoneid`, `day`, `site`, `tax`, `win`, `consume`) VALUES "
	var row GameStats
	table := orm.Eloquent["main"].Table(gs.TableName())

	table.Where("`site` = ? and `day`= ? and `gameid` = ? and `zoneid` = ?", gs.Site, gs.Day, gs.Gameid, gs.Zoneid).First(&row)

	if row.Id == 0 {
		if err = table.Set("gorm:insert_option", "ON DUPLICATE KEY UPDATE tax =tax + VALUES(tax), win =win + VALUES(win), consume =consume + VALUES(consume)").Create(&gs).Error; err != nil {
			return
		}
	} else {
		table.Where("id = ?", row.Id).Update(map[string]interface{}{"tax": gorm.Expr("tax  + ?", gs.Tax), "win": gorm.Expr("win  + ?", gs.Win), "consume": gorm.Expr("consume  + ?", gs.Consume)})
	}

	return nil
}

func (gs *GameStats) GetData(istime, ietime, site int) (gsList []GameStats, err error) {
	table := orm.Eloquent["main"].Table(gs.TableName())

	table = table.Select("gameid, sum(tax) as tax, sum(win) as win, sum(consume) as consume").Group("gameid").Where("site = ?", site)

	if istime == ietime {
		table = table.Where("`day` = ?", istime)
	} else {
		table = table.Where("`day` >= ? and `day` <= ?", istime, ietime)
	}
	if err = table.Find(&gsList).Error; err != nil {
		return
	}
	return
}

func (gs *GameStats) GetDataByDay(istime, ietime, site int) (gsList []GameStats, err error) {
	table := orm.Eloquent["main"].Table(gs.TableName())

	table = table.Select("`day`, sum(tax) as tax, sum(win) as win, sum(consume) as consume").Group("`day`").Where("site = ?", site)

	if istime == ietime {
		table = table.Where("`day` = ?", istime)
	} else {
		table = table.Where("`day` >= ? and `day` <= ?", istime, ietime)
	}
	if err = table.Find(&gsList).Error; err != nil {
		return
	}
	return
}
