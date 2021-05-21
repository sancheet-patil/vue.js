<template>
  <div>
  <button @click="showP=!showP">Toggle</button>
  <transition name="fadeP">
  <p v-if="showP" id="p1">
    Hello!!</p>
  </transition>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
      return {
        showP: true
      }
    }
}
</script>

<style>
  
  .fadeP-enter-from{
    opacity: 0;
  }
  .fadeP-enter-to{
    opacity: 1;
    color:purple;
  }
  .fadeP-enter-active,.fadeP-leave-active{
   transition:opacity 2s ease-in
  }
  .fadeP-leave-from{
    opacity: 1;
  }
  .fadeP-leave-to{
    opacity: 0;
  }
</style>
