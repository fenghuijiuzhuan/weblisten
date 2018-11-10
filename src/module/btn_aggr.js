define([], function() {
  var btn = {
    INDEXAGGR: '<button BTNSTYLE class="layui-btn BTNSIZE"><i class="layui-icon" style="margin-right: 5px;">&#xe609;</i>BTNTEXT</button>',
    ADD: '<button BTNSTYLE class="layui-btn BTNSIZE layui-btn-normal"><i class="layui-icon" style="margin-right: 5px;">&#xe654;</i>BTNTEXT</button>',
    EDIT: '<button BTNSTYLE class="layui-btn BTNSIZE"><i class="layui-icon" style="margin-right: 5px;">&#xe642;</i>BTNTEXT</button>',
    WAIT: '<button BTNSTYLE class="layui-btn BTNSIZE layui-btn-danger"><i class="layui-icon" style="margin-right: 5px;">&#xe60e;</i>BTNTEXT</button>',
    DEL: '<button BTNSTYLE class="layui-btn BTNSIZE layui-btn-primary"><i class="layui-icon" style="margin-right: 5px;">&#xe640;</i>BTNTEXT</button>',
    RELOAD: '<button BTNSTYLE class="layui-btn BTNSIZE layui-btn-primary"><i class="layui-icon">&#xe669;</i>BTNTEXT</button>',
    DEFAULT: '<button BTNSTYLE class="layui-btn BTNSIZE layui-btn-primary">BTNTEXT</button>'
  };
  function getBtn(param) {
    var def = {name: 'DEFAULT', text: '', size: 'layui-btn-sm', style: ''}
    param = $.extend({}, def, param)
    
    var tmp = btn[param.name];
    tmp = tmp.replace(/(BTNTEXT)/g, param.text);
    tmp = tmp.replace(/(BTNSIZE)/g, param.size);
    if(param.style) tmp = tmp.replace(/(BTNSTYLE)/g, 'style="'+param.style+'"' );
    return tmp;
  }

  return getBtn;
  
});