import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import oauth from './oauth'

Vue.use(Vuex)

export default new Vuex.Store({
	modules : {
		users: users,
		oauth: oauth
	}
})