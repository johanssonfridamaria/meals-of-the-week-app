import Vue from 'vue'
import Vuex from 'vuex'
import meals from './modules/meals'
import theme from './modules/theme'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meals,
    theme,
  }
})
