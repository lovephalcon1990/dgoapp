/**
 * 入口逻辑
 */
;layui.extend({
    setter: 'config',
    admin: 'lib/admin',
    view: 'lib/view',
    app: 'lib/app'
}).define(['setter','admin'], function(exports) { //入口逻辑
    var $ = layui.$,
        element = layui.element,
        admin = layui.admin,
        view = layui.view,
        setter = layui.setter,
        page = admin.tabsPage,
        bodyid = '#LAY_app_body',
        tabsid = 'layadmin-layout-tabs',
        render = function() {
            var route = layui.router(),
                path = route.path,
                pathUrl = admin.correctRouter(path.join('/')),
                init = function(type) {
                    render.haveInit && layer.closeAll();
                    render.haveInit = true;
                    $(bodyid).scrollTop(0);
                    delete page.type;
                };
            if( $.inArray(pathUrl, setter.tabMulti) != -1 ){
                pathUrl = route.href;
            }
            path.length || (path = ['']);
            ('' === path[path.length - 1]) && (path[path.length - 1] = setter.entry);
            if ('tab' === page.type && ('/' !== pathUrl || '/' === pathUrl && admin.tabsBody().html())) {
                admin.tabsBodyChange(page.index);
                init(page.type);
            } else {
                view().render('/' == pathUrl ? setter.home : path.join('/')).then(function(data) {
                    var curr, tabs = $('#LAY_app_tabsheader>li');
                    tabs.each(function(i) {
                        var id = $(this).attr('lay-id');
                        if (id === pathUrl) {
                            curr = true;
                            page.index = i;
                        }
                    });
                    if (setter.pageTabs && '/' !== pathUrl && !curr) {
                        $(bodyid).append('<div class="layadmin-tabsbody-item layui-show"></div>');
                        page.index = tabs.length;
                        element.tabAdd(tabsid, {
                            title: '<span>' + (data.title || '新标签页') + '</span>',
                            id: pathUrl,
                            attr: route.href
                        });
                    }
                    this.container = admin.tabsBody(page.index);
                    element.tabChange(tabsid, pathUrl);
                    admin.tabsBodyChange(page.index);
                }).done(function() {
                    element.render('breadcrumb', 'breadcrumb');
                    admin.tabsBody(page.index).on('scroll', function() {
                        var dates = $('.layui-laydate'),
                            popup = $('.layui-layer')[0];
                        if (dates[0]) {
                            dates.each(function() {
                                var e = $(this);
                                e.hasClass('layui-laydate-static') || e.remove();
                            });
                            $(this).find('input').blur();
                        }
                        popup && layer.closeAll('tips');
                    });
                });
                init();
            }
        },
        isLogin= function() {
            admin.request({
                url: layui.setter.requestUri+'user/info',
                async: false,
                done: function(res) {
                    $.extend(layui.setter, {dic:res.data});
                }
            });
        },
        run = function() {
            var route = layui.router(),
                path = route.path.join('/'),
                wrap = view(setter.container);
            if ($.inArray(path, setter.alonePages) != -1) {
                wrap.render(path).done(function() {
                    admin.pageType = 'alone';
                });
            } else {
                'home' === admin.pageType ? render() : wrap.render('layout.html').done(function() {
                    render();
                    element.render();
                    admin.screen() < 2 && admin.sideFlexible();
                    admin.pageType = 'home';
                });
                
            }
        };

    window.onhashchange = function() {
        run();
        layui.event.call(this, setter.MOD_NAME, 'hash({*})', layui.router());
    };
    layui.each(setter.extend, function(k, v) {
        var e = {};
        e[v] = '{/}' + setter.base + 'lib/extend/' + v;
        layui.extend(e);
    });
    isLogin();
    run();

    exports('index', {render: render});
});