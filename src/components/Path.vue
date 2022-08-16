<template>
  <div class="Path">
    <div class="True">
      <div class="trueIcon">
        <el-icon :size="20" color="#1890ff"><Select /></el-icon>
      </div>
      <div class="Line"></div>
    </div>
    <div class="PageInfor">
      <p class="PathInfor">{{ pageInfor.url }}</p>
      <p class="PageTime">
        访问时间：{{ pageInfor.timeType
        }}<span v-if="pageInfor.interval">间隔：{{ pageInfor.interval }}s</span>
      </p>
    </div>
  </div>
</template>

<script setup scoped>
import { onMounted, ref, reactive, inject, nextTick, defineProps } from "vue";
const { pageInfor } = defineProps(["pageInfor"]);
</script>

<style lang="less">
div.Path {
  display: flex;
  align-items: center;
  margin: 15px;
  div.True {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .trueIcon {
      width: 30px;
      height: 30px;
      border: 1px solid #1890ff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Line {
      margin-top: 5px;
      width: 1px;
      height: 21px;
      background-color: #1890ff;
    }
  }
  div.PageInfor {
    display: flex;
    flex-direction: column;
    p.PageInfor {
      color: rgba(0, 0, 0, 0.65);
      line-height: 24px;
      font-size: 14px;
    }
    p.PageTime {
      color: rgba(0, 0, 0, 0.45);
      margin-top: 12px;
      font-size: 14px;
    }
  }
}
</style>