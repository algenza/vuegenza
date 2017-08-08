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
    <div style="text-align: left;word-wrap: break-word">
      <pre v-html="jsonPretty(areaData)"></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Oauth',
  data () {
    return {
      msg: 'This is oauth component!',
      areaData: [{
        year: '2013',
        a: 30,
        b: 5
      }, {
        year: '2014',
        a: 25,
        b: 15
      }, {
        year: '2015',
        a: 29,
        b: 25
      }, {
        year: '2016',
        a: 50,
        b: 20
      }]
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
    },
    jsonPretty (value) {
      var vm = this
      let json = JSON.stringify(value, null, 2)
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+]?\d+)?)/g, function(match) {
        var cls = 'number'
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key'
          } else {
            cls = 'string'
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean'
        } else if (/null/.test(match)) {
          cls = 'null'
        }
        return '<span class="' + cls + '">' + match + '</span>'
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
  pre {outline: 1px solid #ccc; padding: 5px; margin: 5px; }
  .string { color: green; }
  .number { color: darkorange; }
  .boolean { color: blue; }
  .null { color: magenta; }
  .key { color: red; }
</style>