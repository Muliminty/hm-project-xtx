import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.jsx'

export default defineComponent({
  setup() {
    const msg = 'Vite + Vue'
    return () => (
      <>
        <Test />
        <HelloWorld msg={msg} onClick={() => {
          console.log('父组件点击事件');
        }} />
      </>
    )
  }
})

const Test = defineComponent({
  setup() {
    const msg = 'test'
    return () => (
      <div>
        {msg}
      </div>
    )
  }
})