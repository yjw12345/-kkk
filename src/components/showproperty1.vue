<template>
  <!-- 指标-开发中
  区间耗时需要添加时间 -->
  <div id="property1" ref="all">
    <!-- v-model="activeName" -->
    <div class="property1Name">页面加载时间详情</div>
    <el-tabs
      type="border-card"
      class="demo-tabs"
      v-model="activeName"
      @tab-change="handleChange"
    >
      <el-tab-pane label="性能指标" name="property1">
        <div class="showproperty" ref="property1">等待数据加载</div>
      </el-tab-pane>
      <el-tab-pane label="区间段耗时" name="property2">
        <div class="showproperty" ref="property2">等待数据加载</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, inject, nextTick } from "vue";
import XHR from "../utils/request.js";
import { dataStore } from "../store/piniastore-data.js";
import echarts from "echarts";
const dStore = dataStore();
// let all = ref(null);
let property1 = ref(null);
let property2 = ref(null);
// let activeName = ref("property1");
let isDraw = { property1: false, property2: false };
// let containerHeight = ref(500);
let activeName = "property1";
const handleChange = (tabName) => {
  switch (tabName) {
    case "property1":
      getProperty1();
    case "property2":
      getProperty2();
  }
};

let Data = {
  property1: [
    {
      time: "2019-11-1 07:00:00",
      FP: 0,
      dom: 0,
      FCP: 0,
    },
    {
      time: "2019-11-1 08:00:00",
      FP: 0.65,
      dom: 0.42,
      FCP: 0.23,
    },
    {
      time: "2019-11-1 09:00:00",
      FP: 0.8,
      dom: 0.45,
      FCP: 0.22,
    },
    {
      time: "2019-11-1 10:00:00",
      FP: 0.9,
      dom: 0.52,
      FCP: 0.26,
    },
    {
      time: "2019-11-1 11:00:00",
      FP: 0,
      dom: 0,
      FCP: 0,
    },
  ],
  property2: [
    {
      time: "2019-11-1 07:00:00",
      DNS: 0,
      TCP: 0,
      // 请求相应
      TTFB: 0,
      // 内容传输
      trans: 0,
      DOM: 0,
      // 资源加载
      RES: 0,
    },
    {
      time: "2019-11-1 08:00:00",
      DNS: 0.65,
      TCP: 0.42,
      TTFB: 0.23,
      trans: 0.23,
      DOM: 0.23,
      RES: 0.23,
    },
    {
      time: "2019-11-1 09:00:00",
      DNS: 0.8,
      TCP: 0.45,
      TTFB: 0.22,
      trans: 0.22,
      DOM: 0.22,
      RES: 0.22,
    },
    {
      time: "2019-11-1 10:00:00",
      DNS: 0.9,
      TCP: 0.52,
      TTFB: 0.26,
      trans: 0.26,
      DOM: 0.26,
      RES: 0.26,
    },
    {
      time: "2019-11-1 11:00:00",
      DNS: 0,
      TCP: 0,
      TTFB: 0,
      trans: 0,
      DOM: 0,
      RES: 0,
    },
  ],
};

// function getName(arr) {
//   let nameArr = [];
//   for (let key in arr[0]) {
//     nameArr.push(key);
//   }
//   return nameArr;
// }

function drawProperty1() {
  // 指标页面绘制
  if (isDraw.property1) {
    return;
  }
  isDraw.property1 = true;
  // let name = getName(dStore.getPropertyData1());
  let myChart = echarts.init(property1.value);
  let option;
  option = {
    // title: { text: "性能坐标" },
    legend: {},
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "time",
      splitNumber: 5,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      axisLabel: {
        formatter: "{value}s",
      },
    },
    series: [
      {
        encode: {
          x: "time",
          y: "FP",
          seriesName: "FP",
        },
        type: "line",
        showSymbol: false,
      },
      {
        encode: {
          x: "time",
          y: "dom",
          seriesName: "dom",
        },
        type: "line",
        showSymbol: false,
      },
      {
        encode: {
          x: "time",
          y: "FCP",
          seriesName: "FCP",
        },
        type: "line",
        showSymbol: false,
      },
    ],
    dataset: {
      dimensions: ["time", "FP", "dom", "FCP"],
      source: Data.property1,
    },
  };
  myChart.setOption(option);
}
function drawProperty2() {
  // 区间耗时
  if (isDraw.property2) {
    return;
  }
  isDraw.property2 = true;
  let myChart = echarts.init(property2.value);
  // let data = getValue(dStore.getPropertyData2());
  // let namearr = getKey(dStore.getPropertyData2());
  let option;
  // let help = [];
  // data.map((el, index, arr) => {
  //   arr[index] = Math.abs(el);
  // });
  option = {
    legend: {
      // orient: "vertical",
      // right: "2%",
      // bottom: "50%",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "time",
      splitNumber: 5,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      axisLabel: {
        formatter: "{value}s",
      },
    },
    series: [
      {
        encode: {
          x: "time",
          y: "DNS",
          seriesName: "DNS",
        },
        zlevel: 1,
        z: 1,
        type: "line",
        showSymbol: false,
      },
      {
        encode: {
          x: "time",
          y: "TCP",
          seriesName: "TCP",
        },
        zlevel: 2,
        z: 2,
        type: "line",
        showSymbol: false,
      },
      {
        encode: {
          x: "time",
          y: "TTFB",
          seriesName: "TTFB",
        },
        zlevel: 3,
        z: 3,
        type: "line",
        showSymbol: false,
      },
      {
        encode: {
          x: "time",
          y: "trans",
          seriesName: "trans",
        },
        zlevel: 4,
        z: 4,
        type: "line",
        showSymbol: false,
      },
      {
        encode: {
          x: "time",
          y: "DOM",
          seriesName: "DOM",
        },
        zlevel: 5,
        z: 5,
        type: "line",
        showSymbol: false,
      },
      {
        encode: {
          x: "time",
          y: "RES",
          seriesName: "RES",
        },
        zlevel: 6,
        z: 6,
        type: "line",
        showSymbol: false,
      },
    ],
    dataset: {
      dimensions: ["time", "DNS", "TTFB", "trans", "DOM", "RES"],
      source: Data.property2,
    },
  };
  myChart.setOption(option);
}

// function getProperty1() {
//   let other = false; // 其他判断条件，比如间隔时间
//   if (dStore.getPropertyData1().length == 0 || other) {
//     XHR.requestGet(
//       "property1",
//       "userID=01",
//       (e) => {
//         dStore.setPropertyData1(JSON.parse(e));
//         nextTick(() => {
//           drawProperty1();
//         });
//       },
//       (e) => {
//         console.log(e);
//         alert("数据刷新失败");
//       }
//     );
//   } else {
//     nextTick(() => {
//       drawProperty1();
//     });
//   }
// }
// function getProperty2() {
//   let other = false; // 其他判断条件，比如间隔时间
//   if (dStore.getPropertyData2().length == 0 || other) {
//     XHR.requestGet(
//       "get",
//       "property2",
//       "userID=01",
//       (e) => {
//         // dStore.setPropertyData2(JSON.parse(e));
//         nextTick(() => {
//           drawProperty2();
//         });
//       },
//       (e) => {
//         console.log(e);
//         alert("数据刷新失败");
//       }
//     );
//   } else {
//     nextTick(() => {
//       drawProperty2();
//     });
//   }
// }

onMounted(() => {
  // 测试
  // dStore.setPropertyData1(Data.property1);
  drawProperty1();
  drawProperty2();
});
</script>
<style lang="less" scoped>
div.property1Name {
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
.container {
  width: 100%;
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