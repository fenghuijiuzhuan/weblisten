require(['src/config/require.config.js'], function () {
  require(['header', 'menu', 'footer', 'body', 'bread'], function (header, menu, footer, body, bread) {
    // header
    header.create($('body'))
    
    // menu
    
    menu.create($('body'))
    // footer
    var footer1 = '版权所有：河南省人民政府办公厅',
        footer2 = '技术支持：睿软科技';
    footer.create($('body'), footer1, footer2)
    // main body
    var bod = body.create().appendTo($('body')).eq(1);
    
    // bread
    var btnAggr = [
      {name: 'INDEXAGGR', text: '首页组版'},
      {name: 'ADD', text: '新闻'},
      {name: 'ADD', text: '文件'},
      {name: 'ADD', text: '公报'},
      {name: 'EDIT', text: '编辑平台'},
      {name: 'WAIT', text: '待审核'},
      {name: 'WAIT', text: '待签发'},
      {name: 'DEL', text: '回收站'},
      {name: 'RELOAD', text: ''}
    ]
    bread.create(bod, [{title: '全媒体采编',}, {title: '已签发平台',}], btnAggr)

  });
})

