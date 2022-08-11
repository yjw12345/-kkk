<template>
  <!-- 指标-开发中
  区间耗时需要添加时间 -->
  <div class="property2Name">页面加载瀑布图</div>
  <div id="property2">
    <div class="showproperty" ref="property">等待数据加载</div>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, inject, nextTick } from "vue";
import XHR from "../utils/request.js";
import { dataStore } from "../store/piniastore-data.js";
import echarts from "echarts";
const dStore = dataStore();
let property = ref(null);

function drawproperty() {
  // 指标页面绘制
  let myChart = echarts.init(property.value);
  let namearr = [
    "TTFB",
    "content donwnload",
    "DOM parse",
    "resource Download",
  ];
  let data = [111, 3, 639, 260];
  let help = [];
  for (let i = 0, sum = 0; i < data.length; ++i) {
    if (i === 0) {
      help.push(0);
    } else {
      sum += data[i - 1];
      if (data[i] < 0) {
        help.push(sum + data[i]);
      } else {
        help.push(sum);
      }
    }
  }

  let option = {
    // legend: ["data"],
    color:["#00c853","#03a9f4","#af99eb","#00c1de"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
       formatter:(data)=>`${data[0].name}<br />前面时段耗时:${data[0].value.toFixed(1)}<br />当前时段耗时:${data[1].value.toFixed(1)}`,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      // splitLine: { show: false },
      data: namearr,
    },
    series: [
      {
        name: "前面时段耗时",
        type: "bar",
        stack: "all",
        itemStyle: {
          normal: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
        },
        data: help,
      },
      {
        name: "当前时段耗时",
        type: "bar",
        stack: "all",
        label:{
          show:true,
          formatter:(data)=>`${data.value.toFixed(1)}`,
          position:'right',
        },
        colorBy:"data",
        data: data,
      },
    ],
  };
  myChart.setOption(option);
}

//

onMounted(() => {
  // 测试
  // dStore.setPropertyData1(Data.property);
  drawproperty();
});
</script>
<style lang="less" scoped>
div.property2Name {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  background-color: #f5f5f6;
  padding-left: 20px;
}
#property1 {
  /* width: 500px;
  height: 500px; */
  width: 500px;
  overflow-x: hidden;
}
#top {
  width: 100%;
  height: 100%;
}
.showproperty {
  width: 500px;
  height: 300px;
}
</style>