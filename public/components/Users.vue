<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    <div>
      <div><router-link :to="{name:'userAdd'}">Add</router-link></div>
      <div v-for="user in userList" class="lcontainer">
        <div class="fleft lname">
          <router-link :to="{name:'userDetail', params:{id:user.id}}">{{user.name}}</router-link>              
        </div>
        <div class="fleft laction">
          <button @click="$router.push({name:'userEdit', params:{id:user.id}})">Edit</button> 
          <button @click="deleteUser(user.id)">Delete</button>          
        </div>
        <div class="freset"></div>
      </div>
    </div>
  </div>
</template>

<script>
import UserDeleteMixin from './mixins/UserDeleteMixin'

export default {
  name: 'Home',
  mixins:[UserDeleteMixin],
  mounted () {
    this.fetchUsersData()
  },
  data () {
    return {
      msg: 'This is users component!'
    }
  },
  computed : {
    userList () {
      return this.$store.state.users.userList
    }
  },
  methods : {
    fetchUsersData(){
      this.$store.commit('setDelStatus',0)
      this.$store.dispatch('fetchUserList')
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
.list {
  text-align: initial;
}

.fleft {
  float: left;
}

.freset {
  clear: both;
}
.lcontainer {
  background-color: #ffeedd;
  padding: 10px;
  margin-bottom: 10px;
}
.lname {
  width :50%;
}
.laction {
  width :50%;
}
</style>