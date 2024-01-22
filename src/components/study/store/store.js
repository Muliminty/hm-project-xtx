
import { defineStore } from 'pinia'
import { ref } from 'vue'


// 对象写法

export const useCounterStoreObj = defineStore('counter', {
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



// 函数写法
export const useCounterStoreFn = defineStore('counter2', () => {
  // 定义 数据
  const count = ref(0)

  // actions 操作 ++
  const increment = () => {
    count.value++
  }

  // actions 操作 --
  const decrement = () => {
    count.value--
  }
  // 返回 store 的状态和操作
  return {
    count,
    increment,
    decrement,
  }
})
