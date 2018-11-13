define([], function() {
  'use strict';
  var func = {
    indexAll: function (param){// 总览
      require(['text!tpl/indexall.js', 'text!/testdata/index_web_status.json'], function(html, json){
        json = JSON.parse(json).data
        var data = {
          list: json
        }
        layui.use('laytpl', function(){
          var laytpl = layui.laytpl;
          var tpl = laytpl(html);
          var result = tpl.render(data);
          resultNext(result);
          function resultNext(result){
            var dom = $(result).appendTo($('body'));
            var tablebox = dom.find('#wping-index-table')
            // tablebox.find('#wping-table-body')

            var page = dom.find('#wping-indexlpage');
            layui.use('laypage', function(){
              var laypage = layui.laypage;
              
              laypage.render({
                elem: page,
                count: json.length, //数据总数，从服务端得到
                limit: 6,
                jump: function(obj, first){
                  //obj包含了当前分页的所有参数，比如：
                  // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                  // console.log(obj.limit); //得到每页显示的条数
                  
                  //首次不执行
                  if(!first){
                    //do something
                  }
                }
                
              });
            });
          }
        })
      })
    },
    indexUser: function (param) {// 单个用户
      console.log(2)
      require(['text!tpl/indexuser.js'], function(html){
        console.log(1)
        var data = {};
        layui.use('laytpl', function(){
          var laytpl = layui.laytpl;
          var tpl = laytpl(html);
          var result = tpl.render(data);
          resultNext(result);
          function resultNext(result){
            var dom = $(result).appendTo($('body'));
          }
        })
      })
    },
    fn: function (param) {
      var h = window.location.hash;
      if(h.slice(1)=='user'){
        this['indexUser'](param)
      }else{
        this['indexAll'](param)
      }
    }
  }
  
  
  return function (param) {
    func['fn'](param)
  }
});