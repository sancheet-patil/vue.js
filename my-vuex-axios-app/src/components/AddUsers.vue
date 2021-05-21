<template>
    <form @submit.prevent="onUserSubmit">
        <input type="text" placeholder="enter name" v-model="name"/>
        <br>
        <input type="text" placeholder="enter email" v-model="email"/>
        <br>
        <button type="submit">Add</button>
    </form>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'AddUser',
    data(){
        return {
            name:'',
            email:''
        }
    },
    methods:{
        ...mapActions(["addUsers"]),
        onUserSubmit(){
            this.addUsers({
                name : this.name,
                email : this.email
            })
        }
    }    
}
</script>
