<template>
  <div id="all">
    <!-- <nav>
      <router-link to="/1">指标/区间耗时（开发中）</router-link>
      <router-link to="/2">页面加载瀑布图（完成）</router-link>
      <router-link to="/3">错误信息（开发中）</router-link>
      <router-link to="/4">用户行为（开发中）</router-link>
      <router-link to="/5">页面资源（开发中）</router-link>
    </nav> -->
    <router-view></router-view>
  </div>
</template>
<script setup>
import { provide } from "vue";
import * as echarts from "echarts";

provide("$Message", Message);
provide("$MessageBox", MessageBox);
provide("$PushToUrl", PushToUrl);
provide("$Echarts", echarts);

function Message(message, type) {
  /* 提示 */
  /*success,waring,error */
  ElMessage({
    type: type,
    message: message,
    showClose: true,
    duration: 3000,
  });
}
function MessageBox(title, message, fn1, fn2, type) {
  /* 弹出框 */
  /*success,waring,error */
  ElMessageBox.confirm(message, title, {
    confirmButtonText: "确认(OK)",
    cancelButtonText: "取消(Cancel)",
    type: type,
    center: true,
  })
    .then(fn1)
    .catch(fn2);
}
function PushToUrl(url) {
  /* 前进路由 */
  router.push({ path: url });
}
</script>
<style lang="less">

nav {
  display: flex;
  width: 100;
  height: 60px;
}
nav > a {
  display: block;
  width: 200px;
  height: 100%;
}
</style>