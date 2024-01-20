# Vue 3 中的 `defineExpose()`

## 简介

`defineExpose()` 是 Vue 3 中一个用于组件内部公开方法和属性的函数。它的作用是将组件内部的方法和属性暴露给组件的父组件或者其他外部代码使用。在使用 JSX 开发 Vue 3 组件时，可以使用 `defineExpose()` 来定义需要暴露的方法和属性。这样，父组件或者其他外部代码就可以通过访问组件实例的公开 API 来调用组件内部的方法和属性。

## 作用

在 Vue 3 中，组件之间的通信是通过 props 和 events 进行的。而如果需要在组件内部公开一些方法和属性，以供父组件或其他外部代码调用，就可以使用 `defineExpose()` 函数。

使用 `defineExpose()` 可以帮助我们更好地封装组件，同时提高组件的复用性和可维护性。通过暴露组件内部的方法和属性，我们可以使得组件的功能更加灵活和可定制化。

## 用法

在组件内部，可以通过 `defineExpose()` 来定义需要暴露给外部的方法和属性。这些方法和属性会成为组件实例上的公开 API，可以被父组件或者其他外部代码直接访问和调用。

### 示例

```jsx
import { defineComponent, ref, defineExpose } from 'vue'

export default defineComponent({
  setup() {
    // 定义响应式数据
    const count = ref(0)

    // 定义内部方法
    const increment = () => {
      count.value++
    }

    // 使用 defineExpose() 来暴露 count 和 increment 方法
    defineExpose({
      count: count.value,
      increment
    })

    // 返回模板渲染函数
    return () => (
      <div>
        <p>数量：{count.value}</p>
        <button onClick={increment}>增加</button>
      </div>
    )
  }
})
```

在上面的示例中，我们定义了一个组件并使用 `defineExpose()` 来暴露组件内部的 `count` 变量和 `increment()` 方法。在返回的模板渲染函数中，我们可以直接使用 `this.$exposed.count` 和 `this.$exposed.increment()` 来访问组件实例的公开 API。

### 外部访问

在父组件或其他外部代码中，可以通过访问组件实例的 `$exposed` 属性来访问组件的公开 API。例如，下面的代码演示了如何在父组件中调用子组件暴露出来的方法：

```jsx
<template>
  <div>
    <p>子组件的数量：{{ childCount }}</p>
    <button @click="handleChildIncrement()">增加子组件数量</button>
    <MyComponent ref="myComponent" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MyComponent from '@/components/MyComponent.vue'

export default defineComponent({
  components: {
    MyComponent
  },
  setup() {
    // 定义响应式数据
    const childCount = ref(0)

    // 处理子组件的增加事件
    const handleChildIncrement = () => {
      // 调用子组件暴露出来的 increment 方法
      this.$refs.myComponent.$exposed.increment()
      childCount.value++
    }

    return {
      childCount,
      handleChildIncrement
    }
  }
})
</script>
```

在上面的代码中，我们在父组件中使用 `ref` 引用了子组件实例，并通过访问 `$exposed` 属性来调用子组件暴露出来的 `increment()` 方法。

### 注意事项

- 在 JSX 中，使用 `this.$exposed` 来访问组件实例的公开 API。
- `defineExpose()` 应该在组件的生命周期钩子函数（如 `mounted()`）内部调用，确保在组件挂载之后再暴露方法和属性。
- 在 `defineExpose()` 中，只能暴露非响应式的值，而不能暴露 `ref` 或 `reactive` 对象本身。
- `defineExpose()` 不应该被滥用，只应该暴露需要公开的方法和属性，遵循封装原则。

## 原理

在 Vue 3 的组件实现中，使用了基于 Proxy 的响应式系统。当一个组件被创建时，Vue 会为组件实例创建一个 Proxy 对象，用于拦截对组件实例的访问和修改。而 `defineExpose()` 的原理就是将暴露的方法和属性添加到组件实例对象上，使其成为公开 API，可以被外部代码直接访问。

## 示例

以下是一个完整的示例，演示了在子组件中使用 `defineExpose()` 来暴露内部方法和属性，并在父组件中通过访问 `$exposed` 属性来调用子组件的方法和读取子组件的属性。

```jsx
// Child.vue
<template>
  <div>
    <p>数量：{{ count }}</p>
    <button @click="handleIncrement()">增加</button>
  </div>
</template>

<script>
import { defineComponent, ref, defineExpose } from 'vue'

export default defineComponent({
  setup() {
    // 定义响应式数据
    const count = ref(0)

    // 定义内部方法
    const increment = () => {
      count.value++
    }

    // 使用 defineExpose() 来暴露 count 和 increment 方法
    defineExpose({
      count: count.value,
      increment
    })

    // 返回模板渲染函数
    return {
      count,
      increment
    }
  }
})
</script>

// Parent.vue
<template>
  <div>
    <p>子组件的数量：{{ childCount }}</p>
    <button @click="handleChildIncrement()">增加子组件数量</button>
    <Child ref="child" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Child from '@/components/Child.vue'

export default defineComponent({
  components: {
    Child
  },
  setup() {
    // 定义响应式数据
    const childCount = ref(0)

    // 处理子组件的增加事件
    const handleChildIncrement = () => {
      // 调用子组件暴露出来的 increment 方法
      this.$refs.child.$exposed.increment()
      childCount.value++
    }

    return {
      childCount,
      handleChildIncrement
    }
  }
})
</script>
```

在上面的示例中，我们定义了一个 `Child` 组件和一个 `Parent` 组件。在 `Child` 组件中，我们使用 `defineExpose()` 来暴露内部的 `count` 变量和 `increment()` 方法。在 `Parent` 组件中，我们通过访问 `$exposed` 属性来调用子组件的方法和读取子组件的属性。

## 总结

使用 `defineExpose()` 可以帮助我们更好地封装组件，并使组件的功能更加灵活和可定制化。同时，它也是 Vue 3 响应式系统的一部分，可以帮助我们更好地理解 Vue 3 的实现原理。在使用 `defineExpose()` 时，需要注意只暴露需要公开的方法和属性，遵循封装原则。
