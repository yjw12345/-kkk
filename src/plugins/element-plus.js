import ElementPlus from 'element-plus'  
import { ElMessage } from 'element-plus'  // 消息组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'  // 图标
import '@/assets/css/element-plus-theme-style.scss'  // element-plus 默认主题
import '@/assets/css/global-var.css' // 全局 css 变量
import "@/assets/base.css"
export default app => {
  app.use(ElementPlus)  // 全局注册
  app.config.globalProperties.$msg = ElMessage  // 全局使用消息功能： this.$msg.error('成功')
  // 全局挂载 element-plus 图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) { app.component(key, component) }
}
