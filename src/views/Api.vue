<template>
  <div class="speed">
    <Pageindex :pageAll="pageAll" />
    <div class="propertyTotal">
      <Showproperty4 />
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="talkId" label="会话ID" width="150" />
        <el-table-column prop="userId" label="用户ID" width="120" />
        <el-table-column prop="page" label="访问页面" width="120" />
        <el-table-column prop="useragent" label="终端信息" width="320" />
        <el-table-column prop="IP" label="IP" width="100" />
        <el-table-column prop="time" label="时间" width="180" />
      </el-table>
    </div>
  </div>
</template>

<script setup>
import Pageindex from "@/components/pageindex.vue";
import Showproperty4 from "@/components/showproperty4.vue";
import { reactive } from "vue";
const pageAll = reactive([
  {
    page: "static-c7c3a1d5-1246-4a9b-bae5-a9730f498faf.bspapp.com",
    active: true,
  },
  { page: "127.0.0.1:5500/webgl/save/itaem/index.html", active: false },
]);
const tableData = [
  {
    talkId: "veIU86Qg7Ljvxotvc46ybezmdag",
    userId: "alskdfj544cxsdf5d",
    page: "http://localhost:3000/index.html",
    useragent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    IP: "126.0.0.1",
    time: "2022-07-02 20:40:12",
  },
  {
    talkId: "veIU86Qg7Ljvxotvc46ybezmdag",
    userId: "alskdfj544cxsdf5d",
    page: "http://localhost:3000/index.html",
    useragent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    IP: "126.0.0.1",
    time: "2022-07-02 20:40:12",
  },
]
</script>

<style lang="less" scoped>
div.speed {
  display: flex;
  div.propertyTotal {
    background: #f7f8fa;
    padding: 24px 16px 0;
    display: flex;
    flex-direction: column;
  }
}
</style>