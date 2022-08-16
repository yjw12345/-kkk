<template>
<div class="UserAction">

  <Pageindex :pageAll="pageAll" />
  <div class="UserActionPathAll">
  <Path
    v-for="(item, index) in pageInfor"
    :key="index"
    :pageInfor="pageInfor[index]"
  />

  </div>
</div>
</template>
<script setup>
import Path from "@/components/Path.vue";
import pageindex from "@/components/pageindex.vue";
import XHR from "../utils/request.js";
import { computed, onMounted, reactive, ref } from "vue-demi";
let infor = reactive({
  path: "https://hubing.online/#/home",
  time: "2022-08-15 18:21:27",
});
const pageAll = reactive([]);
const userAction = reactive([]);
// 时间格式化
function formatDateTime(theDate) {
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
    _year +
    "-" +
    _month +
    "-" +
    _date +
    " " +
    _hour +
    ":" +
    _minute +
    ":" +
    _second
  );
}
onMounted(() => {
  XHR.normalPost("api/data/breadcrumbAll", {
    userId: "aa7385b487e84f28a5e43e7574f4f0aa",
    deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
  }).then(({ data: { data } }) => {
    console.log(data);
    userAction.push(...data);
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      //   处理时间和时间间隔

      for (let j = 0; j < item.length; j++) {
        const el = item[j];
        el.timeType = formatDateTime(new Date(el.time));
        if (j > 0) {
          el.interval = (el.time - item[j - 1].time) / 1000;
        }
      }
      pageAll.push({ page: item[0], active: false });
    }
    pageAll[0].active = true;

    pageInfor.value = userAction[0];
    console.log(data);
  });
});
const pageInfor = computed(() => {
  for (let i = 0; i < pageAll.length; i++) {
    const item = pageAll[i];
    if (item.active == true) {
      console.log(123456);
      return userAction[i];
    }
  }
    return userAction[0];
});
</script>
<style lang='less'>
.UserAction{
    display: flex;
    .UserActionPathAll{
        height: 800px;
        overflow: scroll;
    }
}
</style>