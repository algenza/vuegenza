<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    <div>
      <div><router-link :to="{name:'userList'}">List</router-link>&nbsp;<router-link :to="{name:'userEdit',params:{id:id}}">Edit</router-link></div>
      <div class="lcontainer">
        <div class="lname">
          {{user.name}}<br/>
          {{user.email}}<br/>
          <ul>
            <li v-for="phone in user.phone">{{phone}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted () {
    this.fetchUserData()
  },
  props : ['id'],
  data () {
    return {
      msg: 'This is user detail component!'
    }
  },
  computed : {
    user () {
      return this.$store.state.users.userDetail
    }
  },
  methods : {
    fetchUserData(){
      this.$store.dispatch('fetchUser',this.id)
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

</style>