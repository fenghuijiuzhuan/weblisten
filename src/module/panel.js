define(['util/panelpackage'], function(tmp) {
  'use strict';

  function panel(ele, param, callback) {
    require(['text!tpl/panel.js'], function (html) {
      if(param.isTmp){
        param.body = tmp(param.body);
        delete param.isTmp
      }
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