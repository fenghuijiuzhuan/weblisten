<div class="wping-searchform layui-form-item layui-form">
  <div class="layui-input-inline">
    <input type="text" class="layui-input" id="test1" placeholder="yyyy-MM-dd">
  </div>
  <div class="layui-input-inline" style="width: 100px;">
    <select name="">
      <option value="全部">全部</option>
        <option value="部分">部分</option>
        <option value="一点">一点</option>
        <option value="没有">没有</option>
    </select>
  </div>
  <div class="layui-input-inline" style="width: 100px;">
    <select name="">
      <option value="全部">全部</option>
        <option value="部分">部分</option>
        <option value="一点">一点</option>
        <option value="没有">没有</option>
    </select>
  </div>
  <div class="layui-input-inline" style="width: 100px;">
    <select name="">
      <option value="标题">标题</option>
        <option value="部分">部分</option>
        <option value="一点">一点</option>
        <option value="没有">没有</option>
    </select>
  </div>

  <div class="layui-input-inline">
    <input type="tel" name="phone" lay-verify="required|phone"  placeholder="请输入新闻标题或ID" autocomplete="off" class="layui-input">
  </div>
  <div class="layui-input-inline" style="padding-top: 4px;">
    {{ d.plane }}
    {{ d.defau }}
  </div>
  
</div>