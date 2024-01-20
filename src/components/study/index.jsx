import { defineComponent, ref, watch } from 'vue'
import { StudyLife } from './StudyLife.jsx'
import { StudyComputed } from './StudyComputed.jsx'
import { StudyWatch } from './StudyWatch.jsx'
import { StudyDefineExpose } from './defineExpose/StudyDefineExpose.jsx'
import StudyDefineExposeFather from './defineExpose/StudyDefineExposeFather.vue'

import {
  ElContainer,
  ElHeader,
  ElMain,
  ElAside,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup
} from 'element-plus';


const Children = defineComponent({
  props: {
    parentMsg: String,
    onClick: Function
  },
  setup(props) {

    const { parentMsg, onClick } = props
    const msg = 'Children msg'
    return () => (
      <div>
        <h1>{parentMsg}</h1>
        <h1>{msg}</h1>
        <button onClick={() => {
          onClick('子组件向父组件传值')

        }}>父组件点击事件</button>
      </div>
    )
  }
})
const menuItems = [
  { key: 'Life', title: '生命周期', Component: StudyLife },
  { key: 'Computed', title: '计算属性', Component: StudyComputed },
  { key: 'Watch', title: '监听器', Component: StudyWatch },
  { key: 'Children', title: '父子组件通信', Component: Children },
  {
    key: 'defineExpose', title: 'defineExpose', Component: null, children: [
      { key: 'defineExposeJsx', title: 'defineExpose-Jsx妥协写法', Component: StudyDefineExpose },
      { key: 'StudyDefineExposeVue3', title: 'defineExpose-Vue常规用法', Component: StudyDefineExposeFather },
    ]
  },
];

export const Study = defineComponent({
  setup() {

    const focus = ref('defineExpose')
    const handleClick = (key) => {
      focus.value = key
    }

    watch(focus, (newVal, oldVal) => {
      console.log('watch', newVal, oldVal)
    })
    return () => (
      <ElContainer>
        <ElHeader>基础知识</ElHeader>
        <ElContainer>
          <ElAside width="200px">
            <ElMenu default-active={focus.value} mode="vertical">
              {menuItems.map(({ key, title, children }) => (
                children ? (
                  <ElMenuItemGroup title={title}>
                    {children.map(child => (
                      <ElMenuItem
                        index={child.key}
                        onClick={() => handleClick(child.key)}
                      >
                        {child.title}
                      </ElMenuItem>
                    ))}
                  </ElMenuItemGroup>
                ) : (
                  <ElMenuItem
                    index={key}
                    onClick={() => handleClick(key)}
                  >
                    {title}
                  </ElMenuItem>
                )
              ))}
            </ElMenu>
          </ElAside>
          <ElMain>
            {menuItems.map(({ key, Component, children }) => {
              if (children) {
                let selectedChild = children.find(child => child.key === focus.value)
                if (selectedChild) {
                  return <selectedChild.Component />
                }
              } else if (key === focus.value) {
                return <Component />
              }
            })}
          </ElMain>
        </ElContainer>
      </ElContainer>
    )
  }
})

