<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/mycomp">MyComp</router-link>|
    <router-link to="/emp">Get All Employee</router-link>
  </div>
  <router-view/>
  <city-list></city-list>
  <add-user></add-user>
  <users></users>
</div>
</template>

<script>
  import CityList from './components/CityList.vue';
  import Users from './components/Users.vue';
  import AddUser from './components/AddUsers.vue';
  export default {
      name: 'App',
      components: {
          CityList,
          AddUser,
          Users
      }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
