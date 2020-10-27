layui.define(['laytpl', 'layer', 'element', 'util'], function(exports){
    exports('setter', {
      container: 'LAY_app' //容器ID
      ,base: layui.cache.base //记录layuiAdmin文件夹所在路径
      ,entry: 'index'
      ,viewPath: layui.cache.base +'view/' //视图所在目录
      ,home: 'main/welcome.html'
      ,pageTabs: false //是否开启页面选项卡功能。单页版不推荐开启
      ,container: 'LAY_app'
      ,name: 'AdminData'
      ,tableName: 'DataTable' //本地存储表名
      ,MOD_NAME: 'admin' //模块事件名
      
      ,debug: false //是否开启调试模式。如开启，接口异常时会抛出异常 URL 等信息
      
      ,requestUri: "http://api.dzpkdev.com/goapi/v1/"
      
      //独立页面路由，可随意添加（无需写参数）
      ,alonePages: [
        'login/login.html', //登入页
        'login/auth.html' ,//授权页
        'login/readme.html'//教程页
      ]
      //扩展的第三方模块
      ,extend: [
        'qrcode',
        'jstree',
        'echarts', //echarts 核心包
        'echartsTheme' //echarts 主题
      ]
    });
  });
  
