好的，下面是关于 Vue 3 中 `watch` 函数监听单个、多个、立即执行和深度监听的详细介绍以及案例。

# `watch` 函数简介

Vue 3 中的 `watch` 函数用于监听一个或多个响应式变量的变化，并在变化时执行回调函数。它可以监听单个变量，也可以监听多个变量。除此之外，还可以设置选项来控制是否立即执行回调函数以及是否进行深度监听。

下面我们来逐一了解这些用法。

## 监听单个变量

使用 `watch` 函数监听单个变量时，我们需要传入两个参数：要监听的变量和回调函数。

```js
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`count的值由${oldValue}变为了${newValue}`);
});
```

在上面的代码中，我们使用 `watch` 函数监听 `count` 变量的变化，并在变化时输出旧值和新值。

## 监听多个变量

如果我们需要同时监听多个变量的变化，我们可以将这些变量放入一个数组中，并将其传递给 `watch` 函数。

```js
import { ref, watch } from 'vue';

const count1 = ref(0);
const count2 = ref(0);

watch(
  [count1, count2],
  ([newCount1, newCount2], [oldCount1, oldCount2]) => {
    console.log(`count1的值由${oldCount1}变为了${newCount1}`);
    console.log(`count2的值由${oldCount2}变为了${newCount2}`);
  }
);
```

在上面的代码中，我们使用 `watch` 函数监听了 `count1` 和 `count2` 变量的变化，并在变化时输出旧值和新值。

需要注意的是，当同时监听多个变量时，回调函数的参数是一个数组，其中包含了每个变量的新值和旧值。因此，在回调函数中可以使用解构语法对这些值进行解构。

## 立即执行监听函数

默认情况下，`watch` 函数不会在组件初始化时立即执行监听函数。它会等待被监听的变量发生变化后再执行回调函数。如果我们需要在组件初始化时立即执行回调函数，可以设置 `immediate` 选项为 `true`。

```js
import { ref, watch } from 'vue';

const count = ref(0);

watch(
  count,
  (newValue, oldValue) => {
    console.log(`count的值由${oldValue}变为了${newValue}`);
  },
  { immediate: true }
);
```

在上面的代码中，我们使用 `watch` 函数监听了 `count` 变量的变化，并设置 `immediate` 选项为 `true`，以便在组件初始化时立即执行回调函数。

需要注意的是，如果同时设置了 `immediate` 和 `deep` 选项，那么在组件实例化时也会进行深度比较并执行回调函数。这可能会导致性能问题，因此应该尽量避免同时设置这两个选项。

## 深度监听

默认情况下，`watch` 函数只会对被监听的变量进行浅比较。这意味着当被监听的变量是一个对象或数组时，它只会检查其引用是否发生了变化，而不会递归地比较其属性或元素。

如果我们需要在对象或数组发生变化时也能触发回调函数，可以设置 `deep` 选项为 `true`。

```js
import { ref, watch } from 'vue';

const obj = ref({ count: 0 });

watch(
  obj,
  (newValue, oldValue) => {
    console.log(`obj发生了变化`, newValue, oldValue);
  },
  { deep: true }
);
```

在上面的代码中，我们使用 `watch` 函数监听了一个包含单个属性 `count` 的对象 `obj`，并设置 `deep` 选项为 `true`。这样，当我们修改 `obj.count` 时，`watch` 函数也会触发回调函数。

## 精确监听

当我们需要监听一个响应式变量的某个属性或元素时，可以使用函数的形式来监听它。

```js
import { ref, watch } from 'vue';

const obj = ref({ count: 0 });

watch(
  () => obj.value.count,
  (newValue, oldValue) => {
    console.log(`count的值由${oldValue}变为了${newValue}`);
  }
);
```

在上面的代码中，我们使用函数来监听 `obj.value.count` 这个属性的变化。这样，当我们修改 `obj.value.count` 时，`watch` 函数就会触发回调函数。

需要注意的是，当使用函数形式监听响应式变量时，Vue 3 会自动处理其依赖关系，以确保在变量发生变化时能够正确地触发回调函数。

## 完整案例

下面是一个完整的 `watch` 函数使用示例，包括监听单个变量、监听多个变量、立即执行监听函数和深度监听。

```html
<template>
  <div>
    <h2>StudyWatch</h2>
    <p>{{ count }}</p>
    <button @click="incrementCount">count++</button>

    <p v-for="(item, index) in arr" :key="index">{{ item }}</p>
    <button @click="pushArr">arrPush</button>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    // 创建一个响应式的count变量
    let count = ref(1);
    let arr = ref([1, 2, 3]);

    // 使用watch函数来监听count的变化
    watch(count, (newValue, oldValue) => {
      // 在数据变化时执行的逻辑
      console.log('count变化了', newValue, oldValue);
    });

    // 使用watch函数来监听count和arr的变化
    watch(
      [count, arr],
      ([newCount, newArr], [oldCount, oldArr]) => {
        console.log(`arr的值由${oldArr}变为了${newArr}`);
        console.log(`count的值由${oldCount}变为了${newCount}`);
      },
      { deep: true }
    );

    return { count, arr, incrementCount, pushArr };
  },

  methods: {
    incrementCount() {
      this.count++;
    },

    pushArr() {
      const num = Math.ceil(Math.random() * 999);
      this.arr.push(num);
    },
  },
};
</script>
```

在上面的代码中，我们使用 `watch` 函数监听了 `count` 和 `arr` 变量的变化，并在变化时输出旧值和新值。我们还演示了如何在组件中使用 `watch` 函数。

需要注意的是，在模板中访问响应式变量时，需要使用 `.value` 属性来访问其实际的值。例如，我们在模板中使用 `{{ count }}` 来显示 `count` 变量的值，而不是使用 `{{ count.value }}`。
