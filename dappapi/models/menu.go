package models

import (
	"dappapi/global/orm"
	"dappapi/tools"
)

type Menu struct {
	Id    int    `gorm:"column:id;primary_key;AUTO_INCREMENT" json:" id "` //
	Name  string `gorm:"column:name" json:"name"`                          //
	Title string `gorm:"column:title" json:"cnname"`                       //
	Route string `gorm:"column:route" json:"route"`                        //路由名称
	Itype string `gorm:"column:type" json:"type"`
	Icon  string `gorm:"column:icon" json:"icon"`   //
	Pid   int    `gorm:"column:pid" json:"pid"`     //
	Sort  int    `gorm:"column:sort" json:"sort"`   //排序
	Show  int8   `gorm:"column:show" json:"show"`   //是否显示 0 显示1 不显示
	Ctime uint64 `gorm:"column:ctime" json:"ctime"` //
	Utime uint64 `gorm:"column:utime" json:"utime"` //
	Perm  string `gorm:"column:perm" json:"perm"`

	PName string `gorm:"-"`

	List []Menu `json:"list" gorm:"-"`
}

type MenuLable struct {
	Id     int             `json:"id" gorm:"-"`
	Parent string          `json:"parent" gorm:"-"`
	Type   string          `json:"type" gorm:"-"`
	Text   string          `json:"text" gorm:"-"`
	State  map[string]bool `json:"state" gorm:"-"`
}

func (Menu) TableName() string {
	return "admin_menu"
}

type MenuRole struct {
	Menu
	IsSelect bool `json:"is_select" gorm:"-"`
}

type MS []Menu

func (e *Menu) GetByMenuIds(ids []int) (m []Menu, err error) {
	menulist, err := e.GetPageByids(ids)
	m = make([]Menu, 0)
	for i := 0; i < len(menulist); i++ {
		if menulist[i].Pid != 0 {
			continue
		}
		menusInfo := DiguiMenu(&menulist, menulist[i])

		m = append(m, menusInfo)
	}
	return
}

func (e *Menu) SetMenu() (m []Menu, err error) {
	menulist, err := e.GetPage()
	m = make([]Menu, 0)
	for i := 0; i < len(menulist); i++ {
		if menulist[i].Pid != 0 {
			continue
		}
		menusInfo := DiguiMenu(&menulist, menulist[i])

		m = append(m, menusInfo)
	}
	return
}

func DiguiMenu(menulist *[]Menu, menu Menu) Menu {
	list := *menulist

	min := make([]Menu, 0)
	for j := 0; j < len(list); j++ {
		if menu.Id != list[j].Pid {
			continue
		}
		mi := Menu{}
		mi.Id = list[j].Id
		mi.Name = list[j].Name
		mi.Title = list[j].Title
		mi.Icon = list[j].Icon
		mi.Route = list[j].Route
		mi.Pid = list[j].Pid

		mi.List = []Menu{}
		min = append(min, mi)
	}
	menu.List = min
	return menu
}

func (e *MenuRole) Get() (Menu []MenuRole, err error) {
	table := orm.Eloquent["admin"].Table(e.TableName())
	if e.Name != "" {
		table = table.Where("menu_name = ?", e.Name)
	}
	if err = table.Order("sort").Find(&Menu).Error; err != nil {
		return
	}
	return
}

func (e *Menu) GetOne() (OneMenu Menu, err error) {
	table := orm.Eloquent["admin"].Table(e.TableName())
	if e.Name != "" {
		table = table.Where("name = ?", e.Name)
	}

	if e.Id != 0 {
		table = table.Where("id = ?", e.Id)
	}

	if err = table.First(&OneMenu).Error; err != nil {
		return
	}
	return
}

func (e *Menu) GetOneByName() (OneMenu Menu, err error) {
	table := orm.Eloquent["admin"].Table(e.TableName())

	if e.PName != "" {
		table = table.Where("name = ?", e.PName)
	}

	if e.Id != 0 {
		table = table.Where("id = ?", e.Id)
	}

	if err = table.First(&OneMenu).Error; err != nil {
		return
	}
	return
}

func (e *Menu) GetPage() (Menu []Menu, err error) {
	table := orm.Eloquent["admin"].Table(e.TableName())

	table = table.Where("`show` = ?", 0)

	table = table.Where("`type` IN (?)", []string{"m", "c"})

	// 数据权限控制
	if err = table.Order("`sort` ASC").Find(&Menu).Error; err != nil {
		return
	}
	return
}

func (e *Menu) GetPageByids(ids []int) (Menu []Menu, err error) {
	table := orm.Eloquent["admin"].Table(e.TableName())

	table = table.Where("`id` IN (?)", ids)

	table = table.Where("`show` = ?", 0)

	table = table.Where("`type` IN (?)", []string{"m", "c"})

	// 数据权限控制
	if err = table.Order("`sort` ASC").Find(&Menu).Error; err != nil {
		return
	}
	return
}

func (e *Menu) Create() (id int, err error) {
	result := orm.Eloquent["admin"].Table(e.TableName()).Create(&e)
	if result.Error != nil {
		err = result.Error
		return
	}

	id = e.Id
	return
}

func (e *Menu) Update(id int) (update Menu, err error) {
	if err = orm.Eloquent["admin"].Table(e.TableName()).First(&update, id).Error; err != nil {
		return
	}

	//参数1:是要修改的数据
	//参数2:是修改的数据
	if err = orm.Eloquent["admin"].Table(e.TableName()).Model(&update).Updates(&e).Error; err != nil {
		return
	}
	if err != nil {
		return
	}
	return
}

func (e *Menu) Delete(id int) (success bool, err error) {
	if err = orm.Eloquent["admin"].Table(e.TableName()).Where("menu_id = ?", id).Delete(&Menu{}).Error; err != nil {
		success = false
		return
	}
	success = true
	return
}

func (e *Menu) GetMenuPerm() (Menu []Menu, err error) {
	table := orm.Eloquent["admin"].Table(e.TableName())

	table = table.Where("`show` = ?", 0)

	// 数据权限控制
	if err = table.Order("`sort` ASC").Find(&Menu).Error; err != nil {
		return
	}
	return
}

func (e *Menu) GetMenuLabel(menuMap map[int]int) (menuListLabel []MenuLable, err error) {
	table := orm.Eloquent["admin"].Table(e.TableName())

	table = table.Where("`show` = ?", 0)

	var menuList []Menu
	// 数据权限控制
	if err = table.Order("`sort` ASC").Find(&menuList).Error; err != nil {
		return
	}
	menuListLabel = make([]MenuLable, len(menuList))
	for i, menu := range menuList {
		m := MenuLable{}
		m.Id = menu.Id
		if menu.Pid == 0 {
			m.Parent = "#"
		} else {
			m.Parent = tools.IntToString(menu.Pid)
		}
		m.Type = "menu"
		m.Text = menu.Title
		m.State = make(map[string]bool)
		m.State["selected"] = false
		if len(menuMap) != 0 && menu.Itype == "f" {
			for _, v := range menuMap {
				if v == menu.Id {
					m.State["selected"] = true
					break
				}
			}
		}
		menuListLabel[i] = m
	}
	return
}
