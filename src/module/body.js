define([], function() {
  'use strict';
  function body(){
    var bod = '<div class="layui-body wping-body"></div>'
    var html = '<!-- main start -->'+bod+'<!-- main end -->';
    return $(html)
  }
  return {
    create: body
  }
});