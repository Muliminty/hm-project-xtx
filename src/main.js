import { createApp } from 'vue'
import './style.css'
import App from './App.jsx'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入核心样式文件
import { createPinia } from 'pinia'
// import 'element-plus/theme-chalk/index.css';

const pinia = createPinia()

createApp(App)
  .use(ElementPlus)
  .use(pinia)
  .mount('#app')


/**
 * import { createApp } from 'vue' 导入了 Vue 的 createApp 函数，用于创建Vue应用实例。
 * import './style.css' 导入了一个名为 style.css 的样式文件，这里可以引入项目中的其他样式文件。
 * import App from './App.vue' 导入了一个名为 App.vue 的文件作为根组件。
 * createApp(App) 创建了一个 Vue 应用实例，并将根组件 App 传入。
 * .mount('#app') 挂载应用实例到页面上的 #app 元素，将根组件渲染在该元素内部。
 * */