import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured } from 'vue'
import { ElButton } from 'element-plus'
export const StudyLife = defineComponent({
  // 生命周期
  setup(props) {

    // onBeforeMount 钩子函数会在组件挂载之前调用
    onBeforeMount(() => {
      console.log('组件挂载之前调用：onBeforeMount')
    })

    // onMounted 钩子函数会在组件挂载之后调用
    onMounted(() => {
      console.log('组件挂载之后调用：onMounted')
    })

    // onBeforeUpdate 钩子函数会在组件更新之前调用
    onBeforeUpdate(() => {
      console.log('组件更新之前调用：onBeforeUpdate')
    })

    // onUpdated 钩子函数会在组件更新之后调用
    onUpdated(() => {
      console.log('组件更新之后调用：onUpdated')
    })

    // onBeforeUnmount 钩子函数会在组件卸载之前调用
    onBeforeUnmount(() => {
      console.log('组件卸载之前调用：onBeforeUnmount')
    })

    // onUnmounted 钩子函数会在组件卸载之后调用
    onUnmounted(() => {
      console.log('组件卸载之后调用：onUnmounted')
    })

    // onActivated 钩子函数会在组件被激活时调用（当组件被包含在一个 keep-alive 中，并且从缓存中恢复时）
    onActivated(() => {
      console.log('组件被激活时调用：onActivated')
    })

    // onDeactivated 钩子函数会在组件被停用时调用（当组件被包含在一个 keep-alive 中，并且离开缓存时）
    onDeactivated(() => {
      console.log('组件被停用时调用：onDeactivated')
    })

    // onErrorCaptured 钩子函数会在组件内部出现错误时调用
    onErrorCaptured((error) => {
      console.error(error)
    })

    const count = ref(0)

    return () => (
      <>
        <div>{count.value}</div>
        <ElButton onClick={() => count.value++}>+</ElButton>
        <div>打开控制台看生命周期</div>
      </>
    )
  }
})