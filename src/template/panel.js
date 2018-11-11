<div class="layui-card">
  {{# if(d.title){ }}
    <div class="layui-card-header"><i class="layui-icon layui-icon-rate-solid"></i> &nbsp; {{ d.title }}</div>
  {{# } }}
  <div class="layui-card-body">
    {{ d.body }}
  </div>
</div>