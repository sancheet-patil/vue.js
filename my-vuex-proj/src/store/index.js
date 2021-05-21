 import { createStore } from 'vuex'
export default createStore({
  state:{
    //store state here
    cities : ["Mumbai","Pune"]
  },
  mutations:{
    //mutating state with synchronous calls
    updateCities(state,payload)
    {
      state.cities.push(payload)
    }
  },
  actions:{
    //mutating state using asynchronouos calls
  },
  modules:{
    //to maintain multiple state configure modules here
  }
})
// export default createStore({
//   state: {
//     products:[{
//       id:1,
//       name:'LED',
//       price:30000
//     },
//     {
//       id:2,
//       name:'Mobile',
//       price:20000
//     }]
//   },
//   mutations: {
//     addProduct (state, payload) {
//      for(let i=0;i<state.products.length;i++)
//      {
//        alert(state.products[i].id)
//      }
//       state.products.push(payload)
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
