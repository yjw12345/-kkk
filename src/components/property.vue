<template>
  <div class="container">
    <div class="total">
      <div class="item">
        <div class="text">
          <svg
            t="1660129992728"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2340"
            width="5px"
            height="5px"
          >
            <path
              d="M160 768.64h736a32 32 0 0 1 0 64H100.672V832H96V192a32 32 0 1 1 64 0v576.64z m407.584-61.152l-195.008-126.656-81.728 125.824a32 32 0 1 1-53.664-34.88l100.544-152a32 32 0 0 1 44.096-9.184l193.92 125.856 188.48-290.304a32 32 0 0 1 53.696 34.88l-206.08 317.056a32 32 0 0 1-44.256 9.376z"
              fill="#ffce03"
              p-id="2341"
            ></path></svg
          >总PV
        </div>
        <div class="num">{{pvnum}}</div>
      </div>
      <div class="item">
        <div class="text">
          <svg
            t="1660129992728"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2340"
            width="20px"
            height="20px"
          >
            <path
              d="M160 768.64h736a32 32 0 0 1 0 64H100.672V832H96V192a32 32 0 1 1 64 0v576.64z m407.584-61.152l-195.008-126.656-81.728 125.824a32 32 0 1 1-53.664-34.88l100.544-152a32 32 0 0 1 44.096-9.184l193.92 125.856 188.48-290.304a32 32 0 0 1 53.696 34.88l-206.08 317.056a32 32 0 0 1-44.256 9.376z"
              fill="#00c1de"
              p-id="2341"
            ></path></svg
          >总UV
        </div>
        <div class="num">{{uvnum}}</div>
      </div>
    </div>
    <div id="main" ref="main"></div>
  </div>
</template>


<script setup>
import * as echarts from "echarts    ";
import { onMounted, ref } from "vue-demi";
import XHR from "../utils/request.js";

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

const main = ref(null);
let timeary;
let pvary;
let uvary;
let pvnum=ref(0);
let uvnum=ref(0)
const init = (res) => {
  console.log(res);
  var myChart = echarts.init(main.value);
  myChart.setOption(option);
};

onMounted(async () => {
  await XHR.normalPost("api/data/pv", {
    userId: "aa7385b487e84f28a5e43e7574f4f0aa",
    deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
  }).then(({data:{data}}) => {
    let obj=gethour(data)
    timeary=obj.dateary
    pvary=obj.countary
    pvnum.value=data.length
  });
  await XHR.normalPost("api/data/uv", {
    userId: "aa7385b487e84f28a5e43e7574f4f0aa",
    deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
  }).then(({data:{data}}) => {
    let obj=gethour(data)
    timeary=obj.dateary
    uvary=obj.countary
    uvnum.value=data.length
  });
  // 图表加载
  let option = {
    // legend用于显示图标
    // legend: {
    //     orient: 'vertical',
    //     right: 0,
    //     bottom: 100
    // },
    dataZoom:{
      type:"slider"
    },
    dataset: {
      dimensions: ["time", "PV", "UV"],
      source: {
        time:timeary,
        PV:pvary,
        UV:uvary
      }
    },
    color: ["#ffce03", "#00c1de"],
    legend: {},
    // 暂时不知道
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "time",
      // splitNumber可以用于确定轴上显示的数目
      splitNumber: 5,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      axisLabel: {
        formatter: "{value} ",
      },
    },
    series: [
      {
        encode: {
          x: "time",
          y: "PV",
          seriesName: "PV",
        },
        type: "line",
        smooth: true,

        showSymbol: false,
      },
      {
        encode: {
          x: "time",
          y: "UV",
          seriesName: "UV",
        },
        type: "line",
        showSymbol: false,
        smooth: true,
      },
    ],
  };
  var myChart = echarts.init(main.value);
  myChart.setOption(option);
});
</script>

<style lang="less" scoped>
.container {
  border: 1px solid #ebecec;
  background: #fff;
}
.total {
  width: 300px;
  height: 50px;
  padding-left: 20px;
  padding-top: 20px;
  display: flex;
  .item {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .text {
    font-size: 12px;
    color: #9b9ea0;
    display: flex;
    align-items: center;
    .icon {
      width: 20px;
      height: 20px;
    }
  }
  .num {
    font-size: 28px;
    line-height: 33px;
    font-family: Roboto;
    font-weight: 700;
    color: #373d41;
  }
}
#main {
  width: 600px;
  height: 300px;
}
</style>