<template>
<!-- 页面资源-开发中 -->
<div id="all" ref="all">
  <div id="container" ref="container">等待数据加载</div>
</div>
</template>
<script setup>
import { onMounted, ref, reactive, inject, nextTick } from 'vue';
import XHR from '../utils/request.js'
import { dataStore } from '../store/piniastore-data.js';
const dStore = dataStore();
const props = defineProps(['containerHeight'])
let echarts = inject('$Echarts');
let container=ref(null);

let Data = reactive({
  errorNum: '',
  errorPer: '',
  errorUser: '',
  arr:[
    {"errorNum": 5,
    "errorPer": "7.41%",
    "errorUser": "3",
    "errorList": [{
      "name": "num is not defined",
      "type": "ReferenceError",
      "time": "2022-07-31 08:24:43",
      "system": "window 10.0",
      "browser": "chrome 103",
      "IP": "124.240.87.175",
      "zone": "中国 广东省",
      "row": 3131,
      "cow": 25,
      "url": "http://127.0.0.1:5000/itaem/index.html",
      "userAgent": "etc"
    }]
  },{"errorNum": 20,
    "errorPer": "7.41%",
    "errorUser": "10",
    "errorList": [{
      "name": "num is not defined",
      "type": "ReferenceError",
      "time": "2022-07-31 05:24:43",
      "system": "window 10.0",
      "browser": "chrome 103",
      "IP": "124.240.87.175",
      "zone": "中国 广东省",
      "row": 3131,
      "cow": 25,
      "url": "http://127.0.0.1:5000/itaem/index.html",
      "userAgent": "etc"
    }]
  },{"errorNum": 50,
    "errorPer": "7.41%",
    "errorUser": "6",
    "errorList": [{
      "name": "num is not defined",
      "type": "ReferenceError",
      "time": "2022-07-31 04:24:43",
      "system": "window 10.0",
      "browser": "chrome 103",
      "IP": "124.240.87.175",
      "zone": "中国 广东省",
      "row": 3131,
      "cow": 25,
      "url": "http://127.0.0.1:5000/itaem/index.html",
      "userAgent": "etc"
    }]
  }

  ]
})

function getName(arr) {
  let nameArr = [];
  for (let key in arr[0]) { nameArr.push(key) };
  return nameArr;
}
let isDraw=false;
function drawResource(){// 指标页面绘制
  if(isDraw){return}
  isDraw=true;
  let arr=getList();
  console.log(arr)
  let myChart = echarts.init(container.value);
  let option;
  option = {
    // title: { text: "性能坐标" },
    legend: {
      orient:'vertical',
      right:'2%',
      bottom:'50%'
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'time',
      splitNumber: 5,
      splitLine: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        encode: {
          x: 'time',
          y: 'errorNum',
          seriesName: 'errorNum'
        },
        zlevel: 2,
        z: 2,
        type: 'line',
        smooth: true,
        lineStyle:{color:'rgb(92, 213, 232)'},
        showSymbol: false,
        areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(92, 213, 232,0.5)'
          },
          {
            offset: 1,
            color: 'rgba(92, 213, 232,0)'
          }
        ])
      }
      },
      {
        encode: {
          x: 'time',
          y: 'errorNum',
          seriesName:  'errorNum'
        },
        itemStyle:{color:"rgb(90, 210, 230)"},
        barMaxWidth:'10%',
        zlevel: 1,
        z: 1,
        type: 'bar',
        showSymbol: false,
      }
    ],
    dataset: {
      source: arr
    },

  };
  myChart.setOption(option);
}
function getError(){
  let other=false;// 其他判断条件，比如间隔时间
  if(dStore.getResourceData().length==0||other){
   XHR.requestPost('api/data/resource',dStore.getRequestID(),
   (e)=>{dStore.setResourceData(JSON.parse(e));
      nextTick(()=>{drawError()});
    },(e)=>{console.log(e);alert('数据刷新失败')})
  }else{
    nextTick(()=>{drawError()});
  }
}

onMounted(()=>{
  // 测试
  // dStore.setResourceData(Data.arr)

  getError()
})

//abnormalanalysis
</script>
<style>

header{
  display: flex;
  width: 100%;
  height: 200px;
}
header>div{
  width: 30%;
  text-align: center;
}
.showHeader{
  margin-top: 60px;
  color: rgba(0, 0, 0, 0.5);
}
.showNumber{
  font-size: 3rem;
}
#container{
  height: calc(100% - 200px)
}
</style>