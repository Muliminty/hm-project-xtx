import { defineComponent } from 'vue';
import { useCounterStoreFn, useCounterStoreObj } from './store/store'

export default defineComponent({
  render() {

    const counterStore = useCounterStoreFn()
    const counterStore2 = useCounterStoreObj()

    return (
      <>

        <div>
          <p>Count: {counterStore.count}</p>
          <button onClick={counterStore.increment}>Increment</button>
          <button onClick={counterStore.decrement}>Decrement</button>
        </div >


        ----


        <div>
          <p>Count: {counterStore2.count}</p>
          <button onClick={counterStore2.increment}>Increment</button>
          <button onClick={counterStore2.decrement}>Decrement</button>
        </div >
      </>
    );
  },
});
