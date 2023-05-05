import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    // 自动将返回类型推断为数字
    doubleCount(state) {
      return state.count * 2
    },
    // 返回类型必须明确设置
    doublePlusOne(): number {
      return this.count * 2 + 1
    },
  },
  actions: {
    increment() {
      this.count++
    },
    reduce() {
      this.count--
    },
  },
})


// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(1)
//   function increment() {
//     count.value++
//   }
//   function reduce() {
//     count.value--
//   }

//   return { count, increment, reduce }
// })
