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
import { onMounted } from "vue-demi";
import XHR from "../utils/request.js";

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
onMounted(() => {
    XHR.normalPost("api/data/err", {
      userId: "aa7385b487e84f28a5e43e7574f4f0aa",
      deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
    }).then(({ data: { data } }) => {
      js.num = data.length;
    });
   XHR.normalPost("api/data/pv", {
    userId: "aa7385b487e84f28a5e43e7574f4f0aa",
    deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
  }).then(({ data: { data } }) => {
    let f_x=(js.num/data.length)
    js.percentage=(Math.round(f_x * 100))+"%"
  });
   XHR.normalPost("api/data/apiErrRate", {
    userId: "aa7385b487e84f28a5e43e7574f4f0aa",
    deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
    api:""
  }).then(({ data:{data}}) => {
    console.log(data);
    api.percentage=data*100+"%"
  });
});
</script>

<style lang="less">
.overview-drawing {
  display: flex;
  .left,
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>