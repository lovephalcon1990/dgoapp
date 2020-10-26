package models

import (
	"dappapi/global/orm"
	"time"
)

type LoginLog struct {
	InfoId    int       `json:"id" gorm:"primary_key;AUTO_INCREMENT"` //主键
	Username  string    `json:"username" gorm:"type:varchar(128);"`   //用户名
	Status    string    `json:"status" gorm:"type:int(1);"`           //状态
	Ipaddr    string    `json:"ipaddr" gorm:"type:varchar(255);"`     //ip地址
	Location  string    `json:"location" gorm:"type:varchar(255);"`   //归属地
	Browser   string    `json:"browser" gorm:"type:varchar(255);"`    //浏览器
	Os        string    `json:"os" gorm:"type:varchar(255);"`         //系统
	Platform  string    `json:"platform" gorm:"type:varchar(255);"`   // 固件
	Ltime     time.Time `json:"ltime" gorm:"type:timestamp;"`         //登录时间
	Createby  string    `json:"createby" gorm:"type:varchar(128);"`   //创建人
	Updateby  string    `json:"updateby" gorm:"type:varchar(128);"`   //更新者
	DataScope string    `json:"dataScope" gorm:"-"`                   //数据
	Params    string    `json:"params" gorm:"-"`                      //
	Remark    string    `json:"remark" gorm:"type:varchar(255);"`     //备注
	Msg       string    `json:"msg" gorm:"type:varchar(255);"`
}

func (LoginLog) TableName() string {
	return "admin_log"
}

func (e *LoginLog) Get() (LoginLog, error) {
	var doc LoginLog

	table := orm.Eloquent["admin"].Table(e.TableName())
	if e.Ipaddr != "" {
		table = table.Where("ipaddr = ?", e.Ipaddr)
	}
	if e.InfoId != 0 {
		table = table.Where("id = ?", e.InfoId)
	}

	if err := table.First(&doc).Error; err != nil {
		return doc, err
	}
	return doc, nil
}

func (e *LoginLog) GetPage(pageSize int, pageIndex int) ([]LoginLog, int, error) {
	var doc []LoginLog

	table := orm.Eloquent["admin"].Select("*").Table(e.TableName())
	if e.Ipaddr != "" {
		table = table.Where("ipaddr = ?", e.Ipaddr)
	}
	if e.Status != "" {
		table = table.Where("status = ?", e.Status)
	}
	if e.Username != "" {
		table = table.Where("userName = ?", e.Username)
	}

	var count int

	if err := table.Order("id desc").Offset((pageIndex - 1) * pageSize).Limit(pageSize).Find(&doc).Error; err != nil {
		return nil, 0, err
	}
	table.Where("`deleted_at` IS NULL").Count(&count)
	return doc, count, nil
}

func (e *LoginLog) Create() (LoginLog, error) {
	var doc LoginLog
	e.Createby = "0"
	e.Updateby = "0"
	result := orm.Eloquent["admin"].Table(e.TableName()).Create(&e)
	if result.Error != nil {
		err := result.Error
		return doc, err
	}
	doc = *e
	return doc, nil
}

func (e *LoginLog) Update(id int) (update LoginLog, err error) {

	if err = orm.Eloquent["admin"].Table(e.TableName()).First(&update, id).Error; err != nil {
		return
	}

	//参数1:是要修改的数据
	//参数2:是修改的数据
	if err = orm.Eloquent["admin"].Table(e.TableName()).Model(&update).Updates(&e).Error; err != nil {
		return
	}
	return
}

func (e *LoginLog) BatchDelete(id []int) (Result bool, err error) {
	if err = orm.Eloquent["admin"].Table(e.TableName()).Where("id in (?)", id).Delete(&LoginLog{}).Error; err != nil {
		return
	}
	Result = true
	return
}
