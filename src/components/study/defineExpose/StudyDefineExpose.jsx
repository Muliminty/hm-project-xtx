/**
 * 在 Vue 3 中，defineExpose API 是用于在 setup 函数中定义一个组件实例的公开属性。
 * 这些属性可以通过组件的引用（ref）在父组件中访问。
 * 然而，defineExpose API 并不适用于 JSX 或渲染函数，它只能在 setup 函数中使用。
 * 在 JSX 或渲染函数中，你可以使用 ref 和 onMounted 来实现类似的功能。
 * 你可以在 setup 函数中创建一个 ref，然后在 onMounted 钩子中将子组件的实例赋值给这个 ref。
 * */
import { defineComponent, ref, onMounted } from 'vue'

export const StudyDefineExpose = defineComponent({
  setup() {
    const childrenRef = ref(null)

    onMounted(() => {
      childrenRef.value = {
        count: 0,
        handleAdd: () => {
          childrenRef.value.count++
          console.log('childrenRef: ', childrenRef);
        }
      }
    })

    return () => (
      <div>
        <button onClick={() => {
          console.log('childrenRef: ', childrenRef.value);
        }}>点击打印ref</button>
        <button onClick={() => {
          childrenRef.value.handleAdd()

        }}>handleAdd</button>
        <Children ref={childrenRef} />
      </div>
    )
  }
})

const Children = defineComponent({
  setup() {
    const count = ref(0)

    const handleAdd = () => {
      count.value++
      console.log('count.value: ', count.value);
    }

    return () => (
      <div>
        <p>数量：{count.value}</p>
        <button onClick={handleAdd}>增加数量</button>
      </div>
    )
  }
})