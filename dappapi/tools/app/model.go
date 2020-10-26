package app

type Response struct {
	// 代码
	Code int `json:"code" example:"200"`
	// 数据集
	Data interface{} `json:"data"`
	// 消息
	Msg string `json:"msg"`
}

type Page struct {
	List      interface{} `json:"list"`
	Count     int         `json:"count"`
	PageIndex int         `json:"pageIndex"`
	PageSize  int         `json:"pageSize"`
}

type PageExt struct {
	List  interface{}            `json:"list"`
	Count int                    `json:"count"`
	Ext   map[string]interface{} `json:"ext"`
}

type PageResponseExt struct {
	// 代码
	Code int `json:"code" example:"200"`
	// 数据集
	Data PageExt `json:"data"`
	// 消息
	Msg string `json:"msg"`
}

type PageResponse struct {
	// 代码
	Code int `json:"code" example:"200"`
	// 数据集
	Data Page `json:"data"`
	// 消息
	Msg string `json:"msg"`
}

func (res *Response) ReturnOK() *Response {
	res.Code = 200
	return res
}

func (res *PageResponseExt) ReturnOK() *PageResponseExt {
	res.Code = 200
	return res
}

func (res *Response) ReturnError(code int) *Response {
	res.Code = code
	return res
}

func (res *PageResponse) ReturnOK() *PageResponse {
	res.Code = 200
	return res
}
