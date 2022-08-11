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
        <div class="num">1</div>
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
        <div class="num">1</div>
      </div>
    </div>
    <div id="main" ref="main"></div>
  </div>
</template>


<script setup>
import echarts from "echarts    ";
import { onMounted, ref } from "vue-demi";
let option = {
  // legend用于显示图标
  // legend: {
  //     orient: 'vertical',
  //     right: 0,
  //     bottom: 100
  // },
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
  dataset: {
    dimensions: ["time", "PV", "UV"],
    source: [
      {
        time: "2019-11-1 07:00:00",
        PV: 0,
        UV: 0,
      },
      {
        time: "2019-11-1 08:00:00",
        PV: 4,
        UV: 2,
      },
      {
        time: "2019-11-1 09:00:00",
        PV: 0,
        UV: 0,
      },
      {
        time: "2019-11-1 10:00:00",
        PV: 0,
        UV: 0,
      },
      {
        time: "2019-11-1 11:00:00",
        PV: 0,
        UV: 0,
      },
    ],
  },
};
const main = ref(null);

onMounted(() => {
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