define([], function() {
  'use strict';
  function umtree(ele, data, callback){
    require(['text!tpl/umtree.js', 'text!/src/static/css/eleTree.css'], function (html, css) {
      data = $.extend({}, data)
      layui.use('laytpl', function () {
        var laytpl = layui.laytpl;
        var tpl = laytpl(html);
        var result = tpl.render(data);
        resultNext(result);
        function resultNext(result){
          var dom = $(result).prependTo(ele);
          $('<style type="text/css">'+css+'</style>').prependTo(ele);
          layui.config({
            base: "/frame/layui/lay/mymodules/"
          }).use(['eleTree'], function(){
            var eleTree = layui.eleTree;
            eleTree.render({
              elem: '.wping-tree .eleTree',
              // url: "../../data/home/tree.json",
              // type: "post",
              data: data2,
              showCheckbox: true,
              contextmenuList: ["add","remove"],
              drag: true,
              accordion: true
            });
          })

          callback&&callback(dom)
        }
      })
    })
  }

var data2=[
  {
    "label": "贵州省机构",
    "spread": true,
    "children": [
        {
            "label": "公司领导",
            "spread": true,
            "disabled": true
        },
        {
            "label": "综合部",
        },
        {
            "label": "遵义市国资委",
            "children": [
                {
                    "label": "主站",
                    "checked": true
                }
            ]
        }
    ]
  },
  {
      "label": "c",
      "children": [
          {
              "label": "aa1",
              "disabled": true
          },
          {
              "label": "bb1",
              "checked": true
          }
      ]
  }
];
  return {
    create: umtree
  }
});