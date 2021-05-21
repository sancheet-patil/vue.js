<template>
    <div>
        <h2>{{myList}}</h2>
        <input type="text" placeholder="Enter new city" id="t1"/>
        <br>
        <button @click="updateCityList">Add new city</button>
    </div>
</template>

<script>
/*To grab always the updated state from the store you should write a computed
property to grab the state in your component*/
import {useStore} from 'vuex';
import {computed} from 'vue';

export default {
    setup(){
        //to get the vuex store
        const store = useStore();
        const myList = computed(()=>store.state.list);
        function updateCityList()
        {
            const newCity = document.getElementById("t1").value;
            //to update state in store use commit
            store.commit('updateList',newCity);
        }
        return {store,myList,updateCityList}
    }    
}
</script>
