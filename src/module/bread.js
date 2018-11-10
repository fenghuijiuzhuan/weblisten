define(['btn_aggr',], function(getBtn) {
  'use strict';
  function bread(ele, arr, btn) {
    require(['text!tpl/bread.js'], function (html) {
      var btnHtml = '';
      if(btn) for(var i = 0, _i = btn.length; i < _i; i ++) {
        btnHtml += getBtn(btn[i]['name'], btn[i]['text']);
      }
      var btnAggr = ['<!-- 按钮组 --><div class="wping-btn-aggr pull-right layui-btn-group">', btnHtml, '</div>'].join('');

      var data = { //数据
        bread: arr || [],
        btnaggr: btnAggr
      };
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          ele.prepend($(result))
        });
      })
    })
  }
  return {
    'create': bread
  }
});
