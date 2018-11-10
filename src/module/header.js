define([], function() {
  function header(ele, data) {
    require(['text!tpl/header.js'], function (html) {
      var data = { //数据

      };
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          ele.append($(result))
          //注意：导航 依赖 element 模块，否则无法进行功能性操作
          layui.use('element', function(){
            var element = layui.element;
          });
          
        });
      })
    })
  }
  return {
    'create': header
  }
});