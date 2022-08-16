<template>
<div>

  <el-table
    :data="list.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
    style="width: 100%"
  >
    <el-table-column fixed prop="name" label="资源名" width="150" />
    <el-table-column fixed prop="transferSize" label="资源大小" width="150" />
    <el-table-column prop="initiatorType" label="资源种类" width="120" />
    <el-table-column prop="startTime" label="startTime" width="120" />
    <el-table-column prop="responseEnd" label="responseEnd" width="70" />
    <el-table-column prop="dnsLookUp" label="dnsLookUp" width="70" />
    <el-table-column prop="initialConnect" label="initialConnect" width="70" />
    <el-table-column prop="ssl" label="ssl" width="70" />
    <el-table-column prop="request" label="request" width="70" />
    <el-table-column prop="ttfb" label="ttfb" width="70" />
    <el-table-column
      prop="contentDownload"
      label="contentDownload"
      width="180"
    />
  </el-table>
    <!-- @size-change="handleSizeChange" -->

  <el-pagination
    layout="total,prev,pager,next,jumper"
    :total="list.length"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
  />
</div>
</template>

<script setup>
import {reactive, ref} from "vue"
import { onMounted } from "vue-demi";
import XHR from "../utils/request.js";
const currentPage = ref(1); //默认页码为1
const pagesize = ref(5); //默认一页显示10条

const list = reactive([])
onMounted(() => {
  XHR.normalPost("api/data/resource", {
    userId: "aa7385b487e84f28a5e43e7574f4f0aa",
    deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
  }).then(({ data: { data } }) => {
    list.push(...data)
  });
});
// function handleSizeChange(size) {
//   //一页显示多少条
//   pagesize = size;
// }

function handleCurrentChange(index) {
  //页码更改方法
  currentPage.value = index;
}
</script>

<style>
</style>