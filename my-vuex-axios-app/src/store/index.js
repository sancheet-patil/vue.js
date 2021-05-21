import { createStore } from 'vuex'
import UsersModule from '../store/modules/user-modules.js'

export default createStore({
 //define the state here 
  state: {
    //list : ["Mumbai","Delhi","Pune","Chennai"]
  },
  //if crud operations on state need to be done using synchronous calls then
  //place that logic here
  mutations: {
    //state will hold original state and payload is dynamic data
    /*updateList(state,payload)
    {
        state.list.push(payload);
    }*/
  },
  //if crud operations on state need to be done using asynchronous calls
  //then keep the logic in actions
  actions: {
  },

  modules: {
    UsersModule
    //user:moduleUser,
    //tweet:moduleTweet
  }
})

/*
const moduleUser = {
  state:{ users[];}
  mutations:{}
  actions:{}
  getters:{}
}
const moduleTweet = {
  state: {tweets[]}
  mutations:{}
  actions:{}
  getters
}
*/