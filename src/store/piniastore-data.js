import { defineStore } from "pinia";
export const dataStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "data",
  state: () => ({
    errorData: [],
    propertyData1: [],
    propertyData2: [],
    allconnectData: [],
    resourceData: [],
    errData: [],
    requestID: {
      "userId": "aa7385b487e84f28a5e43e7574f4f0aa",
      "deviceId": "e20ca6dd21964f99a7d514bc4c1264e1"
    },

    // 这个是layout的东西，不用管

    collapse: false, // 控制侧边栏是否折叠，默认不折叠
    unread_message: 0,   // 未读消息个数，在 /tabs 和 MyHeader.vue 中用到
    username: '', // 用户名，会以此作为判断是否登录的标识（建议后面改成使用 token 验证）



  }),
  actions: {
    getErrorData() { return this.errorData; },
    setErrorData(data) { this.errorData = data; },
    getPropertyData1() { return this.propertyData1; },
    setPropertyData1(data) { this.propertyData1 = data; },
    getPropertyData2() { return this.propertyData2; },
    setPropertyData2(data) { this.propertyData2 = data; },
    getAllconnectData() { return this.allconnectData; },
    setAllconnectData(data) { this.allconnectData = data; },
    getResourceData() { return this.resourceData; },
    setResourceData(data) { this.resourceData = data; },
    getErrData() { return this.errData; },
    setErrData(data) { this.errData = data; },
    getRequestID() { return this.requestID; },
    setRequestID(data) { this.requestID = data; },

    toggleCollapse() {
      this.collapse = !this.collapse
    },
    // 阅读消息后更新未读消息个数
    uploadMessage(num) {
      if (num < 0) num = 0
      this.unread_message = num
    },
    setUsername(new_username) {
      this.username = new_username
    }
  },
});
