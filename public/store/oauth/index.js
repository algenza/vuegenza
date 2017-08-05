import axios from 'axios'
import QueryStringer from '../../utils/QueryStringer'

const baseuri = 'http://localhost:85/oauth2-implementor/public'

const state = {
	credential : {
		client_id: 'test',
		client_secret: 'test',
		grant_type: 'client_credentials',
		scope: 'ihinvoice'
	},
	tokenData : null,
	resourceData : null
}

const mutations = {
	setTokenData (state, data) {
		state.tokenData = data
	},
	setResourceData (state, data) {
		state.resourceData = data
	}
}

const actions = {
	authenticate (context) {
		return new Promise((resolve, reject) => {
		axios.get(baseuri + '/oauth' + QueryStringer(context.state.credential),
			{
			headers: {'Content-Type': 'application/json', 'X-Haryono-Request': 'bmmr'}
			})
		.then(function (response) {
			console.log(response.data)
			context.commit('setTokenData', response.data)
			resolve(response)
		})
		.catch(function (error) {
			console.log(error)
			reject(error)
		})
		})
	},
	getResource (context) {
		return new Promise((resolve, reject) => {
		axios.get(baseuri + '/ihinvoice',
			{
			headers: {'Content-Type': 'application/json', 'Test': 'Test', 'Authorization': context.state.tokenData.token_type + ' '+context.state.tokenData.access_token}
			})
		.then(function (response) {
			console.log(response)
			context.commit('setResourceData', response.data)
			resolve(response)
		})
		.catch(function (error) {
			console.log(error)
			reject(error)
		})
		})
	}
}

export default ({
	state,
	mutations,
	actions
})