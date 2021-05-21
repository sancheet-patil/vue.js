<template>
    <div id="mycmp">
        <h1>{{inputVal}}</h1>
        <input type="text" placeholder="Hello From MyComp" @keypress.enter="inputVal=$event.target.value"/>
    </div>
</template>
<script>
export default {
    name: 'MyComp',
    data(){
        return {
            inputVal:''
        }
    }
}
</script>
<style>
    #mycmp{
        font-size: 20px;
        color: green;
    }
</style>

