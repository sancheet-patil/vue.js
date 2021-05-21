<template>
    <div>
        <h1> {{citylist}} </h1>
        <input type="text" defaultValue="Enter new city" id="t1"/>
        <br>
        <button @click="addCity">Add New City</button>
    </div>
</template>
<script>
import { useStore } from 'vuex' //this is to access the configured store
import { computed } from 'vue' //getting updated state always using computed

export default {
    name: 'CityComponent',
    setup() {
        const store = useStore()
        const citylist = computed(()=>store.state.cities)

        function addCity()
        {
            const val = document.getElementById("t1").value
            //to update store with new state
            store.commit('updateCities',val)
        }
        return{ 
            citylist,
            addCity
        }
    }  
}
</script>
