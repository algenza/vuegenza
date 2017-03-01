<template>
  <div id="app">
    <h1>Test App</h1>
    <p>
      <router-link :to="{name:'home'}">Home</router-link>
      <router-link :to="{name:'userList'}">Users</router-link>
      <router-link :to="{name:'companyList'}">Companies</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
}
</style>
