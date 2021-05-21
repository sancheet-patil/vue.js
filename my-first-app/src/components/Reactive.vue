<template>
<div>
    {{message}}
</div>
</template>
<script>
import {ref} from vue;
export default{
 name:'ReactiveComp',

 setup()
 {
     let message=ref('Hello');
     setTimeout(() => {
         message :'Reactive',
         alert('Alerting!!!!!'+ message)
     },4000);

     return {message};
 }
}
</script>
<style>

</style>