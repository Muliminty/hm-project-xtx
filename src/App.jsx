import { defineComponent } from 'vue'
import { Study } from './components/study/index.jsx'

export default defineComponent({
  setup() {
    return () => (
      <>
        < Study />
      </>
    )
  }
})
