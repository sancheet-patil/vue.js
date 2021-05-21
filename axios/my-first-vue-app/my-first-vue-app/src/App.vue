<template>
 <div>
   <!--<HelloWorld></HelloWorld>-->
   <!--<Users></Users>-->
   <Product></Product>
 </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
//import Users from './components/User.vue'
import Product from './components/Product.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Users
    Product
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
