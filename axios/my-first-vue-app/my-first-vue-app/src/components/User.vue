<template>
    <div>
        <p v-if="loading">
            still loading users
        </p>
        <table border="1" align="center" v-if="!loading && data && data.length">
            <thead>User Details</thead>
            <tr v-for="(user,index) of data" :key="index">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
            </tr>
        </table>
        <p v-if="error">
            Unable to load data
        </p>
    </div>
</template>
<script>
import {ref,onMounted} from 'vue'
import axios from 'axios'
export default {
    name: 'Users',
    setup()
    {
        //declaring reactive data
        const data = ref(null);
        const loading = ref(true);
        const error = ref(null);

        //write a function to fetch data from API
        function fetchUsers()
        {
            loading.value = true;
            return axios.get("https://jsonplaceholder.typicode.com/users")
                    .then((response)=>{
                        data.value = response.data //assigning response to data
                    }).then(()=>{
                        loading.value = false
                    })
        }
        onMounted(()=>{
            fetchUsers();
        })
        return {
            data,loading,error
        }
    }
}
</script>
<style>

</style>

