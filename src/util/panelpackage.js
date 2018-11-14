define([], function() {
  'use strict';
  var model = {
    'yes': function(){
      return '<div class="text-center"><p style="font-size:22px;margin-bottom: 30px;color: #4ac444;">达标</p><p><i class="layui-icon layui-icon-face-smile" style="font-size: 50px; color: #4ac444;"></i></div>'
    },
    'no': function(){
      return '<div class="text-center"><p style="font-size:22px;margin-bottom: 30px;color: #FF5722;">不达标</p><p><i class="layui-icon layui-icon-face-cry" style="font-size: 50px; color: #FF5722;"></i></div>'
    },
    'num': function (n) {
      if(n<0){
        return  '<div class="text-center" style="font-size: 20px;"><span class="fweight" style="color: #fb3f00;font-size: 36px;">'+n+'</span>分</div>'
      }
      return  '<div class="text-center" style="font-size: 20px;"><span class="fweight" style="color: #4ac444;font-size: 36px;">'+n+'</span>分</div>'
    },
    'txt': function () {
      return ;
    }
  }
  function panelPackage(mod) {
    mod = mod.split(':');
    return model[mod[0]](mod[1])
  }
  return panelPackage
});