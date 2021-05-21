<template>
     <div>
        <p v-if="loading">
            still loading products
        </p>
        <table border="1" align="center" v-if="!loading && data && data.length">
            <thead>Product Details</thead>
            <tr v-for="(product,index) of data" :key="index">
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.status}}</td>
            </tr>
        </table>
        <button>Add Product</button>
        <p v-if="error">
            Unable to load data
        </p>
    </div>
</template>
<script>
import {ref,onMounted} from 'vue'
import axios from 'axios'
export default {
    name: 'Product',
    setup()
    {
        //declaring reactive data
        const data = ref(null);
        const loading = ref(true);
        const error = ref(null);

        //write a function to fetch data from API
        function fetchProducts()
        {
            loading.value = true;
            return axios.get("http://localhost:8000/products")
                    .then((response)=>{
                        data.value = response.data //assigning response to data
                    }).then(()=>{
                        loading.value = false
                    })
        }
        onMounted(()=>{
            fetchProducts();
        })
        return {
            data,loading,error
        }
    }
}
</script>
<style>
</style>