export default {
  state: {
    isDarkTheme: true,
  },
  getters: {
    isDarkTheme: state => state.isDarkTheme,
  },
  mutations: {
    SET_THEME: (state) => {
      state.isDarkTheme = !state.isDarkTheme
    }
  },
  actions: {
    setTheme: ({ commit }) => {
      commit('SET_THEME')
    },
  },
}
