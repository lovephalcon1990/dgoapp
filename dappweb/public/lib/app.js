/**
 * 业务助手
 */
;layui.define(['admin', 'table', 'form', 'laydate'], function(exports) {
    "use strict";

    var $ = layui.$,
        table = layui.table,
        form = layui.form,
        admin = layui.admin,
        setter = layui.setter;

    var App = {
        /**
         * 时间戳格式化
         * @param int sec 时间戳
         * @param string fmt 格式化
         */
        date: function(sec, fmt) {
            sec = parseInt(sec);
            if (isNaN(sec) || sec <= 0) {
                return '';
            }

            var fmt = fmt || 'yyyy-MM-dd HH:mm:ss',
                d = new Date(sec * 1000),
                dt = [d.getFullYear(), d.getMonth() + 1, d.getDate(),
                        d.getHours(), d.getMinutes(), d.getSeconds()];

            return fmt.replace(/yyyy|MM|dd|HH|mm|ss/g, function(str, idx) {
                dt.idx = ++dt.idx | 0;
                return lay.digit(dt[dt.idx]);
            });
        },

        /**
         * 重复n次s
         * @param string s
         * @param int n
         */
        repeat: function(s, n) {
            var r = '';
            for (var i = 0; i < n; i++) {
                r += s;
            }
            return r;
        },

        /**
         * 将IP字符串转成数值
         */
        ip2int: function(s) {
            var e = '(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])',
                e = new RegExp('^' + [e, e, e, e].join('\\.') + '$'), //x.x.x.x
                r = e.exec(s);

            if (r) {
                return (parseInt(r[1]) << 24 |
                        parseInt(r[2]) << 16 |
                        parseInt(r[3]) << 8 |
                        parseInt(r[4])) >>> 0;
            } else {
                return -1;
            }
        },

        /**
         * 将IP数值转成字符串
         */
        int2ip: function(i) {
            return (i < 0 || i > 0xFFFFFFFF) ? ''
                    : [i>>>24, i>>16 & 0xFF, i>>8 & 0xFF, i & 0xFF].join('.');
        },

        /**
         * 将钱数转成更具可读性的格式
         */
        money: function(m) {
            if (isNaN(m)) {
                return '';
            }
            var m = parseInt(m), p = '',
                w = 10000, b = 100000000;
            if (m < 0) {
                p = '-';
                m = Math.abs(m);
            }
            if (m >= w) {
                var s;
                if (m < b) {
                    m /= w;
                    s = '万';
                } else {
                    m /= b;
                    s = '亿';
                }
                m = Math.floor(m * 100) / 100;
                m += s;
            }
            return p + m;
        },

        moneyFmt: function(m){
            var m = m || 0;
            if (typeof m === 'number' || m.indexOf('.') === -1) {
                return m.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
            }
            var n = Number(m).toFixed(2),
                s = n.toString().split('.');
            return s[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,") + '.' + s[1];
        },
        state: function (s, l) {
            var c = ['green', 'red'],
                lang = l.split('|');
            return '<span style="color:' + c[s] + '">' + lang[s] + '</span>';
        },
        cmsImg: function (uri, h) {
            var exp = new RegExp(('(^http)')),
                h = h || false,
                s = '';
            if (!uri) {
                return "";
            }
            if (uri.indexOf('local://') === 0) {
                s = cdnUri + uri.substr(7) + '.png';
            } else if (exp.test(uri)) {
                s = uri;
            }
            if (h) {
                return '<img src="' + s + '" height="40" alt="头像">'
            }
            return s;
        },

        /**
         * 图片HTML
         * @param array|string urls 图片名字/地址,多个为数组或用|分隔的字符串
         * @param string title 提示文字
         */
        img: function(urls, title) {
            if (!urls) {
                return '';
            }
            if (typeof(urls) != 'object') {
                urls = urls.split('|');
            }
            var exp = new RegExp('(^http)|(^\/)'), cdn = setter.cdnUrl,
                html = [],
                title = title || '';

            for (var i = 0; i < urls.length; i++) {
                var s, b;
                if (urls[i].indexOf('local://') == 0) {
                    s = b = 'img/local/' + urls[i].substr(8);
                } else if (!exp.test(urls[i])) {
                    s = cdn + urls[i] + '-small';
                    b = cdn + urls[i];
                } else {
                    s = b = urls[i];
                }
                html[i] = '<a href="'+ b +'" target="_blank" title="'+ title
                        +'"><img src="'+ s +'" height="35" alt="'+ title +'"></a>';
            }

            return html.join(' ');
        },

        /**
         * 图标HTML
         */
        ico: function(name, title) {
            var title = title || 'ICO-'+ name;
            return name ? '<img src="img/icon/'+ name
                        +'.png" height="16" title="'+ title +'" alt="'+ title +'">' : '';
        },

        /**
         * 刷新
         */
        refresh: function() {
            admin.events.refresh();
        },

        /**
         * 渲染时间选择器
         */
        datePicker: function(filter) {
            $('[lay-filter="' + filter + '"] .LAY-app-date-picker').each(function() {
                var othis = $(this), val = othis.val(),
                    data = othis.data(),
                    options = {elem: othis[0], min: '1970-01-01', max: '2099-12-12', istoday: false};

                if (val && /^\d{10}$/.test(val)) { //简单判断值是时间戳则自动格式化
                    othis.val(App.date(val, data.format));
                }
                if (data.format && /HH|mm|ss/g.test(data.format)) { //根据格式化串确定时分秒选择器
                    options.type = 'datetime';
                }
                layui.laydate.render($.extend(options, data));
            });
        },

        /**
         * 绑定快捷输入按钮事件
         */
        fastInput: function(filter) {
            var wrap = $('[lay-filter="' + filter + '"] .LAY-app-fast-input'),
                input = $('[lay-filter="' + filter + '"] .LAY-app-fast-input-target');
            input.off('blur').on('blur', function() { //输入框失去焦点的时候记录当前光标所在位置
                var p = 0,
                    o = this;
                if ('selectionStart' in o) {
                    p = o.selectionStart;
                }
                $(o).data('pos', p);
            });
            wrap.find('button').on('click', function() {
                var p = input.data('pos'),
                    t = $(this).attr('title'),
                    v = input.val();
                input.val(p > 0 ? v.substring(0, p) + t + v.substring(p) : t + v);
            });
        },

        /**
         * 判断m是否在a内
         * @param string|int m
         * @param string|array a
         * @param string f 默认为英文逗号
         */
        in: function(m, a, f) {
            if (!a) {
                return false;
            } else {
                var f = f || ',';
                (typeof(a) == 'string') || (a = a.join(f));
                return (f + a + f).indexOf(f + m + f) != -1;
            }
        },

        /**
         * 连接数据列表中指定字段的值
         * @param array list 数据列表
         * @param string field 字段
         */
        join: function(list, field) {
            var a = [];
            if (list.length) {
                $.each(list, function(i, t) {
                    a.push(t[field]);
                });
            }
            return a.join(',');
        },

        /**
         * 解析模板
         */
        tpl: function(tpl, data) {
            if (typeof(tpl) == 'string') {
                if (tpl[0] != '#' && tpl[0] != '.') {
                    tpl = '#' + tpl;
                }
            }
            return layui.laytpl($(tpl).html()).render(data);
        },

        /**
         * 渲染数据表格
         * @param array cols 表头配置
         * @param object options 配置项见layui.table文档
         */
        renderTable: function(cols, options) {
            if ($.isArray(cols[0])) { //多级表头
                options.cols = cols;
            } else { //普通表头
                var stats = options.statsCol || false,
                    noNumbers = options.noNumbers || false;
                if (!noNumbers) {
                    cols.unshift({
                        type: 'numbers',
                        title: '序号'
                    }); //自动加上序号列
                }
                if (stats) {
                    cols.unshift({
                        type: "checkbox",
                        title: '选项'
                    });
                }
                options.cols = [cols];
            }
            $.each(options.cols, function (k) {
                $.each(options.cols[k], function (kk, vv) {
                    if(!vv.type && !vv.sort){
                        vv.sort = true;
                    }
                    if (!vv.type && !vv.width) { //自动设置列宽
                        switch (vv.field) {
                            case 'id':
                                vv.width = 80;
                                break;
                            case 'uid':
                            case 'mid':
                                vv.width = 121;
                                break;
                            case 'reason':
                            case 'time':
                            case 'createat':
                            case 'updateat':
                            case 'regat':
                            case 'ltime':
                            case 'ctime':
                            case 'atime':
                            case 'utime':
                            case 'mtime':
                            case 'stime':
                            case 'etime':
                            case 'curlogintime':
                                vv.width = 168;
                                break;
                            case 'order':
                                vv.width = 77;
                                break;
                            case 'status':
                            case 'state':
                                vv.width = 100;
                                break;
                            default:
                                vv.width = 121;
                                break;
                        }
                    }
                });
            });
            options.parseData = options.parseData || this.tableParseData;
            options.response = options.response || {
                statusName: 'code' //规定数据状态的字段名称，默认：code
                ,statusCode: 200 //规定成功的状态码，默认：0
                ,msgName: 'msg' //规定状态信息的字段名称，默认：msg
                ,countName: 'count' //规定数据总数的字段名称，默认：count
                ,dataName: 'data' //规定数据列表的字段名称，默认：data
              } 
            options.headers ={"Authorization": "Bearer "+ this.getCookie("jwt")};
            options.height = options.height || 'full-169';
            options.toolbar = options.toolbar || 'default'; //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
            options.totalRow = options.toolbar || true //开启合计行
            options.id = options.id || 'idDtable' // table ID
            if (options.page) {
                options.limit || (options.limit = 15);
                options.limits || (options.limits = [15, 25, 35, 100, 500]);
            }

            return table.render(options);
        },

        tableParseData:function(res){ //res 即为原始返回的数据
            switch (res.code) {
                case 401: //重新登录
                    layui.view.exit();
                    return 1;
                case 403:
                    layui.view.error('<cite>403：</cite>' +  ' 权限不足');
                    return {"msg":"您的权限不足"};
                case 200:
                    var ext = res.data.ext !== undefined ? res.data.ext : "";
                    return {
                        "code": res.code, //解析接口状态
                        "msg": res.msg, //解析提示文本
                        "count": res.data.count, //解析数据长度
                        "data": res.data.list, //解析数据列表
                        "ext":ext //backup
                      };
                default: return res;
            }

        },

        /**
         * 渲染表单
         * @param object options 配置项见layui.layer文档
         */
        renderForm: function(options, data) {
            var html = App.tpl(options.filter, data || {}),
                index;
            options.area = options.area || (admin.screen() < 2 ? ['80%'] : ['500px']);
            options.success = options.done || null;
            options.subform = options.subform || "LAY-app-form"
            index  = layer.open($.extend({
                type: 1,
                maxmin: true,
                content: html,
                btn: [
                    '<button class="layui-btn" layadmin-event="submitForm" lay-filter="' + options.subform + '">提交</button>',
                    '<button class="layui-btn layui-btn-primary" layadmin-event="resetForm" lay-filter="' + options.subform + '" >重置</button>',
                    '<button class="layui-btn layui-btn-primary layui-layer-close">取消</button>'
                ],
                btnStr: true,
                btnAlign: 'c'
            }, options));
            form.render(null, options.filter);
            options.full && layer.full(index);
        },

        /**
         * 设置记录状态
         */
        setStatus: function(url, data) {
            admin.request({
                type: 'post',
                url: url + '/setStatus',
                data: data,
                done: function(res) {
                    admin.popup({
                        content: res.msg,
                        end: App.refresh
                    });
                }
            });
        },


        /**
         * 设置记录排序
         */
        setOrder: function(url, data) {
            admin.request({
                type: 'post',
                url: url + '/setOrder',
                data: data,
                done: function(res) {
                    admin.popup({
                        content: res.msg,
                        end: App.refresh
                    });
                }
            });
        },

        /**
         * 发布
         */
        sendData: function(url, data) {
            admin.request({
                type: 'post',
                url: url + '/sendData',
                data: data,
                done: function(res) {
                    admin.popup({content: res.msg});
                }
            });
        },

        /**
         * 查询
         */
        searchForm: function(options) {
            //执行重载
            table.reload(options.tblReload, {
                page: {
                    curr: 1 //重新从第 1 页开始
                }
                ,where: options.fields
            });
        },
        /**
         * 设置cookie
         */
        setCookie: function ( name, value, expires, path, domain, secure ) {
            var today = new Date();
            today.setTime( today.getTime() );
            if ( expires ) {
                expires = expires * 1000 * 60 * 60 * 24;
            }
            var expires_date = new Date( today.getTime() + (expires) );
            document.cookie = name+"="+escape( value ) +
                ( ( expires ) ? ";expires="+expires_date.toGMTString() : "" ) +
                ( ( path ) ? ";path=" + path : "" ) +
                ( ( domain ) ? ";domain=" + domain : "" ) +
                ( ( secure ) ? ";secure" : "" );
        },
        /**
         * 获取cookie
         */
        getCookie : function ( name ) {
            var start = document.cookie.indexOf(name + "=");
            var len = start + name.length + 1;
            if ((!start) && (name != document.cookie.substring(0, name.length))) {
                return null;
            }
            if (start == -1) return null;
            var end = document.cookie.indexOf(";", len);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(len, end));
        },
        /**
         * 渲染select 查询项
         */
        renderFormSel: function(d, elem, name){
            var tpl = '<select name="'+name+'" lay-search >' +
                '                            <option value="">全部</option>' +
                '                            {{# layui.each(d, function(k, v){ }}' +
                '                            <option value="{{k}}">{{v}}</option>' +
                '                            {{# }); }}' +
                '                        </select>';
            $("#"+elem).html(layui.laytpl(tpl).render(d));
        },

        /**
         * 显示 or 隐藏
         */
        showOrHide:function(e1, e2){
            form.on('radio('+e1+')', function(data){
                if(data.value == 1){
                    $(data.elem).closest("."+e2).next().removeClass("layui-hide");
                }else{
                    $(data.elem).closest("."+e2).next().addClass("layui-hide");
                }
            });
        },
        tplClone:function(e1, e2, num){
            $("."+e1).on("click", ".btn-add", function(){
                var trTpl = $(this).closest(e2),
                    len = trTpl.parent().children().length,
                    flag = false,
                    addTpl = trTpl.clone(true);
                if(len >= num){
                    if(addTpl.children(":last").find(".btn-remove").length >= 1){
                        addTpl.children(":last").find(".btn-remove").removeClass("layui-hide");
                    }else{
                        addTpl.children(":last").removeClass("layui-hide");
                    }
                }
                if(addTpl.find(".layui-form-select").length > 0 ){
                    addTpl.find(".layui-form-select").remove();
                    flag =true;
                }
                addTpl.insertAfter(trTpl);
                if(flag){
                    form.render("select");
                }
            });
            $("."+e1).on("click", ".btn-remove", function () {
                $(this).closest(e2).remove();
                return true;
            });
        },
        jstree: function(e, d){
            layui.link("public/css/jstree.css");
            // jstree 添加所有选择id
            $.jstree.core.prototype.get_all_checked = function (full) {
                var obj = this.get_selected(), i, j;
                for (i = 0, j = obj.length; i < j; i++) {
                    obj = obj.concat(this.get_node(obj[i]).parents);
                }
                obj = $.grep(obj, function (v, i, a) {
                    return v != '#';
                });
                obj = obj.filter(function (itm, i, a) {
                    return i == a.indexOf(itm);
                });
                return full ? $.map(obj, $.proxy(function (i) {
                    return this.get_node(i);
                }, this)) : obj;
            };
            $('#'+e).jstree('destroy');
            $('#'+e).on('redraw.jstree', function (e) {
                $(".layer-footer").attr("domrefresh", Math.random());
            }).jstree($.extend(true,{
                "themes": {"stripes": true},
                "checkbox": {
                    "keep_selected_style": false,
                },
                "types": {
                    "root": {
                        "icon": "fa fa-folder-open",
                    },
                    "menu": {
                        "icon": "fa fa-folder-open",
                    },
                    "file": {
                        "icon": "fa fa-file-o",
                    }
                },
                "plugins": ["checkbox", "types"],
                "core": {
                    'check_callback': true,
                    "data":{}
                }
            },d)).bind("loaded.jstree", function (event, data) {
                // you get two params - event & data - check the core docs for a detailed description
                $(this).jstree("open_all");
            })     ;
        },

        /**
         *
         * @param e js 原生get dom
         * @param option
         */
        echarts: function(e, option){
            var o={},w,h,
                //用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
                o= {
                    resizeDomContainer:function () {
                        w = admin.screen() < 2 ? window.innerWidth * 0.9 : window.innerWidth * 0.75;
                        h = admin.screen() < 2 ? window.innerHeight * 0.6 : window.innerHeight * 0.5;
                        e.style.width = w + "px";
                        e.style.height = h + "px";
                    },
                    options:{
                        title: {
                            text: ''
                        },
                        tooltip : {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    color: '#999',
                                    // backgroundColor: '#6a7985'
                                }
                            }
                        },
                        legend: {
                            data:[]
                        },
                        toolbox: {
                            feature: {
                                magicType: {show: true, type: ['line', 'bar']},
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '2%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                // boundaryGap : false,
                                data : []
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : [
                        ]
                    }
                }
            layui.$.extend(true, o.options, option);
            return o;
        },
        trans: function(data, ev, a, b){
            var msg = "";
            if(ev == "NAN"){
                return "";
            }
            layui.each(data, function(k,v){
                if(v[a] == ev){
                    msg = v[b];
                    return ;
                }
            })
            return msg;
        },
        dicData: function () {
            return  layui.setter.dic.dic ;
        },
        sex: function (i) {
            return i == 1 ? '男' : '女';
        },
        uidjump: function (d, f) {
            var f = f || false,
                ft = f ? f.split("|") : ['uid', 'name'],
                uid = d[ft[0]] || d.uid,
                name = d[ft[1]] || d.name;
            return uid;

            return '<a class="layui-a" layadmin-event="jumpuinfo" ' +
                'data-href="/admin/game/usermng/info/" lay-uid="' + uid + '" lay-name="' + name + '">' + uid + '</a>';
            // retrun '<a class="layui-a" layadmin-event="jumpuinfo" data-href="/admin/game/usermng/info/' + d.uid+'" lay-title="'+d.uid + d.name'">'+ d.uid +'</a>';
        },
        itemSearch: function (q, p) {
            var s = q || 0,
                page = p !== undefined ? p : {
                    curr: 1,
                };
            form.on('submit(LAY-app-search)', function (data) {
                if (s == 1) {
                    var e = layui.$(this),
                        fp = e.closest('.layui-inline'),
                        qs = fp.next('.layui-block').find('.layui-input-block');
                    layui.$.each(qs.children(), function (k, v) {
                        if (!layui.$(v).hasClass('layui-btn-primary')) {
                            layui.$(v).addClass('layui-btn-primary');
                        }
                    });
                    data.field["quickday"] = null;
                }
                table.reload('idDtable', {
                    page: page,
                    where: data.field
                });
                return false;
            });
        },
    };

    $.extend(admin.events, {
        addUserLink: function(elem) {
            var route = layui.router(),
                path = admin.correctRouter(route.path.join('/'));
            if ('/' != path) {
                admin.confirm('确定添加快捷方式？', function() {
                    var item = $('#LAY-system-side-menu dd.layui-this[data-jump="' + path.substr(1) + '"]'),
                        icon = item.parent('dl').parent('li').find('i:first').attr('class'),
                        text = item.text();
                    icon && (icon = icon.match(/layui\-icon\-(\w+)/));
                    if (!text && admin.tabsPage.index) {
                        text = $('#LAY_app_tabsheader>li').eq(admin.tabsPage.index).find('span:first').text();
                    }
                    console.log({
                        type: 1,
                        title: text,
                        icon: icon ? icon[1] : '',
                        jump: route.href
                    });
                    return false;
                    admin.request({
                        type: 'post',
                        url: 'admin/addUserLink',
                        data: {
                            type: 1,
                            title: text,
                            icon: icon ? icon[1] : '',
                            jump: route.href
                        },
                        done: function(res) {
                            admin.popup({content: res.msg});
                        }
                    });
                });
            }
        },
        renderForm: function(elem) {
            var done = elem.attr('lay-done'),
                subform = elem.attr('lay-subform'),
                filter = elem.attr('lay-form'),
                area = elem.attr('lay-area');
            if(area){
                area = area.split(',');
            }
            App.renderForm({
                title: elem.attr('lay-title'),
                filter: filter,
                full: elem.attr('lay-full') || 0,
                subform: subform || filter || 'LAY-app-form',
                area: area || 0,
                done: done ? new Function('layero', 'index', done) : null
            }, elem.data());
        },

        /**
         * 批量设置记录状态
         */
        setStatus: function(elem) {
            var pk = elem.attr('lay-pk') || 'id',
                checks = table.checkStatus(elem.attr('lay-table')).data,
                ids = App.join(checks, pk),
                data = {},
                confirm;
            if (ids) {
                data[pk] = ids;
                confirm = elem.attr('lay-confirm');
                data = $.extend(data, elem.data());
                if (confirm) {
                    admin.confirm(confirm, function() {
                        App.setStatus(elem.attr('lay-url'), data);
                    });
                } else {
                    App.setStatus(elem.attr('lay-url'), data);
                }
            } else {
                admin.error('请选择要操作的数据');
            }
        },

        /**
         * 批量发布
         */
        sendData: function(elem) {
            var pk = elem.attr('lay-pk') || 'id',
                checks = table.checkStatus(elem.attr('lay-table')).data,
                ids = App.join(checks, pk),
                data = {};
            if (ids) {
                admin.confirm('确定发布？', function() {
                    data[pk] = ids;
                    App.sendData(elem.attr('lay-url'), $.extend(data, elem.data()));
                });
            } else {
                admin.error('请选择要操作的数据');
            }
        },
        resetForm: function (elem) {
            var f = elem.attr('lay-filter');
            if (f == undefined) {
                console.log("renderForm add attribute lay-subform ");
                return false;
            }
            $('form[lay-filter="' + f + '"]')[0].reset();
            return false;
        },
        submitForm: function (elem) { //form 提交 兼容layui监听事件 同时兼容form弹层底部按钮固定而设定
            var f = elem.attr('lay-filter');
            if (f == undefined) {
                console.log("renderForm add attribute lay-subform ");
                return false;
            }
            $('form[lay-filter="' + f + '"]').find('.layui-submit').trigger('click');
            return false;
        }

    });

    exports('app', App);
});