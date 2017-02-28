import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Companies from '../components/Companies'
import Users from '../components/Users'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/users',
		component: Users
	},
	{
		path: '/companies',
		component: Companies
	}
	]
})
