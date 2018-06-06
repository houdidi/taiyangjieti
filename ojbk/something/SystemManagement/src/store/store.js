import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 数据
var state = {
  count: 10
}

// 操作,动作,事件
const actions = {
  increment: ({
    commit
  }) => {
    commit('increment')
  },
  decrement: ({
    commit
  }) => {
    commit('decrement')
  }
}

// 真正的函数,在这里处理这些数据 
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

// 获取数据
const getters = {
  count(state) {
    return state.count
  }
}

// 抛出,导出这个store对象
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
