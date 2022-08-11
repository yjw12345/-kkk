<template>
  <div class="overview">
    <div class="container">
      <div class="show">
        <span class="num">{{ infor.num }}</span>
        <span class="text">{{ infor.text1 }}</span>
      </div>
      <div class="line"></div>
      <div class="show">
        <span class="num">{{ infor.percentage }}</span>
        <span class="text">{{ infor.text2 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, inject, nextTick, defineProps } from "vue";
const {infor} = defineProps(["infor"]);
console.log(infor);
</script>

<style lang="less" scoped>
.overview {
  width: 300px;
  border: 1px solid #ebecec;
  padding: 50px 4px;
  background: #fff;
  .container {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    div:nth-child(2n-1) {
      min-width: calc(50% - 20px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .num {
        font-size: 28px;
        line-height: 33px;
        font-family: Roboto;
        font-weight: 700;
        color: #373d41;
      }
      .text {
        font-weight: 700;
        font-size: 12px;
        color: #9b9ea0;
      }
    }
    div.line {
      background: #eee;
      height: 20px;
      width: 1px;
      margin: 0 10px;
    }
  }
}
</style>