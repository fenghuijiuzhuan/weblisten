define([], function() {
  'use strict';

  function bodytitle(ele, param, callback) {
    require(['text!tpl/bodytitle.js'], function (html) {

      var data = param;
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          ele.append($(result))
          callback&&callback()
        });
      })

    })
  }



  return {
    create: bodytitle
  }
  
});