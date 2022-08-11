<template>
  <!-- 错误信息-开发中 -->
  <div id="all" ref="all">
    asdf
    <div id="container" ref="container">等待数据加载</div>
  </div>
</template>
<script setup>
import { onMounted, ref, reactive, inject, nextTick } from "vue";
import XHR from "../utils/request.js";
import { dataStore } from "../store/piniastore-data.js";
const dStore = dataStore();
const props = defineProps(["containerHeight"]);
let echarts = inject("$Echarts");
let container = ref(null);

let Data = reactive({
  code: 200,
  msg: "操作成功",
  data: [
    {
      mechanismType: "unhandledrejection",
      type: "Error",
      info: "Request failed with status code 404",
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: null,
      errPageInfo: {
        userVitalId: "a12a055aaa6d47fea57d4d15f334ab01",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "http",
      type: "HttpError",
      info: '{"timestamp":"2022-08-03T19:54:54.252+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: {
        httpRecordId: "8f5efc7871af47d7b81acf4b99a94b30",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        url: "/dev-api/system/user/list/jj?pageNum=1&pageSize=10",
        method: "GET",
        requestTime: 1659527694236,
        responseTime: 1659527694430,
        resStatus: 404,
        body: "",
        resStatusText: "Not Found",
        response:
          '{"timestamp":"2022-08-03T19:54:54.252+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      },
      errPageInfo: {
        userVitalId: "175e28aff7a24bae95731d1b2bfb61cd",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "http",
      type: "HttpError",
      info: '{"timestamp":"2022-08-03T19:54:48.921+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: {
        httpRecordId: "b1eac6f987314924a425f69c9960c951",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        url: "/dev-api/system/user/list/jj?pageNum=1&pageSize=10",
        method: "GET",
        requestTime: 1659527688903,
        responseTime: 1659527689131,
        resStatus: 404,
        body: "",
        resStatusText: "Not Found",
        response:
          '{"timestamp":"2022-08-03T19:54:48.921+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      },
      errPageInfo: {
        userVitalId: "69ea1827eb5f4f2793f22e9be468636b",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "js",
      type: "SyntaxError",
      info: "Uncaught SyntaxError: Invalid or unexpected token",
      file: null,
      row: 1,
      col: 3,
      errHttpRecord: null,
      errPageInfo: {
        userVitalId: "30803e97fc104efe8cd7d5563fb7950b",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/index",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/index",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "http",
      type: "HttpError",
      info: '{"timestamp":"2022-08-03T19:54:50.688+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: {
        httpRecordId: "02854a6b8c11449e8536e0692e7da332",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        url: "/dev-api/system/user/list/jj?pageNum=1&pageSize=10",
        method: "GET",
        requestTime: 1659527690672,
        responseTime: 1659527690888,
        resStatus: 404,
        body: "",
        resStatusText: "Not Found",
        response:
          '{"timestamp":"2022-08-03T19:54:50.688+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      },
      errPageInfo: {
        userVitalId: "4f67190a8a134996b6b73929c7bd4031",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "http",
      type: "HttpError",
      info: '{"timestamp":"2022-08-03T19:54:47.053+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: {
        httpRecordId: "1075cc9c92a846ad8007d6addfd990f4",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        url: "/dev-api/system/user/list/jj?pageNum=1&pageSize=10",
        method: "GET",
        requestTime: 1659527687029,
        responseTime: 1659527687255,
        resStatus: 404,
        body: "",
        resStatusText: "Not Found",
        response:
          '{"timestamp":"2022-08-03T19:54:47.053+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      },
      errPageInfo: {
        userVitalId: "6a19bf9ab6004ea0b56ad7a377af11e2",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "unhandledrejection",
      type: "Error",
      info: "Request failed with status code 404",
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: null,
      errPageInfo: {
        userVitalId: "1c64bdb845a24248ad5c16aafbcc2028",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "unhandledrejection",
      type: "Error",
      info: "Request failed with status code 404",
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: null,
      errPageInfo: {
        userVitalId: "c3b0526bce084866a4f9224553ee0fe5",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "http",
      type: "HttpError",
      info: '{"timestamp":"2022-08-03T19:54:56.227+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: {
        httpRecordId: "12120a5fa409467b82885387a10bfd07",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        url: "/dev-api/system/user/list/jj?pageNum=1&pageSize=10",
        method: "GET",
        requestTime: 1659527696211,
        responseTime: 1659527696439,
        resStatus: 404,
        body: "",
        resStatusText: "Not Found",
        response:
          '{"timestamp":"2022-08-03T19:54:56.227+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      },
      errPageInfo: {
        userVitalId: "81972d3fade94b689bd1e3a921d8b2b2",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "http",
      type: "HttpError",
      info: '{"timestamp":"2022-08-03T19:47:58.906+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: {
        httpRecordId: "e537aa6e9dcc40e9b4b3457250d6a02f",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        url: "/dev-api/system/user/list/jj?pageNum=1&pageSize=10",
        method: "GET",
        requestTime: 1659527278880,
        responseTime: 1659527279078,
        resStatus: 404,
        body: "",
        resStatusText: "Not Found",
        response:
          '{"timestamp":"2022-08-03T19:47:58.906+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      },
      errPageInfo: {
        userVitalId: "02f10d7344d143da860a7a6ff64da52c",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "unhandledrejection",
      type: "Error",
      info: "Request failed with status code 404",
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: null,
      errPageInfo: {
        userVitalId: "d9629e798e384897a08ce80003720d3c",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "http",
      type: "HttpError",
      info: '{"timestamp":"2022-08-03T19:54:52.266+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: {
        httpRecordId: "9eed2af35eb24a67b2b22a1c0ebec31a",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        url: "/dev-api/system/user/list/jj?pageNum=1&pageSize=10",
        method: "GET",
        requestTime: 1659527692243,
        responseTime: 1659527692471,
        resStatus: 404,
        body: "",
        resStatusText: "Not Found",
        response:
          '{"timestamp":"2022-08-03T19:54:52.266+08:00","status":404,"error":"Not Found","message":"No message available","path":"/system/user/list/jj"}',
      },
      errPageInfo: {
        userVitalId: "17829ef319e34c818f0ff5abfd2c1f3a",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
    {
      mechanismType: "unhandledrejection",
      type: "Error",
      info: "Request failed with status code 404",
      file: null,
      row: -1,
      col: -1,
      errHttpRecord: null,
      errPageInfo: {
        userVitalId: "945cc6c2f3d74bc6a0d0bd844234d89b",
        userId: "aa7385b487e84f28a5e43e7574f4f0aa",
        timestamp: -1,
        referrer: "",
        type: -1,
        piDocScreen: "1486x825",
        piHash: "",
        piHost: "localhost",
        piHostname: "localhost",
        piHref: "http://localhost/system/user",
        piLanguage: "zh",
        piOrigin: "http://localhost",
        piPathname: "/system/user",
        piPort: "",
        piProtocol: "http:",
        piSearch: "",
        piTitle: "若依管理系统",
        piUserAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77",
        piWinScreen: "2560x1440",
      },
    },
  ],
});

function getName(arr) {
  let nameArr = [];
  for (let key in arr[0]) {
    nameArr.push(key);
  }
  return nameArr;
}
let isDraw = true;
function drawErr() {
  // 指标页面绘制
  isDraw = true;
  let myChart = echarts.init(container.value);
  let option;
  option = {
    // title: { text: "性能坐标" },
    legend: {
      orient: "vertical",
      right: "2%",
      bottom: "50%",
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
    },
    series: [
      {
        encode: {
          x: "time",
          y: "errorNum",
          seriesName: "errorNum",
        },
        zlevel: 2,
        z: 2,
        type: "line",
        smooth: true,
        lineStyle: { color: "rgb(92, 213, 232)" },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(92, 213, 232,0.5)",
            },
            {
              offset: 1,
              color: "rgba(92, 213, 232,0)",
            },
          ]),
        },
      },
      {
        encode: {
          x: "time",
          y: "errorNum",
          seriesName: "errorNum",
        },
        itemStyle: { color: "rgb(90, 210, 230)" },
        barMaxWidth: "10%",
        zlevel: 1,
        z: 1,
        type: "bar",
        showSymbol: false,
      },
    ],
    dataset: {
      source: Data.data,
    },
  };
  myChart.setOption(option);
}
function getErr() {
  let other = false; // 其他判断条件，比如间隔时间
  if (dStore.getErrData().length == 0 || other) {
    XHR.requestPost(
      "api/data/err",
      dStore.getRequestID(),
      (e) => {
        for (let i = 0; i < e.data.length; i++) {
          if (e.data[i].info[0] == "{") {
            e.data[i].info = JSON.parse(e.data[i].info);
          }
        }
        dStore.setErrData(e.data);
        console.log(dStore.getErrData());
        // nextTick(()=>{drawErr()});
      },
      (e) => {
        console.log(e);
        alert("数据刷新失败");
      }
    );
  } else {
    nextTick(() => {
      drawErr();
    });
  }
}

onMounted(() => {
  drawErr();
});

//abnormalanalysis
</script>
<style>
#container {
  width: 500px;
  height: 500px;
}
</style>