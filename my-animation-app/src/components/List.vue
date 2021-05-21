<template>
    <div>
        <input type="text" v-model="newTodo" @keypress.enter="addTodo" placeholder="Enter new Todo"/>
        <br>
        <transition-group tag="ul" name="list">
            <li v-for="todo in todos" :key='todo.id'>
                {{todo.name}}
                <button @click="deleteTodo(todo.id)">Delete Todo</button>
            </li>
        </transition-group>
    </div>    
</template>
<script>
import {ref} from 'vue'
export default {
    name: 'ListComponent',
    setup(){
    const todos = ref([
        {name:'play game',id:1},
        {name: 'do shopping',id:2}
    ])
    const newTodo = ref(" ");
    const addTodo = ()=>{
        if(newTodo.value){
            const id = Math.random()
            todos.value = [{name:newTodo.value,id},...todos.value]
        }
       
    }
    const deleteTodo = (id)=>{
        todos.value = todos.value.filter(todo=>todo.id!=id)
    }
    return {todos,addTodo,deleteTodo,newTodo}
    }
}
</script>
<style>
    .list-enter-from{
        opacity: 0;
        transform: scale(0.6)
    }
    .list-enter-to{
        opacity: 1;
        transform: scale(1);

    }
    .list-enter-active{
        transition: opacity 0.5s ease;
    }
    .list-enter-leave{
         transition: opacity 0.5s ease;
    }
    .list-leave-from{
        opacity: 1;
        transform: scale(1);
    }
    .list-leave-to{
        opacity: 0;
        transform: scale(0.6)
    }
</style>

