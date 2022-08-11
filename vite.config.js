import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import path from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ],
  // 路径进行更改
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },


  server: {
    host: '0.0.0.0',
    // proxy: {
    //   '/property1': {
    //     target: 'http://120.53.227.200:8081',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/property1/, '')
    //   },
    //   '/api/data/webVital': {
    //     target: 'http://120.53.227.200:8081',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api\/data\/webVital/,'')
    //   }
    // }
  },

})
