<template>
  <div>
    <h2>Product Details</h2>
    <table border="1">
        <tr>
            <th>ProdId</th>
            <th>ProdName</th>
            <th>ProdPrice</th>
        </tr>
        <tr v-for="(prod,index) in products" :key="index">
            <td>{{prod.id}}</td>
            <td>{{prod.name}}</td>
            <td>{{prod.price}}</td>
        </tr>
    </table>
    <br/>
    <br/>
    <form @submit.prevent="addProduct(product)">
        <label for="pid">Enter product id</label>
        <input type="number" name="pid" v-model="product.id"/>
        <br/>
        <label for="pname">Enter product name</label>
        <input type="text" name="pname" v-model="product.name"/>
        <br/>
        <label for="price">Enter product price</label>
        <input type="number" name="price" v-model="product.price"/>
        <br/>
        <button type="submit">Add Product</button>
        <button type="reset">Reset</button>
    </form>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default
{
  name: 'ProductComp',
  setup () {
    /*let product = {
        id:0,
        pname:'',
        price:0
    }*/
    const store = useStore()
    const products = computed(() => store.state.products)   
        function addProduct (product) {
        alert('call to addProduct')
        store.commit('addProduct', product)
    }
    return { product, addProduct, products }
  }
}
</script>
