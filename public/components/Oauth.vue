<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="authenticate()">authenticate</button>
    <div v-if="tokenData" style="text-align: left;word-wrap: break-word">
      <pre>{{tokenData}}</pre>

      <button @click="getResource()">Request Resource</button>
      
    </div>
    <div v-if="tokenData" style="text-align: left;word-wrap: break-word">
      <pre>{{resourceData}}</pre>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Oauth',
  data () {
    return {
      msg: 'This is oauth component!'
    }
  },
  computed: {
    tokenData () {
      return this.$store.state.oauth.tokenData;
    },
    resourceData () {
      return this.$store.state.oauth.resourceData;      
    }
  },
  methods: {
    authenticate () {
      this.$store.dispatch('authenticate').then(response => {
        console.log('success get token')
      }, error => {
        console.log(error)
      })
    },
    getResource () {
      this.$store.dispatch('getResource').then(response => {
        console.log('success get resource')
      }, error => {
        console.log(error)
      })      
    }
  },
  filters: {
    pretty (value) {
      return JSON.stringify(JSON.parse(value), null, 2);
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