<!-- <script setup>
import { ref, defineExpose } from 'vue'

const count = ref(0)

const handleAdd = () => {
  count.value++
  console.log('count.value: ', count.value);
}


defineExpose({
  count,
  handleAdd
})
</script>


<template>
  <div>
    我是Child组件
    <div>{{ count }}</div>
    <button @click="handleAdd">Child++</button>

  </div>
</template> -->

<template>
  <div>我是子组件</div>
  <div>{{ data.name }}</div>
</template>   
<script setup>
import { ref, reactive } from 'vue'
const isFlag = ref(false)
const showMsg = () => {
  console.log('调用了子组件的方法: ');
}
const data = reactive({
  name: 'tom',
  age: 18
})
//把数据导出 
defineExpose({
  data,
  isFlag,
  showMsg
})
</script>