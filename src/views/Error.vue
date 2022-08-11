<template>
<div>
    <div class="showState">
    <div class="errnum">
      <span>错误数</span>
      <div>2</div>
    </div>
    <div class="errper">
      <span>JS错误率</span>
      <div>40.00%</div>
    </div>
    <div class="user">
      <span>影响用户数</span>
      <div>2(66.87%)</div>
    </div>
  </div>
  <Showproperty3 />
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
import Showproperty3 from "@/components/showproperty3.vue";
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
div.showState {
    padding: 20px;
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      color: #9b9ea0;
      text-align: center;
    }
    div {
      font-size: 36px;
      color: #373d41;
      font-weight: 700;
      text-align: center;
    }
  }
}
</style>