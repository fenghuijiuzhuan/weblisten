define([], function() {
  var btn = {
    INDEXAGGR: '<button class="layui-btn layui-btn-sm"><i class="layui-icon" style="margin-right: 5px;">&#xe609;</i>BTNTEXT</button>',
    ADD: '<button class="layui-btn layui-btn-sm layui-btn-normal"><i class="layui-icon" style="margin-right: 5px;">&#xe654;</i>BTNTEXT</button>',
    EDIT: '<button class="layui-btn layui-btn-sm"><i class="layui-icon" style="margin-right: 5px;">&#xe642;</i>BTNTEXT</button>',
    WAIT: '<button class="layui-btn layui-btn-sm layui-btn-danger"><i class="layui-icon" style="margin-right: 5px;">&#xe60e;</i>BTNTEXT</button>',
    DEL: '<button class="layui-btn layui-btn-sm layui-btn-primary"><i class="layui-icon" style="margin-right: 5px;">&#xe640;</i>BTNTEXT</button>',
    RELOAD: '<button class="layui-btn layui-btn-sm layui-btn-primary"><i class="layui-icon">&#xe669;</i>BTNTEXT</button>'
  };
  function getBtn( name, text) {
    var tmp = btn[name].replace(/(BTNTEXT)/g, text);
    return tmp;
  }

  return getBtn
  
});