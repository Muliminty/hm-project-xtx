import { defineComponent, reactive, inject, provide } from 'vue'

export const ProvideAndInject = defineComponent({
  setup() {
    // 定义响应式对象
    const data = reactive({
      message: 'Hello from parent component'
    })
    // 提供数据给子组件
    provide('data', data)
    // 修改数据
    const updateMessage = () => {
      data.message = '孙子组件修改msg'
    }
    provide('updateMessage', updateMessage)

    return () => (
      <div>
        <p>父组件：{data.message}</p>
        <button onClick={() => {
          data.message = '父组件修改msg'
        }}>父组件修改msg</button>
        <ChildComponent />
      </div>
    )
  }
})

const ChildComponent = defineComponent({
  setup() {
    return () => (
      <div>
        <p>儿子组件</p>
        <GrandChildComponent />
      </div>
    )
  }
})

const GrandChildComponent = defineComponent({
  setup() {
    // 注入父组件提供的数据
    const data = inject('data', { message: 'default message' })
    const updateMessage = inject('updateMessage')

    // // 修改数据
    // const updateMessage = () => {
    //   data.message = '孙子组件修改msg'
    // }

    return () => (
      <div>
        <p>孙子组件：{data.message}</p>
        <button onClick={updateMessage}>Update message</button>
      </div>
    )
  }
})