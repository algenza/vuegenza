<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div v-for="user in userList">{{user.name}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  created () {
    this.fetchUsersData()
  },
  data () {
    return {
      msg: 'This is users component!',
      userList : []
    }
  },
  methods : {
    fetchUsersData(){
      var vm = this;
      axios.get("http://localhost:1000/users",
      {
        headers: {'Content-Type': 'application/json'}
      })
      .then(function (response) {
        vm.userList = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>