import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Companies from '../components/Companies'
import Users from '../components/Users'
import UserDetail from '../components/UserDetail'
import UserAdd from '../components/UserAdd'
import UserEdit from '../components/UserEdit'

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
		name: 'userList',
		component: Users
	},
	{
		path: '/users/add',
		name: 'userAdd',
		component: UserAdd
	},
	{
		path: '/users/:id',
		name: 'userDetail',
		component: UserDetail,
		props: true
	},
	{
		path: '/users/:id/edit',
		name: 'userEdit',
		component: UserEdit,
		props: true
	},
	{
		path: '/companies',
		name: 'companyList',
		component: Companies
	}
	]
})
