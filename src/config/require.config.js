require.config({
  baseUrl: '/src/module',
  paths: {
    "layui": '/frame/layui/layui',
    "jquery": '/lib/jquery-1.11.1.min',
    "text":"/lib/text",
    "tpl": '/src/template/',
  },
  shim: {
    'header': {
      deps: ['jquery', 'layui'],
      exports: 'header'
    }
  }
});
