# Vue 3 + Vite 使用 JSX

## 简介

本文将介绍如何在 Vue 3 的项目中使用 JSX，并且使用 Vite 作为构建工具。JSX 是一种类似于 HTML 的语法，可以更方便地定义组件和模板。使用 JSX 可以提高代码的可读性和开发效率，同时也可以更好地利用 Vue 3 的优势。

## 前提条件

在开始之前，请确保已经安装了 Node.js 和 npm。另外，你需要对 Vue 3 和 JSX 有一定的了解。

## 步骤

### 1. 创建项目

首先，我们需要创建一个新的 Vue 3 项目。可以使用 `create-vite-app` 工具快速创建一个新项目：

```bash
npm init vite@latest my-vue-jsx-app --template vue-ts
```

这个命令会创建一个基于 Vue 3 和 TypeScript 的项目，并且使用 Vite 作为构建工具。如果你需要使用 JavaScript 或其他模板，请选择相应的模板。

然后进入项目目录：

```bash
cd my-vue-jsx-app
```

### 2. 安装依赖

接下来，我们需要安装一些必要的依赖项。可以使用以下命令：

```bash
npm install --save-dev @vitejs/plugin-vue-jsx @vue/babel-plugin-jsx
```

```bash
# 我只有安装了这个
npm install @vitejs/plugin-vue-jsx
```

这些依赖项分别是：

- `@vitejs/plugin-vue-jsx`：用于在 Vite 中支持 Vue 3 的 JSX 语法。
- `@vue/babel-plugin-jsx`：用于使 Babel 能够转换 Vue 3 的 JSX 语法。

### 3. 配置 Vite

现在我们需要配置 Vite，让它支持 Vue 3 的 JSX 语法。打开 `vite.config.js` 文件，并添加以下代码：

```javascript
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
})


```

这个配置文件使用了 `defineConfig` 函数来导出一个配置对象，并且将 `vueJsx` 插件作为插件数组的一部分。这个插件可以让 Vite 支持 Vue 3 的 JSX 语法。注意，在这个配置文件中我们并没有使用 `vue()` 插件，因为这个插件已经被包含在 `vueJsx()` 插件中了。

### 4. 使用

```jsx
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.jsx'

export default defineComponent({
  setup() {
    const msg = 'Vite + Vue'
    return () => (
      <>
        <Test />
        <HelloWorld msg={msg} onClick={() => {
          console.log('父组件点击事件');
        }} />
      </>
    )
  }
})

const Test = defineComponent({
  setup() {
    const msg = 'test'
    return () => (
      <div>
        {msg}
      </div>
    )
  }
})
```

这个组件使用了 `defineComponent` 函数来创建一个 Vue 3 组件，并在组件的 `setup` 函数中定义了一个响应式变量 `count` 和一个增加计数器的函数 `increment`。然后返回一个箭头函数，表示这个组件的渲染函数。

注意，在 JSX 中可以直接使用 Vue 3 的响应式变量和事件绑定语法。我们可以通过 `count.value` 来读取和修改响应式变量的值，并在按钮上通过 `onClick` 属性绑定一个点击事件。
