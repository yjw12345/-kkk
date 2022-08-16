<template>
  <div>
    <div ref="mapEcharts" class="map-echart"></div>
  </div>
</template>

<script>
import XHR from "../utils/request.js";
import * as echarts from "echarts";
import axios from "axios";
import china from "@/assets/china.json";
import { reactive } from "vue-demi";
export default {
  name: "Map",
  data() {
    return {
      timer: null,
      seriesData: [
        { name: "天津市", value: 20057.34 },
        { name: "北京市", value: 15477.48 },
        { name: "上海市", value: 31686.1 },
        { name: "河北省", value: 6992.6 },
        { name: "山东省", value: 44045.49 },
        { name: "山西省", value: 4045.49 },
      ],
      map: null,
    };
  },
  created() {},
  mounted() {
    XHR.normalPost("api/data/err", {
      userId: "aa7385b487e84f28a5e43e7574f4f0aa",
      deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
    }).then(({ data: { data } }) => {
      let ip="26.26.26.1"
      axios.get("http://api.map.baidu.com/location/ip?ak=ybguC1ncxvQd4FCahfFAyNpOFchanTUc&ip=26.26.26.1&coor=bd09ll")
      // let geolocation = new BMap.Geolocation(); //返回用户当前的位置
      // geolocation.getCurrentPosition(function (r) {
      //   if (this.getStatus() == BMAP_STATUS_SUCCESS) {
      //     $this.city = r.address.city;
      //     console.log(r.address); // {city: '广州市', city_code: 0, district: '', province: '广东省', street: '', …}
      //   }
      // });
    });
    this.initMapEcharts();
  },
  methods: {
    initMapEcharts() {
      // 获取地图数据
      // 将下载后的json文件放置/public目录下
      // 使用数据注册地图
      echarts.registerMap("china", china);
      this.$nextTick(() => {
        // 初始化地图
        this.map = echarts.init(this.$refs["mapEcharts"]);
        // 设置基础配置项
        const option = {
          // 标题
          title: {
            text: "中国地图",
            left: "center",
            subtext: "下载链接",
            sublink:
              "http://datav.aliyun.com/tools/atlas/#&lat=30.772340792178525&lng=103.94573258937584&zoom=9.5",
          },
          // 悬浮窗
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              return `${params.name}: ${params.value || 0}`;
            },
          },
          // 图例
          visualMap: {
            text: ["High", "Low"],
            realtime: false,
            calculable: true,
            inRange: {
              color: ["lightskyblue", "yellow", "orangered"],
            },
          },
          // 要显示的散点数据
          series: [
            {
              type: "map",
              map: "china",
              // 这是要显示的数据
              data: this.seriesData,
              // 自定义命名映射，不设置的话，label默认是使用 geoJson中的name名
              nameMap: {
                北京市: "北京重命名",
                天津市: "天津重命名",
              },
            },
          ],
        };
        // 将配置应用到地图上
        this.map.setOption(option);
        // 设置定时器，自动循环触发tooltip悬浮窗事件
        this.setTimer();
        let that = this;
        // 当鼠标在地图上时，停止自动tooltip事件
        this.map.on("mouseover", { series: 0 }, function (params) {
          that.clearTimer();
        });
        // 当鼠标移出地图后，再自动tooltip
        this.map.on("mouseout", { series: 0 }, function (params) {
          that.setTimer();
        });
      });
    },
    setTimer() {
      // 当前选中区域的下标
      let curIndex = -1;
      this.timer && clearInterval(this.timer);
      this.timer = setInterval(() => {
        const len = this.seriesData.length;
        // dispatchAction是主动去触发echarts事件，取消高亮当前的数据图形
        this.map.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: curIndex,
        });
        // 下一个选中区域的下标
        curIndex = (curIndex + 1) % len;
        // 高亮下一个数据图形
        this.map.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: curIndex,
        });
        // 显示tooltip
        this.map.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: curIndex,
        });
      }, 1000);
    },
    clearTimer() {
      this.timer && clearInterval(this.timer);
    },
  },

  beforeDestroy() {
    this.clearTimer();
  },
};
</script>

<style>
.map-echart {
  height: 500px;
  width: 500px;
}
</style>
