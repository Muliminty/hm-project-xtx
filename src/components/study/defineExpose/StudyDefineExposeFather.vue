<template>
  <!-- //给组件绑定ref，从ref上获取 -->
  <StudyDefineExposeChild ref="childRef"></StudyDefineExposeChild>
  <button @click="showChildMsg">使用子组件的函数</button>
</template>   
<script setup>
import { ref, onMounted } from 'vue'
import StudyDefineExposeChild from './StudyDefineExposeChild.vue'
//ref名称必须与绑定的名称相同 
let childRef = ref(null)
//setup ## beforeCreate、create生命周期的集合这里是获取不到的 
const showChildMsg = () => {
  if (childRef.value) {
    childRef.value.showMsg()
  }
}
onMounted(() => {     //只能在在里面才能获取到完整的组件ref的信息 
  console.log('childRef2', childRef.value)          //通过解构获取 
  const { data, isFlag, showMsg } = childRef.value
  console.log('{ data, isFlag,showMsg }: ', { data, isFlag, showMsg });
})
</script> 