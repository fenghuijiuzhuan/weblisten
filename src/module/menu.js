define([], function() {
  'use strict';
  function menu(ele, data) {
    require(['text!tpl/menu.js'], function (html) {
      var data = menuList;
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          ele.append($(result))
        });
      })
    })
  }


  var menuList = {
    list: [
      {
        text: '河南省政府办公厅',
        children: [
          {
            text: '选项一',
            children: []
          }, {
            text: '选项二',
            open: 'layui-nav-itemed',
            children: [
              {
                text: '选项1',
                children: []
              }, {
                text: '选项2',
                children: [
                  {
                    text: '选项11',
                    children: []
                  }, {
                    text: '选项22',
                    children: [
                      {
                        text: '选项1111',
                        children: []
                      }, {
                        text: '选项2222',
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        text: '河南省政府办公厅',
        children: [
          {
            text: '选项一',
            children: []
          }, {
            text: '选项二',
            open: 'layui-nav-itemed',
            children: [
              {
                text: '选项1',
                children: []
              }, {
                text: '选项2',
                children: [
                  {
                    text: '选项11',
                    children: []
                  }, {
                    text: '选项22',
                    children: [
                      {
                        text: '选项1111',
                        children: []
                      }, {
                        text: '选项2222',
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
  return {
    'create': menu
  }

});
