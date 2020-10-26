;layui.define(['laytpl', 'layer'], function(exports) {
    "use strict";

    var $ = layui.$,
        laytpl = layui.laytpl,
        layer = layui.layer,
        setter = layui.setter,
        hint = layui.hint(),
        bodyid = 'LAY_app_body',
        Class = function(id) {
            this.id = id,
            this.container = $('#' + (id || bodyid));
        },
        View = function(id) {
            return new Class(id);
        };

    View.loading = function(wrap) {
        wrap.append(this.elemLoad = $('<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon layui-icon-loading layadmin-loading"></i>'));
    };
    View.removeLoad = function() {
        this.elemLoad && this.elemLoad.remove();
    };
    View.exit = function() {
        var hash = '/login/login.html',
            href = layui.router().href;
        if (href && href != '/' && href.indexOf(hash) == -1) {
            hash += '/redirect=' + encodeURIComponent(href);
        }
        location.hash = hash;
    };
    View.codeJump = function(res) {
        switch(res.code) {
            case 401: //重新登录
                View.exit();
                return 1;
            case 403:
                location.hash="/error/403.html";
                return 1;
            case 100012: //重设密码
                View.popup({
                    content: res.msg,
                    end: function() {
                        location.hash = '/admin/passwd';
                    }
                });
                return 1;
            case 400003: //拒绝访问
                View.error(res.msg);
                View.removeLoad();
                return 1;
            case 600: //服务器错误
                location.hash="/error/502.html";
                return 1;
            default:
                return 0;
        }
    };
    /**
     * 设置cookie
     */
    View.setCookie = function ( name, value, expires, path, domain, secure ) {
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
    };
    /**
     * 获取cookie
     */
    View.getCookie = function ( name ) {
        var start = document.cookie.indexOf(name + "=");
        var len = start + name.length + 1;
        if ((!start) && (name != document.cookie.substring(0, name.length))) {
            return null;
        }
        if (start == -1) return null;
        var end = document.cookie.indexOf(";", len);
        if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(len, end));
    };
    View.popup = function(options) {
        var success = options.success,
            skin = options.skin;
        delete options.success;
        delete options.skin;
        layer.open($.extend({
            type: 1,
            title: '提示',
            content: '',
            offset: 't',
            time: 1500,
            id: 'LAY-system-view-popup',
            skin: 'layui-layer-admin' + (skin ? ' ' + skin: ''),
            shadeClose: true,
            closeBtn: false,
            success: function(layero, index) {
                var close = $('<i class="layui-icon" close>&#x1006;</i>');
                layero.append(close);
                close.on('click', function() {
                    layer.close(index);
                });
                ('function' == typeof success) && success.apply(this, arguments);
            }
        }, options));
    };
    View.error = function(content, options) {
        View.popup($.extend({
            content: content,
            maxWidth: 300,
            anim: 6,
            time: 0,
            id: 'LAY_adminError'
        }, options));
    };
    View.confirm = function(content, yes) {
        layer.confirm(content, function() {
            layer.close(layer.index);
            yes();
        });
    };
    View.request = function(options) {
        var success = options.success;
        options.data = options.data || {};
        options.headers =$.extend({"Authorization": "Bearer "+ View.getCookie("jwt")}, options.headers);
        delete options.success;
        delete options.error;
        $.ajax($.extend({
            type: 'get',
            dataType: 'json',
            success: function(res) {
                if (res.code == 200) ('function' == typeof options.done) && options.done(res); //成功
                else if (View.codeJump(res)) return;
                else View.error('<cite>错误：</cite>' + (res.msg || options.url + ' 返回异常'));
                ('function' == typeof success) && success(res);
            },
            error: function(xhr, txt) {
                View.codeJump({code:600});
                return false;
                // View.error('<cite>请求异常(' + xhr.status + ')：</cite>' + txt);
                // ('function' == typeof success) && success();
            }
        }, options));
    };  

    Class.prototype.render = function(url, data) {
        var othis = this,
        route = layui.router();

        $('#' + bodyid).children('.layadmin-loading').remove();
        View.loading(othis.container);
        url = (url.indexOf('.html') > 0 ? setter.viewPath : '') + url;
        $.ajax({
            url: url ,
            type: 'get',
            cache: false,
            dataType: 'html',
            success: function(html) {
                if (html && html.substr(1, 6) == '"code"') {
                    View.codeJump(JSON.parse(html));
                    return;
                }

                html = '<div>' + html + '</div>';
                var title = $(html).find('title'),
                    text = title.text(),
                    argv = [],
                    vars = {title: text, body: html};

                $.each(route.search, function(k, v){
                    argv.push(v);
                });
                if(argv.length > 0 ){
                    vars.title += '-' + argv.join('-');
                }
                title.remove();
                othis.params = data || {};
                othis.then && (othis.then(vars), delete othis.then);
                othis.parse(html);
                View.removeLoad();
                othis.done && (othis.done(vars), delete othis.done);
            },
            error: function(xhr) {
                View.removeLoad();
                if (othis.render.isError) {
                    View.error('请求异常('+ xhr.status +')');
                } else {
                    othis.render(404 === xhr.status ? 'error/404.html' : 'error/error.html');
                    othis.render.isError = true;
                }
            }
        });

        return othis;
    };
    Class.prototype.parse = function(source, after, callback) {
        var othis = this, tpls,
            route = layui.router(),
            parse = function(source) {
                var tpl = laytpl(source.dataElem.html());
                source.dataElem.after(tpl.render($.extend({
                    params: route.params
                }, source.res)));
                ('function' == typeof callback) && callback();
                try {
                    source.done && new Function('d', source.done)(source.res);
                } catch(e) {
                    console.error(source.dataElem[0], '\n存在错误回调脚本\n\n', e);
                }
            };

        if ('object' == typeof source) {
            tpls = source;
        } else {
            source = $(source);
            tpls = source.find('*[template]');
        }
        source.find('title').remove();
        othis.container[after ? 'after' : 'html'](source.children());
        route.params = othis.params || {};
        for (var i = tpls.length; i > 0; i--) {
            !function() {
                var elem = tpls.eq(i - 1),
                    done = elem.attr('lay-done') || elem.attr('lay-then'),
                    url = laytpl(elem.attr('lay-url') || '').render(route),
                    data = laytpl(elem.attr('lay-data') || '').render(route),
                    heads = laytpl(elem.attr('lay-headers') || '').render(route);
                    try {
                        data = new Function('return ' + data + ';')();
                    } catch(e) {
                        hint.error('lay-data: ' + e.message);
                        data = {};
                    }
                    try {
                        heads = new Function('return ' + heads + ';')();
                    } catch(e) {
                        hint.error('lay-headers: ' + e.message);
                        heads = heads || {};
                    }
                    url ? View.request({
                        type: elem.data('lay-type') || 'get',
                        url: url,
                        data: data,
                        dataType: 'json',
                        headers: heads,
                        success: function(res) {
                            parse({
                                dataElem: elem,
                                res: res,
                                done: done
                            });
                        }
                    }) : parse({
                        dataElem: elem,
                        done: done
                    });
            }();
        }
    };
    Class.prototype.then = function(then) {
        this.then = then;
        return this;
    };
    Class.prototype.done = function(done) {
        this.done = done;
        return this;
    };

    exports('view', View);
});