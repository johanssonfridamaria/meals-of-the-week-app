export default {
  state: {
    meals: [
      {id:1, name: 'PalakPaneer'},
      {id:2, name: 'Pasta'},
      {id:3, name: 'Pizza'}
    ],
    menu: [],
    randomMeal: '',
  },
  getters: {
    meals: state => state.meals,
    menu: state => state.menu,
    randomMeal: state => state.meals[Math.floor(Math.random() * state.meals.length)],
    added: state => state.added,
    isAdded: (state) => (id) => state.menu.find(x => x.id === id)
  },
  mutations: {
    SET_MEALS: (state) => {
      if(localStorage.getItem('meals')){
        state.meals = JSON.parse(localStorage.getItem('meals'));
      }
    },
    ADD_MEAL: (state, meal) => {
      state.meals.push({id: meal.id, name:meal.name})
      localStorage.setItem('meals', JSON.stringify(state.meals))
    },
    DEL_MEAL: (state, meal) => {
      state.meals.splice(state.meals.indexOf(meal), 1)
      localStorage.setItem('meals', JSON.stringify(state.meals))
    },
    ADD_TO_MENU: (state, meal) =>{
      state.menu.push(meal)
      localStorage.setItem('menu', JSON.stringify(state.menu))
    },
    DEL_FROM_MENU: (state, meal) => {
      state.menu.splice(state.menu.indexOf(meal), 1)
      localStorage.setItem('menu', JSON.stringify(state.menu))
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
