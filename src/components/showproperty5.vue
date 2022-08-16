<template>
  <div id="property2">
    <div class="showproperty" ref="property1">等待数据加载</div>
    <div class="showproperty" ref="property2">等待数据加载</div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue-demi";
import { ref } from "vue";
import XHR from "../utils/request.js";
let webpref = [
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
    time: "2022-08-12 13:10:05",
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
const property1: any = ref(null);
const property2: any = ref(null);
function gethour(ary: any, attr: Array<any>): any {
  // 时间对象转化
  function formatDateTime(theDate: any) {
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
  let getDateObj: any = (time: any) => {
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
  const dateary: any = [];

  while (+old != +now) {
    dateary.push(formatDateTime(old));
    old = new Date(+old + onehour);
  }
  // 将数组的属性全部归0
  let objFun = () => {
    let obj: any = {};
    attr.map((el, i, array) => {
      obj[el] = 0;
    });
    return obj;
  };
  // 这里不是fill的原因是因为fill会将同一个对象的地址赋予给其他人，导致出现数组里面的所有元素都是同一个
  const countary = new Array(dateary.length);
  for (let i = 0; i < countary.length; i++) {
    countary[i] = (() => {
      let obj: any = {};
      attr.map((el, i, array) => {
        obj[el] = 0;
      });
      return obj;
    })();
  }
  for (let i = 0; i < countary.length; i++) {
    const el = countary[i];
    el.time = dateary[i];
  }
  console.log(countary);

  ary.map((el: any, i: any, array: any) => {
    const time = el.time.slice(0, 13);
    const index = dateary.indexOf(time);
    if (index == -1) {
      dateary.unshift(time);
      countary.unshift(1);
    } else {
      // 属性转移过去
      attr.map((el) => {
        countary[index][el] = ary[i][el];
      });
    }
  });

  return countary;
}

gethour(webpref, ["fcp", "lcp", "domReady", "cls", "tti"]);
const WaterFall = () => {
  type EChartsOption = echarts.EChartsOption;
  type perf = {
    dns: number;
    tcp: number;
    ssl: number;
    ttfb: number;
    trans: number;
    domParse: number;
    res: number;
  };
  let option: EChartsOption;
  onMounted(async () => {
    await XHR.normalPost("api/data/webVital", {
      userId: "aa7385b487e84f28a5e43e7574f4f0aa",
      deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
    }).then(({ data: { data } }) => {
      webpref = data;
    });

    const myChart = echarts.init(property1.value);
    option = {
      title: {
        text: "页面加载性能图",
        subtext: "web pref in brower",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params: any) {
          var tar = params[1];
          return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      yAxis: [
        {
          type: "category",
          splitLine: { show: false },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            align: "right",
          },
          position: "left",
          data: nameArr.reverse(),
        },
      ],
      xAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          name: "Placeholder",
          type: "bar",
          stack: "Total",
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
          emphasis: {
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
          },
          data: startTiemArr.reverse(),
        },
        {
          name: "Time Cost",
          colorBy: "data",
          type: "bar",
          stack: "Total",
          labelLayout: function () {
            return {
              x: myChart.getWidth() * 0.9,
              moveOverlap: "shiftY",
            };
          },
          label: {
            show: true,
            formatter: function ({ data }) {
              return `${data}ms`;
            },
            position: "right",
            minMargin: 2,

            align: "right",
          },
          data: orignArr.reverse(),
        },
      ],
    };
    option && myChart.setOption(option);
  });
  function dataBuilder(data: any): perf {
    const {
      domReady,
      load,
      firstByte,
      dns,
      tcp,
      ssl,
      ttfb,
      trans,
      domParse,
      res,
    } = data;
    const rv = {
      dns,
      tcp,
      ssl,
      ttfb,
      trans,
      domParse,
      res,
    };
    return rv;
  }
  const nameArr = [
    "DNS查询",
    "TCP连接",
    "SSL建连",
    "请求响应",
    "内容传输",
    "DOM解析",
    "资源加载",
  ];
  const rv = dataBuilder(webpref[0]);
  const startTiemArr: number[] = [];
  const orignArr: number[] = [];
  startTiemArr.push(0);
  let key: keyof perf;
  for (key in rv) {
    const cur = Math.round(rv[key]);
    orignArr.push(cur);
    startTiemArr.push(startTiemArr[startTiemArr.length - 1] + cur);
  }
  startTiemArr.pop();
};
const KeyIndicator = () => {
  let option: EChartsOption;
  type pref = {
    time: string;
    fcp: number;
    lcp: number;
    domReady: number;
    cls: number;
    tti: number;
  };
  function dataBuilder(data: any[]): pref[] {
    const rv: pref[] = [];
    data.forEach((el) => {
      let { fcp, lcp, domReady, cls, tti, time } = el;
      fcp = fcp.toFixed(2);
      lcp = lcp.toFixed(2);
      domReady = domReady.toFixed(2);
      cls = cls.toFixed(2);
      tti = tti.toFixed(2);
      time;
      rv.push({ fcp, lcp, domReady, cls, tti, time });
    });
    return rv;
  }
  //   const timeArr: any[] = [];
  const rv = dataBuilder(
    gethour(webpref, ["fcp", "lcp", "domReady", "cls", "tti"])
  );
  onMounted(async () => {
    await XHR.normalPost("api/data/webVital", {
      userId: "aa7385b487e84f28a5e43e7574f4f0aa",
      deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
    }).then(({ data: { data } }) => {
      webpref = data;
    });

    // console.log(webpref);

    const myChart = echarts.init(property2.value);
    option = {
      // legend用于显示图标
      dataZoom: {
        type: "slider",
      },
      legend: {
        orient: "vertical",
        right: -40,
        bottom: 100,
      },
      // color: ['#ffce03', '#00c1de'],
      // 暂时不知道
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "time",
        // splitNumber可以用于确定轴上显示的数目
        // splitNumber: 3,
        // minInterval: 1000 * 60 * 10,
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
            y: "fcp",
            seriesName: "fcp",
          },
          type: "line",
          smooth: true,
          showSymbol: false,
        },
        {
          encode: {
            x: "time",
            y: "lcp",
            seriesName: "lcp",
          },
          type: "line",
          showSymbol: false,
          smooth: true,
        },
        {
          encode: {
            x: "time",
            y: "domReady",
            seriesName: "domReady",
          },
          type: "line",
          showSymbol: false,
          smooth: true,
        },
        {
          encode: {
            x: "time",
            y: "cls",
            seriesName: "cls",
          },
          type: "line",
          showSymbol: false,
          smooth: true,
        },
        {
          encode: {
            x: "time",
            y: "tti",
            seriesName: "tti",
          },
          type: "line",
          showSymbol: false,
          smooth: true,
        },
      ],
      dataset: {
        dimensions: ["time", "fcp", "lcp", "domReady", "cls", "tti"],
        source: rv,
      },
    };
    // console.log(timeArr);
    option && myChart.setOption(option);
  });

  //   rv.forEach((el) =>
  //     timeArr.push({
  //       value: [el.time.replaceAll("-", "/"), Math.random()],
  //     })
  //   );
  type EChartsOption = echarts.EChartsOption;
};
WaterFall();
KeyIndicator();
</script>

<style lang="less">
.showproperty {
  width: 500px;
  height: 300px;
}
</style>