
# Vue 3 JSX中使用computed

## 原理

在Vue 3中，我们可以通过`defineComponent`函数创建一个组件，并在`setup`函数中使用`computed`函数来定义计算属性。计算属性是基于其他响应式数据进行计算的属性，当依赖的数据发生变化时，计算属性会自动更新。

## 作用

使用计算属性可以将复杂的数据逻辑抽象出来，使代码更加清晰和可维护。它可以帮助我们避免在模板中编写过多的逻辑代码，提高代码的可读性和可重用性。

## 代码案例与注释

```jsx
import { defineComponent, computed } from 'vue'

const MyComponent = defineComponent({
  setup() {
    // 定义响应式数据
    const count = ref(0)

    // 使用computed定义计算属性
    const doubleCount = computed(() => {
      return count.value * 2
    })

    // 返回模板渲染函数
    return () => (
      <div>
        <p>Count: {count.value}</p>
        <p>Double Count: {doubleCount.value}</p>
        <button onClick={() => count.value++}>Increment</button>
      </div>
    )
  }
})

export default MyComponent
```

在上面的代码中，我们首先导入了`defineComponent`和`computed`函数。然后使用`defineComponent`函数创建了一个组件`MyComponent`。

在`setup`函数中，我们定义了一个响应式数据`count`，它的初始值为0。然后使用`computed`函数创建了一个计算属性`doubleCount`，它的值是`count.value`的两倍。

最后，我们返回了一个模板渲染函数，使用JSX语法编写了组件的模板。模板中展示了`count.value`和`doubleCount.value`的值，并且有一个按钮，点击按钮时会将`count.value`递增。

通过使用`computed`函数，我们将计算逻辑抽象为一个计算属性，使得模板中只需要关注数据的展示和交互。当`count`发生变化时，`doubleCount`会自动更新，保持与依赖数据的同步。

这样，我们就可以在Vue 3的JSX中使用computed属性了。计算属性可以帮助我们更好地管理复杂的数据逻辑，提高代码的可读性和可维护性。
