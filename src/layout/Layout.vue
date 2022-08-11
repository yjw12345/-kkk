<template>
  <div id="layout">
    <MyHeader></MyHeader>
    <MySidebar></MySidebar>
    <div class="content-container" :class="{ 'content-collapse': collapse } " >
      <!-- <MyTabs /> -->
      <div class="content" >
        <router-view  v-slot="{ Component }">
            <transition name="move" mode="out-in">
              <keep-alive >
                <component :is="Component" />
              </keep-alive>
            </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "./MyHeader.vue"
import MySidebar from "./MySidebar.vue"
import { dataStore } from '@/store/piniastore-data.js';
const dStore = dataStore();
// let collapse=dStore.collapse
// console.log(collapse);
export default{
  components:{
    MyHeader,
    MySidebar
  },
  computed:{
     collapse() {
      // 把 collages 看成变量
      return dStore.collapse;
  } 
  }
}
</script>

<style lang="less" scoped>

#layout {
  
  .content-container {
    position: absolute;
    transition: left 0.3s;
    top: var(--header-height);
  }

  .content-container {left: var(--sidebar-max-width);}
  .content-container.content-collapse {left: var(--sidebar-min-width);}
}

</style>