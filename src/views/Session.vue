<template>
<div>

  <el-table :data="tableData" style="width: 100%" >
    <el-table-column fixed prop="talkId" label="会话ID" width="150" />
    <el-table-column prop="userId" label="用户ID" width="120" />
    <el-table-column prop="page" label="访问页面" width="120" />
    <el-table-column prop="useragent" label="终端信息" width="320" />
    <el-table-column prop="IP" label="IP" width="100" />
    <el-table-column prop="time" label="时间" width="180" />
  </el-table>
</div>
</template>

<script setup>
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
];
</script>

<style lang="less">
</style>