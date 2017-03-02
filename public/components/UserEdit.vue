<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    <div>
      <div><router-link :to="{name:'userList'}">List</router-link></div>
      <div class="lcontainer">
        <div class="lname">
          <div v-for="(value,key) in user">
          <div  v-if="key!='id'">
              {{key}}
              <div v-if="!Array.isArray(value)">
                <input type="text" v-model="user[key]">
              </div>
              <div v-else>
                <button @click="value.push('')">+</button>
                <div v-for="(pvalue,index) in value">
                  <input type="text" v-model="value[index]"><button @click="value.splice(index,1)">-</button>
                </div>            
              </div>
            </div>
          </div>
        </div>
        <button @click="saveData">Save</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted () {
    this.fetchUserData()
    this.$store.commit('setSavedID',-1)
  },
  props:['id'],
  data () {
    return {
      msg: 'This is user edit component!'
    }
  },
  computed : {
    savedID () {
      return this.$store.state.users.savedID
    },
    user () {
      var temp = this.$store.state.users.userDetail;
      return temp;
    }
  },
  watch: {
    savedID (val) {
      console.log(val)
      if(val>0){
        this.$router.push({ name: 'userDetail', params: { id: val }})
      }
    }
  },
  methods : {
    fetchUserData(){
      this.$store.dispatch('fetchUser',this.id)
    },
    saveData () {
      this.$store.dispatch('updateUser', this.user, this.id)
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