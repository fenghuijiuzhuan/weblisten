define([], function() {
  'use strict';
  var model = {
    'yes': function(){
      return '<div class="text-center"><p style="font-size:22px;margin-bottom: 30px;color: #4ac444;">达标</p><p><i class="layui-icon layui-icon-face-smile" style="font-size: 50px; color: #4ac444;"></i></div>'
    },
    'no': function(){
      return '<div class="text-center"><p style="font-size:22px;margin-bottom: 30px;color: #FF5722;">不达标</p><p><i class="layui-icon layui-icon-face-cry" style="font-size: 50px; color: #FF5722;"></i></div>'
    },
    'txt': function () {
      return ;
    }
  }
  function panelPackage(mod) {
    return model[mod]()
  }
  return panelPackage
});