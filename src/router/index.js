define(['util/globparam'], function(globparam) {
  'use strict';
  function WPING(hash){
    this.router = this.page;
    this.chuand(hash)
  }

  WPING.prototype = {
    page: {
      index: function () {
        this.clear('menu')
        this.clear('footer')
        this.clear('body')
        require(['index'], function (index) {
          index()
        })
      },
      kaohe: function () {
        this.clear('index')
        this.clear('menu')
        this.clear('footer')
        this.clear('body')
        require(['menu', 'footer', 'body'], function (menu, footer, body) {          
          // menu
          menu.create($('body'))
          // footer
          var footer1 = '版权所有：河南省人民政府办公厅',
              footer2 = '技术支持：睿软科技';
          footer.create($('body'), footer1, footer2)
          // main body
          var bod = body.create('iframe').appendTo($('body'));
          bod = bod.eq(1).append('<iframe width="100%" height="100%" style="display: block;border: 0" id="wping-body-iframe" src=""></iframe>')
        });
      }, 
      clear: function (name) {
        var dom = NowMOD.get(name)
        dom && dom.remove()
        NowMOD.sub(name)
      }
    },
  }
  WPING.prototype.chuand = function (page) {
    if(globparam(page)){
      this.router[page] && this.router[page]()
    }
  }
  return WPING
  
});