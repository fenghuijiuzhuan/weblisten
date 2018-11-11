define(['btn_aggr'], function(getBtn) {
  'use strict';

  function SearchForm(ele) {
    require(['text!tpl/search.js'], function (html) {
      var plane = getBtn({name: 'INDEXAGGR', text: '查询',  color: 'layui-btn-normal'})
      var defau = getBtn({ text: '只看自己', style: 'margin-left: 5px;', color: 'layui-btn-primary'})

      var data = { //数据
        plane: plane,
        defau: defau
      };
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          ele.prepend($(result))
          layui.use('form', function(){
            var form = layui.form;
          })
        });
      })
    })
  }
  
  return {
    create: SearchForm
  }
  
});