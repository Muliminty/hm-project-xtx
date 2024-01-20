import { defineComponent, computed, ref } from 'vue'

export const StudyComputed = defineComponent({
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
        <p>数量：{count.value}</p>
        <p>双倍数量：{doubleCount.value}</p>
        <button onClick={() => count.value++}>增加</button>
      </div>
    )
  }
})
