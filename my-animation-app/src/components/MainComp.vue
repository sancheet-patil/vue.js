<template>
    <div>
        <button @click="triggerMyComp">Toggle</button>
        <transition name="myTrans">
            <my-comp v-if="showMyComp"></my-comp>
        </transition>
    </div>
</template>
<script>
import MyComp from './MyComp.vue'
//import { ref } from 'vue'
export default {
    name: 'MainComp',
    components:{
        MyComp
    },
    data(){
       return { showMyComp : false}},
    methods:{
            triggerMyComp() {
            this.showMyComp = true;
           setTimeout(()=>this.showMyComp=false,5000)

        }
       }
    
}
</script>
<style>
    .myTrans-enter-from {
        opacity : 0;
        transform: translateY(-60px);
    }
    .myTrans-enter-To {
        opacity: 1;
        transform: translateY(0px)
    }
   /*.myTrans-enter-active{
        transition: opacity 0.3s ease;
    }
    .myTrans-leave-active{
         transition: opacity 0.3s ease;
    }*/
    .myTrans-enter-active{
        animation: wabble 0.5s ease;
    }
    .myTrans-leave-active{
         animation: wabble 0.5s ease;
    }
    .myTrans-leave-from{
         opacity: 1;
        transform: translateY(0px)
    }
    .myTrans-leave-to {
        opacity : 0;
        transform: translateY(-60px);
    }
    @keyframes wabble {
        0%{opacity:0;transform:translateX(-60px)}
        50%{opacity:1;transform: translateX(0px)}
        60%{transform: translateX(8px)}
        70%{transform: translateX(-8px)}
        80%{transform: translateX(4px)}
        90%{transform: translateX(-4px)}
        100%{transform: translateX(0)}
    }
</style>

