<template>
  <div class="speed">
    <!-- <Pageindex :pageAll="pageAll" /> -->
    <div class="propertyTotal">
      <Showproperty5 />
    </div>
  </div>
</template>

<script setup>
import Pageindex from "@/components/pageindex.vue";
import Showproperty5 from "@/components/showproperty5.vue";
import Showproperty2 from "@/components/showproperty2.vue";
import { reactive } from "vue";
const pageAll = reactive([
  {
    page: "static-c7c3a1d5-1246-4a9b-bae5-a9730f498faf.bspapp.com",
    active: true,
  },
  { page: "127.0.0.1:5500/webgl/save/itaem/index.html", active: false },
]);
// 这里开始实现两项数据分析,也就是property1
</script>

<style lang="less" scoped>
div.speed {
  display: flex;
  div.propertyTotal {
    background: #f7f8fa;
    padding: 24px 16px 0;
    display: flex;
    flex-direction: column;
  }
}
</style>