# Pinia

## 简介

Pinia 是一个用于 Vue.js 的状态管理库，它提供了一种简单和直观的方式来管理应用程序的状态。与传统的 VueX 不同，Pinia 基于 Vue 3 Composition API，它允许开发者以更直观的方式组织和使用状态。

Pinia 的主要原理是将应用程序的状态分解为多个独立的 store（或称为 module），每个 store 管理相关的状态和操作。通过这种方式，可以更好地组织和封装代码，提高代码的可维护性和可测试性。

## 特点

- 基于 Vue 3 Composition API，提供了更灵活和直观的状态管理方式。
- 使用 TypeScript 进行类型推导，提供更好的类型安全性。
- 支持插件机制，可以轻松扩展功能。
- 可以在单页应用和多页应用中使用。

## 安装

你可以使用 npm 或者 yarn 安装 Pinia：

```shell
npm install pinia
```

或者

```shell
yarn add pinia
```

## 用法

### 创建实例

我们使用 createPinia 函数创建了一个 Pinia 实例，并在应用程序的根实例中通过 app.use(pinia) 使用了它。这样就可以保证在使用 useStore 时有 active Pinia。

```js
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

```

### 创建 Store

首先，我们需要创建一个 store。一个 store 就是一个包含状态和操作的容器。

```javascript
// store.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})
```

在上面的例子中，我们创建了一个名为 `useCounterStore` 的 store，并定义了一个状态 `count` 和两个操作 `increment` 和 `decrement`。

### 使用 Store

在组件中使用 store 需要通过 `useStore` 函数来获取 store 实例：

```javascript
import { useCounterStore } from './store'

export default {
  setup() {
    const counterStore = useCounterStore()

    return {
      counterStore,
    }
  },
}
```

在组件中，我们可以通过 `counterStore` 来访问 store 的状态和操作：

```javascript
<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>
```

### 插件扩展

Pinia 支持插件机制，可以通过插件扩展 store 的功能。下面是一个示例插件：

```javascript
// plugin.js
import { definePlugin } from 'pinia'

export const myPlugin = definePlugin((app) => {
  app.mixin({
    created() {
      console.log('Plugin created')
    },
  })
})
```

要使用插件，我们需要在创建 store 实例时将插件添加到 store 中：

```javascript
import { useStore } from 'pinia'
import { myPlugin } from './plugin'

const store = useStore()
store.use(myPlugin)
```

## 总结

Pinia 是一个基于 Vue 3 Composition API 的状态管理库，它提供了一种简单和直观的方式来管理应用程序的状态。通过将状态分解为多个 store，Pinia 可以更好地组织和封装代码，提高代码的可维护性和可测试性。同时，Pinia 还支持插件机制，可以轻松扩展功能。
