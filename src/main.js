import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

import installElementPlus from './plugins/element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);
installElementPlus(app) // 封装到 plugins/element-plus.js 文件中进行挂载组件
app
    .use(router)
    .use(createPinia())
    .mount('#app')
