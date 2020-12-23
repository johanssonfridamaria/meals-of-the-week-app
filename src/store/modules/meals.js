export default {
  state: {
    meals: [
      { name: 'PalakPaneer', menu: false},
      { name: 'Pasta', menu: true },
      { name: 'Pizza', menu: false }
    ],
    thisWeeksMenu: [],
    randomMeal: '',
  },
  getters: {
    meals: state => state.meals,
    thisWeeksMenu: state => state.thisWeeksMenu,
    randomMeal: state => state.meals[Math.floor(Math.random() * state.meals.length)]
  },
  mutations: {
    ADD_MEAL: (state, meal) => {
      state.meals.push({name:meal})
    },
    DEL_MEAL: (state, meal) => {
      state.meals.splice(state.meals.indexOf(meal), 1)
    },
    ADD_TO_MENU: (state, meal) =>{
      state.thisWeeksMenu.push(meal)
    }
  },
  actions: {
    // addRanToList: ({commit}) 
    addMeal: ({commit}, meal) =>{
      commit('ADD_MEAL', meal)
    },
    delMeal: ({commit}, meal) => {
      commit('DEL_MEAL', meal)
    },
    addToMenu: ({commit}, meal) => {
      commit('ADD_TO_MENU', meal)
    },
  }
}
