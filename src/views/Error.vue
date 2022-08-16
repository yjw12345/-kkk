<template>
  <div>
    <div class="showState">
      <div class="errnum">
        <span>错误数</span>
        <div>{{ errnum }}</div>
      </div>
      <div class="errper">
        <span>JS错误率</span>
        <div>{{ errper }}%</div>
      </div>
      <div class="user">
        <span>影响用户数</span>
        <div>{{ erruser }}</div>
      </div>
    </div>
    <!-- <Showproperty3 /> -->
    <div class="charts">
      <Showproperty6 v-if="flagbrowser" :infor="browser" />
      <Showproperty6 v-if="flagbrowser" :infor="os" />
    </div>
    <!-- 表格 -->
    <el-table :data="tableData">
      <el-table-column
        fixed
        prop="页面错误信息.网页地址"
        label="地址"
        width="350"
      />
      <el-table-column prop="页面错误信息.时间" label="时间" width="300" />
      <el-table-column prop="mechanismType" label="异常种类" width="200" />
      <el-table-column prop="页面错误信息.IP地址" label="ip地址" width="200" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="large"
            @click="handleEdit(scope.$index, scope.row)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 显示框 -->
    <el-dialog
      v-model="addFormVisible"
      width="80%"
      custom-class="customClass"
      title="异常具体信息"
    >
      <el-tag class="mx-1" size="large">主要信息</el-tag>
      <div v-for="(value, key, index) in errdata" :key="index">
        <div v-if="choose(value)" class="showTableInfor">
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </div>
        <div v-else>
          <el-tag class="mx-1" size="large">{{ key }}</el-tag>
          <!-- <h5>{{ key }}</h5> -->
          <div
            v-for="(value1, key1, index1) in value"
            :key="index1"
            class="showTableInfor"
          >
            <span>{{ key1 }}</span>
            <span> {{ value1 }}</span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import XHR from "../utils/request.js";
