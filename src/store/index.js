import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appName: process.env.VUE_APP_NAME,
    server: { url: `${process.env.VUE_APP_BACKEND_PROTOCOL}://${process.env.VUE_APP_BACKEND_HOST}` },
    preloader: false,
    language: 'en',
    token: process.env.VUE_APP_API_KEY,
    objects: []
  },
  getters: {
    appName: state => {
      return state.appName
    },
    server: state => {
      return state.server.url
    },
    preloader: state => {
      return state.preloader
    },
    language: state => {
      return state.language
    },
    token: state => {
      return state.token
    },
    objects: state => {
      return state.objects
    }
  },
  mutations: {
    setPreloader (state, payload) {
      state.preloader = payload
    },
    setObjects (state, payload) {
      state.objects = payload
    },
  },
  actions: {
    setPreloader (context, payload) {
      context.commit('setPreloader', payload)
    },
    setObjects (context, payload) {
      context.commit('setObjects', payload)
    }
  },
  modules: {
  }
})
