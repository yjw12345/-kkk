<template>
  <div class="pageindex">
    <div class="name">页面总排行</div>
    <div class="pageTotal">
      <div
        class="pageitem"
        v-for="(item, index) in pageAll"
        :key="index"
        :class="{ active: item.active }"
        @click="changepage(index)"
      >
        <span>{{ item.page.url }}</span>
      </div>
      <!-- <div class="pageitem"></div> -->
    </div>
  </div>
</template>

<script setup >
import { reactive, defineProps } from "vue-demi";

const { pageAll } = defineProps(["pageAll"]);
console.log(pageAll.length);  
function changepage(index) {
  console.log(pageAll);
    for (const i of pageAll) {
        i.active=false
    }
    pageAll[index].active=true

}
</script>

<style lang="less" scoped>
div.pageindex {
  background-color: #ffffff;
  width: 342px;
  height: 100%;
  overflow: auto;
  padding: 16px;
  border-right: 1px solid #e6ebef;
  div.name {
    font-size: 14px;
    font-weight: 800;
    line-height: 24px;
    margin-top: 8px;
    margin-bottom: 12px;
  }
  div.pageTotal {
    div.pageitem {
      position: relative;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      height: 40px;
      padding: 8px;
      margin-bottom: 8px;
      background-color: #7fb1e3;
      cursor: pointer;
      span {
        width: 300px;
        line-height: 18px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    div.active {
      background-color: #00c1de;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>