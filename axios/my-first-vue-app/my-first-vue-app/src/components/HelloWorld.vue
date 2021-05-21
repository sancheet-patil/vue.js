<template>
  <div class="hello">
   <span v-once> {{message}} </span>
  </div>
</template>

<script>
export default {
  name : 'HelloWorld',
  data(){
    return {
      message : "My Second Component"
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hello{
    color: red;
    font-size: 30px;
  }
</style>
