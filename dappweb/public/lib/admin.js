;layui.define('view', function(exports) {
    "use strict";

    var $ = layui.$,
        element = layui.element,
        view = layui.view,
        setter = layui.setter,
        wrap = $('#' + setter.container),
        win = $(window),
        body = $('body'),
        bodyid = '#LAY_app_body',
        flexid = 'LAY_app_flexible',
        menuid = 'LAY-system-side-menu',
        tabHeadid = '#LAY_app_tabsheader>li',
        showClass = 'layui-show',
        thisClass = 'layui-this',
        spreadClass = 'layadmin-side-spread-sm',
        shrinkClass = 'layadmin-side-shrink',
        rightClass = 'layui-icon-shrink-right',
        leftClass = 'layui-icon-spread-left',
        tabsClass = 'layadmin-tabsbody-item',
        Admin = {
            exit: view.exit,
            popup: view.popup,
            error: view.error,
            confirm: view.confirm,
            request: view.request,
            screen: function() {
                var width = win.width();
                return width >= 1200 ? 3 : width >= 992 ? 2 : width >= 768 ? 1 : 0;
            },
            sideFlexible: function(status) {
                var flex = $('#' + flexid),
                    screen = Admin.screen();
                if ('spread' === status) {
                    flex.removeClass(leftClass).addClass(rightClass);
                    screen < 2 ? wrap.addClass(spreadClass) : wrap.removeClass(spreadClass);
                    wrap.removeClass(shrinkClass);
                } else {
                    flex.removeClass(rightClass).addClass(leftClass);
                    screen < 2 ? wrap.removeClass(shrinkClass) : wrap.addClass(shrinkClass);
                    wrap.removeClass(spreadClass);
                }
                layui.event.call(this, setter.MOD_NAME, 'side({*})', {status: status});
            },
            on: function(events, filter) {
                return layui.onevent.call(this, setter.MOD_NAME, events, filter);
            },
            tabsPage: {},
            tabsBody: function(index) {
                return $(bodyid).find('.' + tabsClass).eq(index || 0);
            },
            tabsBodyChange: function(index) {
                Admin.tabsBody(index).addClass(showClass).siblings().removeClass(showClass),
                Admin.events.rollPage('auto', index)
            },
            resizeFn: {},
            resize: function(fn) {
                var route = layui.router(),
                    key = route.path.join('-');
                win.off('resize', Admin.resizeFn[key]);
                fn();
                Admin.resizeFn[key] = fn;
                win.on('resize', Admin.resizeFn[key]);
            },
            runResize: function() {
                var route = layui.router(),
                    key = route.path.join('-');
                Admin.resizeFn[key] && Admin.resizeFn[key]();
            },
            delResize: function() {
                var route = layui.router(),
                    key = route.path.join('-');
                win.off('resize', Admin.resizeFn[key]);
                delete Admin.resizeFn[key];
            },
            correctRouter: function(path) {
                /^\//.test(path) || (path = '/' + path);
                return path.replace(/^(\/+)/, '/').replace(new RegExp('/' + setter.entry + '$'), '/');
            },
            closeThisTabs: function() {
                Admin.tabsPage.index && $(tabHeadid).eq(Admin.tabsPage.index).find('.layui-tab-close').trigger('click');
            }
        };

    Admin.events = {
        flexible: function(wrap) {
            var flex = wrap.find('#' + flexid),
                has = flex.hasClass(leftClass);
            Admin.sideFlexible(has ? 'spread' : null);
        },
        refresh: function() {
            layui.index.render();
        },
        rollPage: function(type, index) {
            var head = $('#LAY_app_tabsheader'),
                items = head.children('li'),
                width = head.outerWidth(),
                left = parseFloat(head.css('left'));
            if ('left' === type) {
                if (!left && left <= 0) {
                    return;
                }
                var cmp = -left - width;
                items.each(function(k, v) {
                    var item = $(v),
                        pos = item.position().left;
                    if (pos >= cmp) {
                        head.css('left', -pos);
                        return false;
                    }
                });
            } else if ('auto' === type) {
                !function() {
                    var pos, item = items.eq(index);
                    if (item[0]) {
                        pos = item.position().left;
                        if (pos < -left) {
                           return head.css('left', -pos);
                        }
                        if (pos + item.outerWidth() >= width - left) {
                            var cmp = pos + item.outerWidth() - (width - left);
                            items.each(function(k, v) {
                                var item = $(v),
                                    pos = item.position().left;
                                if (pos + left > 0 && pos - left > cmp) {
                                    head.css('left', -pos);
                                    return false;
                                }
                            });
                        }
                    }
                }();
            } else {
                items.each(function(k, v) {
                    var item = $(v),
                        pos = item.position().left;
                    if (pos + item.outerWidth() >= width - left) {
                        head.css('left', -pos);
                        return false;
                    }
                });
            }
        },
        leftPage: function() {
            Admin.events.rollPage('left');
        },
        rightPage: function() {
            Admin.events.rollPage();
        },
        closeThisTabs: function() {
            Admin.closeThisTabs();
        },
        closeOtherTabs: function(type) {
            var rmClass = 'LAY-system-pagetabs-remove';
            if ('all' === type) {
                $(tabHeadid + ':gt(0)').remove();
                $(bodyid).find('.' + tabsClass + ':gt(0)').remove();
            } else {
                $(tabHeadid).each(function(i, t) {
                    if (i && i != Admin.tabsPage.index) {
                        $(t).addClass(rmClass);
                        Admin.tabsBody(i).addClass(rmClass);
                    }
                });
                $('.' + rmClass).remove();
            }
        },
        closeAllTabs: function() {
            Admin.events.closeOtherTabs('all');
            location.hash = '';
        },
        shade: function() {
            Admin.sideFlexible();
        },
        logout: function() {
            Admin.request({
                type: 'get',
                url: layui.setter.requestUri +'logout',
                data: {},
                done: function(res) {
                    Admin.exit();
                    view.setCookie("jwt", "");
                }
            });
        }
    };

    body.addClass('layui-layout-body');
    Admin.screen() < 1 && delete setter.pageTabs;
    setter.pageTabs || wrap.addClass('layadmin-tabspage-none');

    Admin.on('hash(side)', function(route) {
        var path = route.path,
            getData = function(elem) {
                return {
                    list: elem.children('.layui-nav-child'),
                    jump: elem.data('jump')
                };
            },
            menu = $('#' + menuid),
            itemedClass = 'layui-nav-itemed',
            render = function(items) {
                var pathUrl = Admin.correctRouter(path.join('/'));
                items.each(function(k, v) {
                    var itemed = false, //是否展开该级菜单(直接通过链接访问非根路径时)
                        elem0 = $(v),
                        data0 = getData(elem0),
                        dds0 = data0.list.children('dd');
                    dds0.each(function(kk, vv) {
                        var elem1 = $(vv),
                            data1 = getData(elem1),
                            dds1 = data1.list.children('dd');
                        dds1.each(function(kkk, vvv) {
                            var elem2 = $(vvv),
                                data2 = getData(elem2);
                            if (pathUrl == Admin.correctRouter(data2.jump)) {
                                var c = data2.list[0] ? itemedClass : thisClass;
                                itemed = true;
                                elem2.addClass(c).siblings().removeClass(c);
                                return false;
                            }
                        });
                        if (pathUrl == Admin.correctRouter(data1.jump)) {
                            var c = data1.list[0] ? itemedClass : thisClass;
                            itemed = true;
                            elem1.addClass(c).siblings().removeClass(c);
                            return false;
                        }
                    });
                    if (itemed || (0 === k && !path[0]) || (pathUrl == Admin.correctRouter(data0.jump))) {
                        var c = data0.list[0] ? itemedClass : thisClass;
                        elem0.addClass(c).siblings().removeClass(c);
                        return false;
                    }
                });
            };
            menu.find('.' + thisClass).removeClass(thisClass);
            Admin.screen() < 2 && Admin.sideFlexible();
            render(menu.children('li'));
    });
    element.on('nav(layadmin-system-side-menu)', function(elem) {
        if (elem.siblings('.layui-nav-child')[0] && wrap.hasClass(shrinkClass)) {
            Admin.sideFlexible('spread');
            layer.close(elem.data('index'));
        }
    });
    element.on('nav(layadmin-pagetabs-nav)', function(elem) {
        var parent = elem.parent();
        parent.removeClass(thisClass);
        parent.parent().removeClass(showClass);
    });
    var entryTab = function(elem) {
        var id = elem.attr('lay-id'),
            index = elem.index();
        Admin.tabsBodyChange(index),
        location.hash = (id === setter.entry ? '/' : id);
    };
    body.on('click', tabHeadid, function() {
        var elem = $(this),
            index = elem.index();
        Admin.tabsPage.type = 'tab';
        Admin.tabsPage.index = index;
        if ('iframe' === elem.attr('lay-attr')) {
            Admin.tabsBodyChange(index);
        } else {
            entryTab(elem);
            Admin.runResize();
        }
    });
    element.on('tabDelete(layadmin-layout-tabs)', function(elem) {
        var curr = $(tabHeadid + '.layui-this');
        elem.index && Admin.tabsBody(elem.index).remove();
        entryTab(curr);
        Admin.delResize();
    });
    body.on('click', '*[lay-href]', function() {
        var elem = $(this),
            href = elem.attr('lay-href');
        Admin.tabsPage.elem = elem;
        location.hash = Admin.correctRouter(href); 
    });
    body.on('click', '*[layadmin-event]', function(et) {
        var elem = $(this),
            key = elem.attr('layadmin-event');
        Admin.events[key] && Admin.events[key].call(this, elem, et);
    });
    body.on('mouseenter', '*[lay-tips]', function() {
        var elem = $(this);
        if (!elem.parent().hasClass('layui-nav-item') || wrap.hasClass(shrinkClass)) {
            var title = elem.attr('lay-tips'),
                offset = elem.attr('lay-offset'),
                direct = elem.attr('lay-direction'),
                index = layer.tips(title, this, {
                    tips: direct || 1,
                    time: -1,
                    success: function(e) {
                        offset && e.css('margin-left', offset + 'px');
                    }
                });
                elem.data('index', index);
        }
    }).on('mouseleave', '*[lay-tips]', function() {
        layer.close($(this).data('index'));
    });

    var RS = layui.data.resizeSystem = function() {
        layer.closeAll('tips');
        RS.lock || setTimeout(function() {
            Admin.sideFlexible(Admin.screen() < 2 ? '' : 'spread');
            delete RS.lock;
        }, 100);
        RS.lock = true;
    };
    win.on('resize', layui.data.resizeSystem);

    exports('admin', Admin);
});