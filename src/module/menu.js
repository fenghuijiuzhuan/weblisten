define(['util/onloadpage'], function(loadpage) {
  'use strict';
  function menu(ele, data) {
    require(['text!tpl/menu.js'], function (html) {
      var data = menuList;
      layui.use('laytpl', function(){
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        tpl.render(data, function(result){
          var dom = $(result).appendTo(ele);
          dom.eq(2).find('a').on('click', function (e) {
            loadpage(this.href)
            return false;
          })
        });
      })
    })
  }


  var menuList = {
    list: [
      {
        text: '单项否决',
        src: 'javascript:;',
        children: [
          {
            text: '站点访问',
            src: '/src/page/zhandianfangwen.html',
            children: []
          },
          {
            text: '首页更新',
            src: '/src/page/shouyegengxin.html',
            children: []
          },
          {
            text: '栏目更新',
            src: 'javascript:;',
            children: []
          },
          {
            text: '互动回应',
            src: 'javascript:;',
            children: []
          }
        ]
      },
      {
        text: '综合评分',
        src: 'javascript:;',
        children: [
          {
            text: '网站可用性',
            src: 'javascript:;',
            children: [
              {
                text: '首页可用性',
                src: '/src/page/shouyekeyongxing.html',
                children: []
              }, {
                text: '链接可用性',
                src: '/src/page/lianjiekeyongxing.html',
                children: []
              }
            ]
          }, {
            text: '信息更新情况',
            src: 'javascript:;',
            children: [
              {
                text: '首页更新',
                src: 'javascript:;',
                children: []
              }, {
                text: '栏目更新',
                src: 'javascript:;',
                children: []
              }
            ]
          }, {
            text: '互动回应情况',
            src: 'javascript:;',
            children: [
              {
                text: '互动访谈',
                src: 'javascript:;',
                children: []
              }, {
                text: '政务咨询',
                src: 'javascript:;',
                children: []
              }, {
                text: '征集调查',
                src: 'javascript:;',
                children: []
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
