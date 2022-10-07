import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { mapGetters } from 'vuex'
import api from './api'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.mixin({
  computed: {
    ...mapGetters([
      'token',
      'appName',
      'preloader',
      'language'
    ])
  },
  methods: {
    preloaderStart () {
      this.$store.commit('setPreloader', true)
    },
    preloaderFinish () {
      this.$store.commit('setPreloader', false)
    },
    imageUrl (image) {
      return require(`./assets/img/${image}`)
    },
    sendData (data, url = '', method = 'GET', callback = null, headers = {}) {
      const options = {
        method: method,
        url: url,
        data: data,
        headers: headers
      }
      this.preloaderStart()
      return this.$api(options)
          .then((response) => {
            if (callback !== null) callback(response.data.payload)
          })
          .catch((error) => {
            console.log(error.response)
          })
          .finally(() => { this.preloaderFinish() })
    },
    getData (url = '', method = 'GET', callback = null) {
      const options = {
        method: method,
        url: url,
        data: {}
      }
      this.preloaderStart()
      return this.$api(options)
          .then((response) => {
            if (callback !== null) callback(response.data.payload)
          })
          .catch((error) => {
            console.error(error.response)
          })
          .finally(() => { this.preloaderFinish() })
    },
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
