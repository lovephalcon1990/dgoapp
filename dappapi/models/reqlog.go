package models

import (
	"dappapi/global/orm"
)

type Req_log struct {
	Id        uint   `gorm:"column:id;primary_key;AUTO_INCREMENT" json:"id"`
	Clinetip  string `gorm:"column:clinetip" json:"clinetip"`
	Location  string `gorm:"column:location" json:"location"`
	Code      int    `gorm:"column:code" json:"code"`
	Requri    string `gorm:"column:requri" json:"requri"`
	Method    string `gorm:"column:method" json:"method"`
	Ua        string `gorm:"column:ua" json:"ua"`
	Aname     string `gorm:"column:aname" json:"aname"`
	Reqheader string `gorm:"column:reqheader" json:"reqheader"`
	Reqparam  string `gorm:"column:reqparam" json:"reqparam"`
	Resbody   string `gorm:"column:resbody" json:"resbody"`
	Costtime  int64  `gorm:"column:costtime" json:"costtime"`
	Ctime     int64  `gorm:"column:ctime" json:"ctime"`
}

func (*Req_log) TableName() string {
	return "req_log"
}

func (rl *Req_log) Create() (id uint, err error) {
	//添加数据
	if err = orm.Eloquent["main"].Table(rl.TableName()).Create(&rl).Error; err != nil {
		return
	}
	id = rl.Id
	return
}
