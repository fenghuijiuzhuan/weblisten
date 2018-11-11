define([], function() {
  'use strict';
  function body(iframe){
    var child = iframe ? '' : '<div class="wping-bodymain"><div class="wping-bodycontent"></div></div>';
    var bod = '<div class="layui-body wping-body">'+ child +'</div>'
    var html = '<!-- main start -->'+bod+'<!-- main end -->';
    return  $(html)
  }
  return {
    create: body
  }
});