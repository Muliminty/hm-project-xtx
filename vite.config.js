import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
/**
 * defineConfig 是一个用于导出配置的函数，它来自于 Vite 插件库。
 * plugins 是一个插件数组，通过 vue() 插件启用了 Vue 相关的功能，比如支持 .vue 单文件组件。
 * resolve 配置项用于配置模块解析的行为。
 * alias 是一个别名配置，这里定义了一个 @ 别名，指向项目的 /src 目录。
 * */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/styles/variables.scss";`, // 导入全局的 SCSS 变量文件
  //     },
  //   },

  //   postcss: {
  //     plugins: [
  //       // 取消 @use 规则校验
  //       require('postcss-plugin-sass').default({
  //         allowUseBeforeImport: true
  //       })
  //     ]
  //   }
  // },
})


