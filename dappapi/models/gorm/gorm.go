package gorm

import (
	"github.com/jinzhu/gorm"
)

func AutoMigrate(db *gorm.DB) error {
	db.SingularTable(true)
	return db.AutoMigrate(
	// new(models.CasbinRule),
	).Error
}
