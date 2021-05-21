<template>
  <div>
  
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--<MainComp></MainComp>-->
  <list-component></list-component>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import MainComp from './components/MainComp.vue'
import ListComponent from './components/List.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
    //MainComp,
    ListComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
