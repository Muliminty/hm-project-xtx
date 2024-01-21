## Vue3 组合式 API - provide 和 inject（在 JSX 语法中的使用）

### 原理和作用

在 Vue3 中，`provide` 和 `inject` 是一对组合式 API，用于实现跨层级组件间的数据传递。它们提供了一种简洁、高效、安全的方式来共享数据和状态。

- `provide`：在父组件中定义一个数据源，将数据提供给子孙组件使用。
- `inject`：在子组件中注入父组件提供的数据源，并可以使用这些数据。

这种数据传递的机制基于 Vue3 的新响应式系统，当提供的数据发生变化时，所有依赖该数据的子孙组件都会被通知并更新视图。

### 代码案例

下面是一个示例，演示了如何在 JSX 语法中使用 `provide` 和 `inject` 实现跨层级组件的数据传递。

```jsx
// ParentComponent.jsx
import { provide, reactive } from 'vue'
import ChildComponent from './ChildComponent.jsx'

export default {
  setup() {
    // 定义响应式对象
    const data = reactive({
      message: 'Hello from parent component'
    })

    // 提供数据给子组件
    provide('data', data)

    return () => (
      <div>
        <p>父组件：{data.message}</p>
        <ChildComponent />
      </div>
    )
  }
}
```

在上述代码中，我们首先引入了 `provide` 和 `reactive`，然后在 `setup` 函数中定义了一个名为 `data` 的响应式对象，并使用 `provide` 将其提供给子组件。提供的名称为 `'data'`。

```jsx
// ChildComponent.jsx
import { inject } from 'vue'

export default {
  setup() {
    // 注入父组件提供的数据
    const data = inject('data', { message: 'default message' })

    // 修改数据
    const updateMessage = () => {
      data.message = 'Hello from child component'
    }

    return () => (
      <div>
        <p>子组件：{data.message}</p>
        <button onClick={updateMessage}>Update message</button>
      </div>
    )
  }
}
```

在子组件中，我们使用 `inject` 来注入父组件提供的数据源。如果父组件没有提供该数据，则使用默认值 `{ message: 'default message' }`。然后，我们在子组件中显示从父组件传递过来的消息，并定义了一个 `updateMessage` 方法来修改消息。

### 注意事项

在使用 `provide` 和 `inject` 时，需要注意以下几点：

1. 提供者和接收者之间必须有明确的父子关系，即提供者必须是接收者的祖先组件。
2. 推荐使用对象或响应式对象作为提供的数据，以确保数据的响应式和共享性。
3. 如果提供的数据是函数，调用该函数时会丢失上下文，需使用 `bind` 或箭头函数绑定上下文。
4. 如果提供的数据是常量或字面量，可使用 `ref` 和 `shallowRef` 将其转换为响应式对象。

希望这份文档可以帮助你理解在 JSX 语法中如何使用 `provide` 和 `inject`，并提供了详细的代码案例和注释。
