import { ref, watch, defineComponent } from 'vue';

export const StudyWatch = defineComponent({
  setup() {
    // 创建一个响应式的count变量
    let count = ref(1);
    let arr = ref([1, 2, 3]);

    // 使用watch函数来监听count的变化
    watch(count, (newValue, oldValue) => {
      // 在数据变化时执行的逻辑
      console.log('count变化了', newValue, oldValue);
    });

    // 监听多个对象
    watch([count, arr], (
      [newCount, newArr], [oldCount, oldArr]
    ) => {
      console.log(`message的值由${oldArr}变为了${newArr}`);
      console.log(`count的值由${oldCount}变为了${newCount}`);

    }, {
      // deep: true深度监听
      immediate: true // 立即执行watch函数
    })


    const obj = ref({ age: 0, name: '张三' });

    watch(
      () => obj.value.age,
      (newValue, oldValue) => {
        console.log(`age的值由${oldValue}变为了${newValue}`);
      }
    );
    return () => (
      <div>
        <h2>StudyWatch</h2>
        <div>{count.value}</div>
        <p>{arr.value.map((i) => `${i},`)}</p>
        <p>
          {obj.value.age} - {obj.value.name}
        </p>
        <button onClick={() => {
          count.value++
        }}>count++</button>


        <button onClick={() => {
          const num = Math.ceil(Math.random() * 999);
          arr.value.push(num)
        }}>多个监听</button>

        <button onClick={() => {
          const num = Math.ceil(Math.random() * 999);
          obj.value.name = `张三${num}`
        }}>精确监听name</button>
        <button onClick={() => {
          const num = Math.ceil(Math.random() * 999);
          obj.value.age = num
        }}>精确监听age</button>
      </div >
    )
  }
})