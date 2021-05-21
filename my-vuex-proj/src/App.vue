<template>
  <div>
   <!-- <ProductComp></ProductComp>-->
   <CityComponent></CityComponent>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import ProductComp from './components/Product.vue'
import CityComponent from './components/city.vue'
export default {
  name: 'App',
  components: {
   //HelloWorld
   //ProductComp
   CityComponent
  }
}
</script>

<style>
  div{
    margin-left: 200px;
  }
</style>
