<template>
  <div class="overview-drawing">
    <div class="left">
      <Overview :infor="js" />
      <Overview :infor="api" />
    </div>
    <Property />
    <div class="right">
      <Overview2 :infor="time" />
      <Overview2 :infor="resource" />
    </div>
  </div>
</template>

<script setup scoped>
import Overview from "@/components/overview.vue";
import Overview2 from "@/components/overview2.vue";
import Property from "@/components/property.vue";
import { reactive, ref } from "@vue/reactivity";

let js = reactive({
  num: "1",
  percentage: "100%",
  text1: "js错误数",
  text2: "js错误百分比",
});
let api = reactive({
  num: "0",
  percentage: "100%",
  text1: "API错误数",
  text2: "API错误百分比",
});
let time = reactive({ num: "40ms", text1: "首次渲染时间" });
let resource = reactive({ num: "0", text1: "资源错误数" });
</script>

<style lang="less">
.overview-drawing{
  display: flex;
  .left,.right{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>