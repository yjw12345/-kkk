<template>
  <div class="header">
    <div class="collapse-btn" @click="toggleCollapse">
      <!-- 折叠按钮 -->
      <el-icon v-if="!collapse"><Fold /></el-icon>
      <el-icon v-else><Expand /></el-icon>
    </div>
    <!-- <el-button :plain="true" @click="open1">成功</el-button> -->
    <!-- <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </el-select> -->
    <div class="logo">前端监控系统</div>
    <div class="header-right">
      <div class="btn-bell">
        <!-- 消息提醒 -->
        <el-tooltip
          effect="dark"
          :content="message ? `有${message}条未读消息` : '消息中心'"
          placement="bottom"
        >
          <router-link to="/tabs">
            <el-icon class="icon-bell"><Bell /></el-icon>
          </router-link>
        </el-tooltip>
        <span class="btn-bell-badge" v-if="message"></span>
      </div>
      <el-dropdown>
        <!-- 用户名+设置 -->
        <span class="el-dropdown-link">
          <!-- {{$store.state.username}} -->
          <span> {{ username }} </span>
          <el-icon class="el-icon--right"> <arrow-down /> </el-icon>
        </span>
        <template #dropdown>
          <!-- 下拉框选项 -->
          <el-dropdown-menu>
            <el-dropdown-item @click="returnLogin"
              >退出登录</el-dropdown-item
            ></el-dropdown-menu
          >
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
// 这里面多加了一个可选食堂的选项，注意可以禁用选项，甚至可以禁用下拉组件本身，这很重要，可以用于体现登录的权限分化
import { dataStore } from '../store/piniastore-data.js';
const dStore = dataStore();
export default {
  data() {
    // console.log(dStore.username)
    const username = localStorage.getItem("username");
    let value = "First-canteen";

    return {
      username,
      value,
    };
  },
  computed: {
    collapse() {
      // 把 collages 看成变量
      return dStore.collapse;
    },
    message() {
      // 未读消息数量。将 message 当成变量
      return dStore.unread_message;
    },
  },
  methods: {
    toggleCollapse() {
      // 切换侧边栏的折叠
      dStore.toggleCollapse();
    },
    returnLogin() {
      // 退出登陆
      dStore.setUsername("");
      this.$router.push("/login");
    },
    open1() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "error",
        duration:0
      });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  width: 100%;
  height: var(--header-height);
  font-size: 22px;
  color: var(--font-default-color);
  background: var(--bg-deep-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .collapse-btn {
    cursor: pointer;
    padding: 0 24px;
    display: flex;
  }

  .logo {
    width: 250px;
  }

  .header-right {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .icon-bell {
      flex: 0 0 auto;
      margin: 0 4px;
      display: flex; /* 如果没有 flex，图标的高度有空白，对不起 */
      color: var(--font-default-color);
    }
    .el-dropdown-link {
      font-size: 16px;
      color: var(--font-default-color);
      display: flex;
      cursor: pointer;
      span {
        // 处理名字过长导致溢出的情况
        display: inline-block;
        width: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .el-icon--right {
        color: var(--font-default-color);
      }
    }
  }
}
</style>
