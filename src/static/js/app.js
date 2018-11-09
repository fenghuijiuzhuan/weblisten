require.config({
  baseUrl: '/src/static/js',
  paths: {
    layui: '../../../frame/layui/layui',
    jquery: '../../../js/jquery-1.11.1.min'
  },
  shim: {

  }
});
require(['jquery', 'layui'], function () {
  //注意：导航 依赖 element 模块，否则无法进行功能性操作
  layui.use('element', function(){
    var element = layui.element;
  });
});