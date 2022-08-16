<template>
  <!-- 指标-开发中
  区间耗时需要添加时间 -->
  <div id="property2">
    <div class="showproperty" ref="property">等待数据加载</div>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, inject, nextTick } from "vue";
import XHR from "../utils/request.js";
import { dataStore } from "../store/piniastore-data.js";
import * as echarts from "echarts";
const dStore = dataStore();
let property = ref(null);

function drawproperty() {
  // 指标页面绘制
  let myChart = echarts.init(property.value);
  //   let data = [
  //     {
  //       time: "2019-11-1 10:00:00",
  //       errnum:20,
  //       errper: 40,
  //     },
  //     {
  //       time: "2019-11-1 11:00:00",
  //       errnum:16,
  //       errper: 50,
  //     },
  //   ];
  let data = [
    {
      time: "2019-11-1 6:00:00",
      num: 0,
      percentage: 0,
    },
    {
      time: "2019-11-1 7:00:00",
      num: 3,
      percentage: 60,
    },
    {
      time: "2019-11-1 8:00:00",
      num: 0,
      percentage: 0,
    },
    {
      time: "2019-11-1 9:00:00",
      num: 3,
      percentage: 60,
    },
    {
      time: "2019-11-1 10:00:00",
      num: 0,
      percentage: 0,
    },
    {
      time: "2019-11-1 11:00:00",
      num: 0,
      percentage: 0,
    },
    {
      time: "2019-11-1 12:00:00",
      num: 5,
      percentage: 75,
    },
    {
      time: "2019-11-1 13:00:00",
      num: 0,
      percentage: 0,
    },
    {
      time: "2019-11-1 14:00:00",
      num: 3,
      percentage: 60,
    },
    {
      time: "2019-11-1 15:00:00",
      num: 0,
      percentage: 0,
    },
    {
      time: "2019-11-1 16:00:00",
      num: 0,
      percentage: 0,
    },
    {
      time: "2019-11-1 17:00:00",
      num: 5,
      percentage: 75,
    },
  ];
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "cross" },
    },
    legend: {},
    xAxis: [
      {
        type: "time",
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "异常数",
        position: "left",
        axisLabel: {
          formatter: "{value} ",
        },
      },
      {
        type: "value",
        name: "异常百分比",
        min: 0,
        max: 100,
        position: "right",
        axisLabel: {
          formatter: "{value} %",
        },
      },
    ],
    series: [
      {
        encode: {
          x: "time",
          y: "percentage",
          seriesName: "percentage",
        },
        type: "bar",
        showSymbol: false,
        yAxisIndex: 1,
      },
      {
        encode: {
          x: "time",
          y: "num",
          seriesName: "num",
          
        },
        smooth:true,
        type: "line",
        showSymbol: false,
        yAxisIndex: 0,
      },
    ],
    dataset: {
      dimensions: ["time", "num", "percentage"],
      source: data,
    },
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
  width: 800px;
  height: 300px;
}
</style>