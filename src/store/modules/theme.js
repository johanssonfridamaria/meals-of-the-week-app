export default {
  state: {
    darkTheme: false,
  },
  getters: {
    darkTheme: state => state.darkTheme,
  },
  mutations: {
    SET_THEME: (state) => {
      state.darkTheme = !state.darkTheme
    }
  },
  actions: {
    setTheme: ({ commit }) => {
      commit('SET_THEME')
    },
  },
}
