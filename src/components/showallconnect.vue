<template>
<!-- 用户行为 -->
    <el-table
    :data="Data"
    :height="props.containerHeight"
    style="width: 100%">
    <el-table-column prop="talkId" label="会话id" width="180" />
    <el-table-column prop="userId" label="用户id" width="180" />
    <el-table-column prop="page" label="页面" />
    <el-table-column prop="useragent" label="用户设备" width="180" />
    <el-table-column prop="IP" label="IP" width="180" />
    <el-table-column prop="time" label="时间" />
  </el-table>
</template>
<script setup>
import { onMounted, ref, reactive, inject, nextTick } from 'vue';
import XHR from '../utils/request.js'
import { dataStore } from '../store/piniastore-data.js';

const dStore = dataStore();
const props = defineProps(['containerHeight'])
let Data = reactive([
  {
    "talkId": "veIU86Qg7Ljvxotvc46ybezmdag",
    "userId": "alskdfj544cxsdf5d",
    "page": "http://localhost:3000/index.html",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "IP": "126.0.0.1",
    "time": "2022-07-02 20:40:12"
  },
  {
    "talkId": "veIU86Qg7Ljvxotvc46ybezmdag",
    "userId": "alskdfj544cxsdf5d",
    "page": "http://localhost:3000/index.html",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "IP": "126.0.0.1",
    "time": "2022-07-02 20:40:12"
  },
  {
    "talkId": "veIU86Qg7Ljvxotvc46ybezmdag",
    "userId": "alskdfj544cxsdf5d",
    "page": "http://localhost:3000/index.html",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "IP": "126.0.0.1",
    "time": "2022-07-02 20:40:12"
  },
  {
    "talkId": "veIU86Qg7Ljvxotvc46ybezmdag",
    "userId": "alskdfj544cxsdf5d",
    "page": "http://localhost:3000/index.html",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "IP": "126.0.0.1",
    "time": "2022-07-02 20:40:12"
  },
  {
    "talkId": "veIU86Qg7Ljvxotvc46ybezmdag",
    "userId": "alskdfj544cxsdf5d",
    "page": "http://localhost:3000/index.html",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "IP": "126.0.0.1",
    "time": "2022-07-02 20:40:12"
  },
  {
    "talkId": "veIU86Qg7Ljvxotvc46ybezmdag",
    "userId": "alskdfj544cxsdf5d",
    "page": "http://localhost:3000/index.html",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "IP": "126.0.0.1",
    "time": "2022-07-02 20:40:12"
  },
  {
    "talkId": "veIU86Qg7Ljvxotvc46ybezmdag",
    "userId": "alskdfj544cxsdf5d",
    "page": "http://localhost:3000/index.html",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "IP": "126.0.0.1",
    "time": "2022-07-02 20:40:12"
  },
  {
    "talkId": "veIU86Qg7Ljvxotvc46ybezmdag",
    "userId": "alskdfj544cxsdf5d",
    "page": "http://localhost:3000/index.html",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
    "IP": "126.0.0.1",
    "time": "2022-07-02 20:40:12"
  }
])
function getAllconnect(){
  let other=false;// 其他判断条件，比如间隔时间
  if(dStore.getAllconnectData().length==0||other){
    XHR.requestGet('allConnect','userID=01',(e)=>{
      dStore.setAllconnectDat(JSON.parse(e));
      nextTick(()=>{changeAllconnectData()});
    },(e)=>{console.log(e);alert('数据刷新失败')})
  }else{
    nextTick(()=>{changeAllconnectData()});
  }
}
function changeAllconnectData(){
    Data=dStore.getAllconnectData(Data)
}
onMounted(()=>{
    // 测试
    dStore.setAllconnectData(Data)
    getAllconnect()

})

</script>