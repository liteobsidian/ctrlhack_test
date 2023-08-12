import Vue from 'vue'
import Vuex from 'vuex'
import { delay } from '@/helpers'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    logs: [],
  },
  getters: {
    getLogs: state => state.logs
  },
  actions: {
    addLog({ commit }, { type, value }) {
      commit('addNewLog', {type, value: value || 'not value'})
    },
    // Реализовал через Action, т.к. геттер кэшируется
    getLocalStorageState() {
      const nonce = +window.localStorage.nonce
      const price = +window.localStorage.price
      const qty = +window.localStorage.qty
      const amount = +window.localStorage.amount
      return {nonce, price, qty, amount}
    },
    async apiSave({ commit }, {nonce, price, qty, amount}) {
      await delay(1000)
      if (!!(nonce % 2)) return { success: false }
      commit('saveParams', {nonce, price, qty, amount})
      return { success: true }
    }
  },
  mutations: {
    addNewLog(state, val) {
      state.logs.unshift(val)
    },
    saveParams(state, {nonce, price, qty, amount}) {
      localStorage.setItem('nonce', nonce)
      localStorage.setItem('price', price)
      localStorage.setItem('qty', qty)
      localStorage.setItem('amount', amount)
    }
  }
})

export default store