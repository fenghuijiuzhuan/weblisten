define(['btn_aggr'], function(getBtn) {
  'use strict';

  function SearchForm(ele) {
    require(['text!tpl/search.js'], function (html) {
      var plane = getBtn({name: 'INDEXAGGR', text: '查询'})
      var defau = getBtn({ text: '新闻', style: 'margin-left: 5px;'})

      var data = { //数据
        plane: plane,
        defau: defau
      };
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          ele.append($(result))
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