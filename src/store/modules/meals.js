
export default {
  state: {
    meals: [
      {id:1, name: 'PalakPaneer'},
      {id:2, name: 'Spagetti & Köttfärsås'},
      {id:3, name: 'Pizza'},
      {id:4, name: 'Potatis & Pannbiff'},
      {id:5, name: 'Ceasarsallad'}
    ],
    menu: [],
    randomMeal: {},
  },
  getters: {
    meals: state => state.meals,
    menu: state => state.menu,
    randomMeal: state => state.randomMeal,
    added: state => state.added,
    isAdded: (state) => (id) => state.menu.find(x => x.id === id)
  },
  mutations: {
    SET_MEALS: (state) => {
      if(localStorage.getItem('meals')){
        state.meals = JSON.parse(localStorage.getItem('meals'));
      }
    },
    ADD_MEAL: (state, mealName) => {
      state.meals.push({id: Date.now(), name:mealName})
      localStorage.setItem('meals', JSON.stringify(state.meals))
    },
    DEL_MEAL: (state, id) => {
      state.meals = state.meals.filter(meal => meal.id !== id)
      state.menu = state.menu.filter(meal => meal.id !== id)
      localStorage.setItem('meals', JSON.stringify(state.meals))
      localStorage.setItem('menu', JSON.stringify(state.menu))
    },
    ADD_TO_MENU: (state, meal) =>{
        state.menu.push(meal)
        localStorage.setItem('menu', JSON.stringify(state.menu))
    },
    DEL_FROM_MENU: (state, id) => {
      state.menu = state.menu.filter(meal => meal.id !== id)
      localStorage.setItem('menu', JSON.stringify(state.menu))
    },
    ADD_RANDOM: (state) => {
      if(state.meals.length) {
        state.randomMeal = state.meals[Math.floor(Math.random() * state.meals.length)]
        let exists = state.menu.find(x => x.id === state.randomMeal.id)
        if(!exists){
          state.menu.push(state.randomMeal)
          localStorage.setItem('menu', JSON.stringify(state.menu))
        }
      }
    },
    CLEAR_MENU: (state) => {
      state.menu= [];
      localStorage.setItem('menu', JSON.stringify(state.menu))
    }
  },
  actions: {
    // addRanToList: ({commit}) 
    getMeals: ({commit}) => {
      commit('SET_MEALS')
    },
    addMeal: ({commit}, mealName) =>{
      commit('ADD_MEAL', mealName)
    },
    delMeal: ({commit}, id) => {
      commit('DEL_MEAL', id)
    },
    addToMenu: ({commit}, meal) => {
      commit('ADD_TO_MENU', meal)
    },
    delFromMenu: ({commit}, id) => {
      commit('DEL_FROM_MENU', id)
    },
    addRandom: ({commit}) => {
      commit('ADD_RANDOM')
    },
    clearMenu: ({commit}) => {
      commit('CLEAR_MENU')
    }
  }
}
