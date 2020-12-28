export default {
  state: {
    meals: [
      { name: 'PalakPaneer'},
      { name: 'Pasta'},
      { name: 'Pizza'}
    ],
    thisWeeksMenu: [],
    randomMeal: '',
    added: false,
  },
  getters: {
    meals: state => state.meals,
    thisWeeksMenu: state => state.thisWeeksMenu,
    randomMeal: state => state.meals[Math.floor(Math.random() * state.meals.length)],
    added: state => state.added,
  },
  mutations: {
    SET_MEALS: (state) => {
      if(localStorage.getItem('meals')){
        state.meals = JSON.parse(localStorage.getItem('meals'));
      }
    },
    ADD_MEAL: (state, meal) => {
      state.meals.push({name:meal})
      localStorage.setItem('meals', JSON.stringify(state.meals))
    },
    DEL_MEAL: (state, meal) => {
      state.meals.splice(state.meals.indexOf(meal), 1)
      localStorage.setItem('meals', JSON.stringify(state.meals))
    },
    ADD_TO_MENU: (state, meal) =>{
      state.thisWeeksMenu.push(meal)
      localStorage.setItem('thisWeeksMenu', JSON.stringify(state.thisWeeksMenu))
    },
    DEL_FROM_MENU: (state, meal) => {
      state.thisWeeksMenu.splice(state.thisWeeksMenu.indexOf(meal), 1)
      localStorage.setItem('thisWeeksMenu', JSON.stringify(state.thisWeeksMenu))
    },
    
  },
  actions: {
    // addRanToList: ({commit}) 
    getMeals: ({commit}) => {
      commit('SET_MEALS')
    },
    addMeal: ({commit}, meal) =>{
      commit('ADD_MEAL', meal)
    },
    delMeal: ({commit}, meal) => {
      commit('DEL_MEAL', meal)
    },
    addToMenu: ({commit}, meal) => {
      commit('ADD_TO_MENU', meal)
    },
    delFromMenu: ({commit}, meal) => {
      commit('DEL_FROM_MENU', meal)
    }
  }
}
