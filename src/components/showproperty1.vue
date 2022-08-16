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
import * as echarts from "echarts";
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
      time: "2019-11-1 07",
      FP: 0,
      dom: 0,
      FCP: 0,
    },
    {
      time: "2019-11-1 08",
      FP: 0.65,
      dom: 0.42,
      FCP: 0.23,
    },
    {
      time: "2019-11-1 09",
      FP: 0.8,
      dom: 0.45,
      FCP: 0.22,
    },
    // {
    //   time: "2019-11-1 10",
    //   FP: 0.9,
    //   dom: 0.52,
    //   FCP: 0.26,
    // },
    {
      time: "2019-11-1 11",
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
// 这里开始写api
let time = "2019-11-1 07:00:00";
// 给开始时间，结尾时间，获取只有符合的条件
// 此处为判断小时，唯有小时符合的才可以
// 比较简单的算法

const webpref = [
  {
    fp: 167.7,
    fcp: 167.7,
    lcp: 167.8,
    cls: 0.7216045186011621,
    tti: 185.19999999552965,
    domReady: 642.1999999955297,
    load: 674.3999999985099,
    firstByte: 42.29999999701977,
    dns: 0,
    tcp: 0,
    ssl: 0,
    ttfb: 28.799999997019768,
    trans: 1.5,
    domParse: 141.39999999850988,
    res: 32.20000000298023,
    time: "2022-08-12 11:10:05",
    nt_fp: 43.79999999701977,
  },
  {
    fp: 165.4,
    fcp: 165.4,
    lcp: 165.5,
    cls: 0.8597751637826787,
    tti: 122.89999999850988,
    domReady: 645.7000000029802,
    load: 660,
    firstByte: 35.5,
    dns: 0,
    tcp: 0,
    ssl: 0,
    ttfb: 27.100000001490116,
    trans: 1.5,
    domParse: 85.89999999850988,
    res: 14.299999997019768,
    time: "2022-08-12 13:27:02",
    nt_fp: 37,
  },
  {
    fp: 122.8,
    fcp: 122.8,
    lcp: 122.8,
    cls: 0.22758843511616655,
    tti: 154.29999999701977,
    domReady: 1011.3999999985099,
    load: 1064.5,
    firstByte: 42.100000001490116,
    dns: 0,
    tcp: 0,
    ssl: 0,
    ttfb: 31.400000005960464,
    trans: 1.5999999940395355,
    domParse: 110.60000000149012,
    res: 53.100000001490116,
    time: "2022-08-12 13:27:44",
    nt_fp: 43.69999999552965,
  },
  {
    fp: 121.6,
    fcp: 121.6,
    lcp: 121.6,
    cls: 0.13133593124358733,
    tti: 153.69999999552965,
    domReady: 812.2999999970198,
    load: 857.8999999985099,
    firstByte: 39.5,
    dns: 0,
    tcp: 0,
    ssl: 0,
    ttfb: 31.80000000447035,
    trans: 1.5999999940395355,
    domParse: 112.60000000149012,
    res: 45.600000001490116,
    time: "2022-08-12 13:27:55",
    nt_fp: 41.099999994039536,
  },
  {
    fp: 133.1,
    fcp: 133.1,
    lcp: 133.3,
    cls: 0.0987343988534991,
    tti: 159.89999999850988,
    domReady: 792.3999999985099,
    load: 843.6000000014901,
    firstByte: 44.20000000298023,
    dns: 0,
    tcp: 0,
    ssl: 0,
    ttfb: 36.100000001490116,
    trans: 1.6999999955296516,
    domParse: 114,
    res: 51.20000000298023,
    time: "2022-08-12 13:27:57",
    nt_fp: 45.899999998509884,
  },
  {
    fp: 124.9,
    fcp: 124.9,
    lcp: 124.9,
    cls: 0.14662053741426095,
    tti: 163.09999999403954,
    domReady: 840.5,
    load: 887,
    firstByte: 41.19999999552965,
    dns: 0,
    tcp: 0,
    ssl: 0,
    ttfb: 32.899999998509884,
    trans: 1.5,
    domParse: 120.39999999850988,
    res: 46.5,
    time: "2022-08-12 13:27:59",
    nt_fp: 42.69999999552965,
  },
];

function gethour(ary) {
  // 时间对象转化
  function formatDateTime(theDate) {
    let _year = theDate.getFullYear();
    let _month = theDate.getMonth();
    let _date = theDate.getDate();
    let _hour = theDate.getHours();
    let _minute = theDate.getMinutes();
    let _second = theDate.getSeconds();
    if (_month < 10) {
      _month = "0" + (_month + 1);
    }
    if (_date < 10) {
      _date = "0" + _date;
    }
    if (_hour < 10) {
      _hour = "0" + _hour;
    }
    if (_minute < 10) {
      _minute = "0" + _minute;
    }
    if (_second < 10) {
      _second = "0" + _second;
    }
    // 暂时不需要秒和分
    console.log(_month, "获得的hour");
    return (
      _year + "-" + _month + "-" + _date + " " + _hour
      // +
      // ":" +
      // _minute +
      // ":" +
      // _second
    );
  }
  let getDateObj = (time) => {
    let year = time.slice(0, 4);
    let month = time.slice(5, 7);
    let date = time.slice(8, 10);
    let hour = time.slice(11, 13);
    // date的特性
    let dateobj = new Date(year, month - 1, date, hour);
    return dateobj;
  };
  let old = getDateObj(ary[0].time);
  let onehour = 3600 * 1000;
  let now = getDateObj(formatDateTime(new Date()));
  const dateary = [];
  while (+old != +now) {
    dateary.push(formatDateTime(old));
    old = new Date(+old + onehour);
  }
  const countary = new Array(dateary.length).fill(0);

  for (const i of ary) {
    const time = i.time.slice(0, 13);
    const index = dateary.indexOf(time);
    if (index == -1) {
      dateary.unshift(time);
      countary.unshift(1);
    } else {
      countary[index]++;
    }
  }

  return {
    countary,
    dateary,
  };
}

gethour(webpref);
// function timeadd() {
//   let obj = gethour(webpref);
//   let newary = obj.newary;
//   let countary = obj.countary
//   console.log(nowtime);
//   function randomData() {
//     // 以每小时递增
//     now = new Date(+now + onehour);
//     let addDate = formatDateTime();
//     addDate=addDate.slice(0, 13);
//     let index = newary.indexOf(addDate);
//     if(index==-1){

//     }
//     console.log(now.toString());
//     return {
//       name: now.toString(),
//       value: [
//         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
//         Math.round(value),
//       ],
//     };
//   }
// }
// timeadd();
// // 然后从最开始的小时开始逐一遍历，如果存在就跳过并取值，如果不存在就扔了
// let now = new Date();
// // 日期格式化为 yyyy-mm-dd HH:MM:SS

// let nowtime = formatDateTime(now).slice(0, 13);
// console.log(nowtime);

// let data = [];

// gethour(webpref);
// function getName(arr) {
//   let nameArr = [];
//   for (let key in arr[0]) {
//     nameArr.push(key);
//   }
//   return nameArr;
// }
//

let onehour = 3600 * 1000;
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
      interval: onehour,
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