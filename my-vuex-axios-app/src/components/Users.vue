
<template>
    <div>
        <ul>
            <li v-for="user in usersList" :key="user.id">
                <p>{{user.name}}</p>
                <p>{{user.email}}</p>
                <p><button @click="deleteUser(user.id)">DeleteUser</button></p>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'


export default {
    name :"Users",
    methods : {
        ...mapActions(["fetchUsers","deleteUser"])
    },
    computed: mapGetters(["usersList"]),
    created(){
        this.fetchUsers()
    }    
}
</script>