import showproperty6 from "@/components/showproperty6.vue";
import { onMounted, reactive, ref } from "vue-demi";
import parser from "ua-parser-js";
import Bowser from "bowser";
import { ElSteps } from "element-plus";
import router from "../router/index.js";
const errnum = ref(0);
const flagbrowser = ref(false);
const errper = ref(0);
const erruser = ref();
const tableData = reactive([]);
// 解析useragent的方法
function getFeature(userAgent) {
  const browserData = Bowser.parse(userAgent);
  const parserData = parser(userAgent);
  const browserName = browserData.browser.name || parserData.browser.name; // 浏览器名
  const browserVersion =
    browserData.browser.version || parserData.browser.version; // 浏览器版本号
  const osName = browserData.os.name || parserData.os.name; // 操作系统名
  const osVersion = parserData.os.version || browserData.os.version; // 操作系统版本号
  const deviceType = browserData.platform.type || parserData.device.type; // 设备类型
  const deviceVendor =
    browserData.platform.vendor || parserData.device.vendor || ""; // 设备所属公司
  const deviceModel =
    browserData.platform.model || parserData.device.model || ""; // 设备型号
  const engineName = browserData.engine.name || parserData.engine.name; // engine名
  const engineVersion = browserData.engine.version || parserData.engine.version; // engine版本号
  return {
    browserName,
    browserVersion,
    osName,
    osVersion,
    deviceType,
    deviceVendor,
    deviceModel,
    engineName,
    engineVersion,
  };
}
const browser = reactive({
  browserName: [],
  browserNum: [],
  title: "浏览器分布",
});
const os = reactive({
  osName: [],
  osNum: [],
  title: "终端设备分布",
});
onMounted(async () => {
  await XHR.normalPost("api/data/err", {
    userId: "aa7385b487e84f28a5e43e7574f4f0aa",
    deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
  }).then(({ data: { data } }) => {
    errnum.value = data.length;
    for (let i = 0; i < data.length; i++) {
      const errEl = data[i];
      let value = errEl.mechanismType;
      switch (value) {
        case "unhandledrejection":
          errEl.mechanismType = "promise异常";
          break;
        case "http":
          errEl.mechanismType = "接口异常";
          break;
        case "jsError":
          errEl.mechanismType = "js异常";
          break;
        case "corsError":
          errEl.mechanismType = "跨域异常";
          break;
        case "resErr":
          errEl.mechanismType = "资源异常";
          break;
        case "unknown":
          errEl.mechanismType = "未知异常";
          break;
        // default:
        //   errEl.type = "未知异常";
        //   break;
      }
      // 开始删除别的
      Reflect.deleteProperty(errEl.errPageInfo, "userVitalId");
      Reflect.deleteProperty(errEl.errPageInfo, "userId");
      Reflect.deleteProperty(errEl.errPageInfo, "timestamp");
      Reflect.deleteProperty(errEl.errPageInfo, "referrer");
      Reflect.deleteProperty(errEl.errPageInfo, "piHash");
      Reflect.deleteProperty(errEl.errPageInfo, "piHostname");
      Reflect.deleteProperty(errEl.errPageInfo, "piPort");
      function changeName(obj, before, after) {
        // before,after都是键值
        // console.log(obj.before);
        Reflect.set(obj, after, obj[before]);
        Reflect.deleteProperty(obj, before);
      }
      changeName(errEl, "row", "行");
      changeName(errEl, "col", "列");
      changeName(errEl, "info", "异常信息");
      changeName(errEl.errPageInfo, "piDocScreen", "设备屏幕尺寸");
      changeName(errEl.errPageInfo, "piHost", "域名");
      changeName(errEl.errPageInfo, "piHref", "网页地址");
      changeName(errEl.errPageInfo, "piLanguage", "网站语言");
      changeName(errEl.errPageInfo, "piOrigin", "起始域名");
      changeName(errEl.errPageInfo, "piPathname", "路径");
      changeName(errEl.errPageInfo, "piProtocol", "协议");
      changeName(errEl.errPageInfo, "piTitle", "网站标题");
      changeName(errEl.errPageInfo, "piUserAgent", "设备信息");
      changeName(errEl.errPageInfo, "piWinScreen", "分辨率");
      changeName(errEl.errPageInfo, "userIp", "IP地址");
      changeName(errEl.errPageInfo, "reportTime", "时间");
      changeName(errEl, "errPageInfo", "页面错误信息");

      if(errEl.errHttpRecord){
         Reflect.deleteProperty(errEl.errHttpRecord, "httpRecordId");
         Reflect.deleteProperty(errEl.errHttpRecord, "userId");
         Reflect.deleteProperty(errEl.errHttpRecord, "resStatusText");
         Reflect.deleteProperty(errEl.errHttpRecord, "body");
        changeName(errEl.errHttpRecord, "url", "地址");
        changeName(errEl.errHttpRecord, "method", "请求方法");
        changeName(errEl.errHttpRecord, "requestTime", "请求时间");
        changeName(errEl.errHttpRecord, "responseTime", "响应时间");
        changeName(errEl.errHttpRecord, "response", "响应内容");
        changeName(errEl.errHttpRecord, "userIp", "IP地址");
        changeName(errEl, "errHttpRecord", "页面记录");
      }
    }
    tableData.push(...data);
    console.log(data);
    // 开始解析useragent
    // 获取user-agent解析
    for (const el of data) {
      const target = getFeature(el["页面错误信息"]["设备信息"]);

      //
      function one() {
        const index = browser.browserName.indexOf(target.browserName);
        if (index == -1) {
          browser.browserName.push(target.browserName);
          browser.browserNum.push(1);
        } else {
          // browser.push(target.browserName)
          browser.browserNum[index]++;
        }
      }
      one();

      //
      function two() {
        const index = os.osName.indexOf(target.osName);
        if (index == -1) {
          os.osName.push(target.osName);
          os.osNum.push(1);
        } else {
          // os.push(target.osName)
          os.osNum[index]++;
        }
      }
      two();
      flagbrowser.value = true;
      // os.push(target.browserName)
    }

  });
  await XHR.normalPost("api/data/pv", {
    userId: "aa7385b487e84f28a5e43e7574f4f0aa",
    deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
  }).then(({ data: { data } }) => {
    let f_x = errnum.value / data.length;
    errper.value = Math.round(f_x * 100);
  });
  await XHR.normalPost("api/data/uv", {
    userId: "aa7385b487e84f28a5e43e7574f4f0aa",
    deviceId: "e20ca6dd21964f99a7d514bc4c1264e1",
  }).then(({ data: { data } }) => {
    erruser.value = data.length;
  });
});
// 这里面是表格的逻辑了
const addFormVisible = ref(false);
// 对话的数据
const errdata = ref();
function handleEdit(cow, value) {
  //
  addFormVisible.value = true;
  errdata.value = value;
}
function choose(value) {
  if (typeof value == "object") {
    return false;
  }
  return true;
}
</script>

<style lang="less">
div.showState {
  margin: 0 auto;
  padding: 20px;
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      color: #9b9ea0;
      text-align: center;
    }
    div {
      font-size: 36px;
      color: #373d41;
      font-weight: 700;
      text-align: center;
    }
  }
}
.charts {
  display: flex;
  margin: 0 auto;
}
.cell-item {
  display: flex;
  align-items: center;
}
div.showTableInfor {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  > span:last-child {
    width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
</style>