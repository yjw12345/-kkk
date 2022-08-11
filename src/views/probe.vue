<template>
  <div>
    <div class="probe">
        复制/粘贴BI探针
    </div>
    
    <div class="detail">
        复制下方代码并粘贴至页面HTML的body元素中。
        注意：需要将代码粘贴在body元素内容的第一行。
    </div>
    <div class="code">
<textarea readonly="" rows="7" class="text-1lSLb">&lt;script&gt;
!(function(c,b,d,a){c[a]||(c[a]={});c[a].config={pid:"b2m2rrngt3@6d1555e10ee7f23",appType:"web",imgUrl:"https://arms-retcode.aliyuncs.com/r.png?",sendResource:true,enableLinkTrace:true,behavior:true};
with(b)with(body)with(insertBefore(createElement("script"),firstChild))setAttribute("crossorigin","",src=d)
})(window,document,"https://retcode.alicdn.com/retcode/bl.js","__bl");
&lt;/script&gt;</textarea>


    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.probe {
  color: #373d41;
  font-size: 14px;
  margin: 24px 0 20px;
  font-weight: 400;
  text-shadow: 0 0 0, 0 0 0;
  padding-left: 20px;
}
div.detail {
  margin-bottom: 12px;
  font-size: 13px;
  margin-left: 20px;
}
textarea{
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
    display: block;
    width: 100%;
    resize: none;
    border: 0;
    background-color: #f5f5f6;
    font-family: monospace;
    padding: 16px;
    margin-top: 16px;
    height: 200px;
}
</style>