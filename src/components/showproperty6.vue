<template>
  <div id="property2">
    <div class="showproperty1" ref="property">等待数据加载</div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps, computed, reactive } from "vue-demi";
import * as echarts from "echarts";
const { infor } = defineProps(["infor"]);
let property = ref(null);

const option = reactive({
  title: {
    text: "Referer of a Website",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
  dataset: {
    //   dimensions: ["browserName", "browserNum"],
    // source: infor,
  },
});

onMounted(() => {
  // 测试
  // dStore.setPropertyData1(Data.property);
  //   drawproperty();
  // 指标页面绘制
  option.dataset.source = infor
  option.title.text=infor.title
  let myChart = echarts.init(property.value);
  myChart.setOption(option);
});
</script>

<style>
.showproperty1 {
  width: 600px;
  height: 200px;
}
</style>