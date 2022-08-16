<template>
  <div class="sidebar">
    <el-menu
      :default-active="current_route"
      class="sidebar-el-menu"
      :collapse="collapse"
      router
      background-color="var(--bg-default-color)"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/overview-drawing">
        <el-icon class="menu-item-content"><HomeFilled /></el-icon>
        <span class="menu-item-content">总览图</span>
      </el-menu-item>
      <el-menu-item index="/speed">
        <el-icon class="menu-item-content"><HomeFilled /></el-icon>
        <span class="menu-item-content">访问速度</span>
      </el-menu-item>
      <!-- <el-menu-item index="/map">
        <el-icon class="menu-item-content"><HomeFilled /></el-icon>
        <span class="menu-item-content">地图</span>
      </el-menu-item> -->
      <!-- <el-menu-item index="/session">
        <el-icon class="menu-item-content"><HomeFilled /></el-icon>
        <span class="menu-item-content">会话跟踪</span>
      </el-menu-item> -->
      <el-menu-item index="/error">
        <el-icon class="menu-item-content"><HomeFilled /></el-icon>
        <span class="menu-item-content">异常监控</span>
      </el-menu-item>
      <el-menu-item index="/resource">
        <el-icon class="menu-item-content"><HomeFilled /></el-icon>
        <span class="menu-item-content">页面资源加载</span>
      </el-menu-item>
      <el-menu-item index="/api">
        <el-icon class="menu-item-content"><HomeFilled /></el-icon>
        <span class="menu-item-content">api请求</span>
      </el-menu-item>
      <el-menu-item index="/useraction">
        <el-icon class="menu-item-content"><HomeFilled /></el-icon>
        <span class="menu-item-content">用户行为追踪</span>
      </el-menu-item>
      <!-- <el-menu-item index="/1">
        <el-icon class="menu-item-content"><HomeFilled /></el-icon>
        <span class="menu-item-content">总览图</span>
      </el-menu-item> -->
      <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon class="menu-item-content"><Monitor /></el-icon>
          <span class="menu-item-content">食堂监管</span>
        </template>
        <el-menu-item index="/video-surveillance"> 视频监控 </el-menu-item>
        <el-menu-item index="/morning-check"> 晨检 </el-menu-item> 
        <el-menu-item index="/patrol-inspection"> 巡检 </el-menu-item> 
        <el-menu-item index="/keep-sample"> 留样 </el-menu-item> 
        <el-menu-item index="/storage"> 仓储 </el-menu-item> 
        <el-menu-item index="/rectification"> 整改 </el-menu-item> 
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon class="menu-item-content"><MessageBox /></el-icon>
          <span class="menu-item-content">系统管理</span>
        </template>
        <el-menu-item index="/basic-information"> 基础信息 </el-menu-item>
        <el-menu-item index="/canteen-management"> 食堂管理 </el-menu-item>
      </el-sub-menu> -->
    </el-menu>
  </div>
</template>

<script>
import { dataStore } from '../store/piniastore-data.js';
const dStore = dataStore();
export default {
  computed: {
    collapse() {
      // 控制侧边栏折叠
      return dStore.collapse;
    },
    current_route() {
      // 保留侧边栏选择的那一项
      return this.$route.path;
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.sidebar {
  display: block;
  position: absolute;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  overflow-y: auto;
  height: 100%;
  .sidebar-el-menu {
    height: 100%;
    // background-color: var(--bg-default-color);

    .el-menu-item {
      &:hover {
        background-color: var(--bg-deep-color);
      }
      &.is-active {
        // 点击时的 tab 背景和字体颜色
        background-color: var(--bg-shadow-color);
        .menu-item-content {
          color: var(--accent-deep);
        }
      }
      .menu-item-content {
        color: var(--font-default-color);
      }
    }
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }
}
</style>