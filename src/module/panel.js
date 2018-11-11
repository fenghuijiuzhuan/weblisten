define([], function() {
  'use strict';

  function panel(ele, param, callback) {
    require(['text!tpl/panel.js'], function (html) {

      var data = param;
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          ele.append()
          var div = $(result).appendTo(ele)
          callback&&callback(div)
        });
      })

    })
  }



  return {
    create: panel
  }
  
});