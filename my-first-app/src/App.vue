<template>
  <div>
    <reactive></reactive>
  <!--<div id="div1">{{message}}</div>
  Enter new message::<input id="input" type="text" v-bind:value="message" ref="t1"/>
  <br>
  <button v-on:click="modifyMessage(),modifyUrl()">UpdateMessage</button>
  <br>
  <img :src="url"/>
  <div v-html="rawData">
     </div>
  Enter Name: <input type="text" placeholder="Enter Name" @change="display($event.target.value)"/>
  <br>
  Enter Info: <input type="text" @keyup.enter="getInfo($event.target.value)"/>
  <br>
  <button @click="getMessage('Hello')">getMessage</button>

  <div v-bind:style="{color:'red',fontStyle:'Italic',fontSize:'20px'}">
    Inline style in Vue3</div>
  <div :style="{color:colorVar, fontStyle:myFontStyle, fontSize:myFontSize}">
    Applying Dynamic style in Vue3
  </div>
  <div :style="styleObject">
    Dynamic Styling using Object syntax
  </div>
  <div :class="{active:isActive, 'text-danger':hasError}" @click="updateToggle">Applying classes dynamically</div>
  <br>
  <div :class="classObject">Using Object syntax toggling classes</div>
  <div :class="[isActiveClass,isTextDanger]">Array Syntax toggling classes</div>
  <div v-once>{{myinfo}}</div>-->
  <hello-world></hello-world>
  <div v-if="number==10">
      Number is 10
  </div>
  <div v-else-if="number>=100">
    Number is less than 100
  </div>
  <div v-else>
    Number is not equal 10
  </div>
  <div v-show="number!=110">
    Using v-show
  </div>
  <h1>Using V-for</h1>
  <div v-for="(ele,index) in numbers" :key="index">
    &nbsp;&nbsp;{{index}}::{{ele}}
  </div>
  </div> 
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Reactive from './components/Reactive.vue';
export default {
    name: 'App',
    components: {
      HelloWorld,
      Reactive
    },
    data(){
      return {
       number : 110,
       numbers : [1,2,3,4,5,6]
      }
    }
    // data(){
    //  return { message : 'Hello From Vue3 App!!',
    //  url:require('./assets/flower.jpg'),
    //  rawData: '<h1><i>My Data</i></h1>',
    //  colorVar:'magenta',
    //  myFontStyle:'Italic',
    //  myFontSize:'30px',
    //  myinfo:'initial data',
    // styleObject: {
    //   color : 'green',
    //   fontSize : '40px',
    //   fontStyle: 'Italic'
    // },
    // isActive:true,
    // hasError:true,
    // classObject:{
    //   active:true,
    //   'text-danger':true
    // },
    // isActiveClass:'active',
    // isTextDanger:'text-danger'
    //  }
    // },
    //  methods:{
    //    modifyMessage()
    //    {
    //       let val = this.$refs.t1.value//document.getElementById("input").value;
    //       this.message = val;
    //    },
    //    modifyUrl()
    //    {
    //       this.url = require("./assets/flower2.jpg"); 
    //    },
    //    display(value){
    //      console.log("name is ",value);
    //    },
    //    getInfo(value)
    //    {
    //      alert("info is "+value);
    //    },
    //    getMessage(value)
    //    {
    //      alert("message is "+value);
    //    },
    //    updateToggle()
    //    {
    //      this.isActive = false;

    //    }
    //  }
    }

</script>

<style>
  #div1{
    color: red;
    font-style: italic;
  }
</style>


