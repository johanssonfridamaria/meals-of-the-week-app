export default {
  state: {
    meals: [
      { name: 'PalakPaneer' },
      { name: 'Pasta' },
      { name: 'Pizza' }
    ],
    thisWeeksMenu: [],
  },
  getters: {
    meals: state => state.meals,
    thisWeeksMenu: state => state.thisWeeksMenu
  },
  mutations: {

  },
  actions: {

  },
}
