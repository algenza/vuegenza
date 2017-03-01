import axios from 'axios'

const state = {
	userList : [],
	userDetail : {},
	savedID: -1
}

const mutations = {
	setUserList (state, list) {
		state.userList = list
	},
	setUserDetail (state, data) {
		state.userDetail = data
	},
	setSavedID (state, data) {
		state.savedID = data
	}
}

const actions = {
	fetchUserList (context) {
		axios.get("http://localhost:1000/users",
		{
			headers: {'Content-Type': 'application/json'}
		})
		.then(function (response) {
			context.commit('setUserList',response.data)
		})
		.catch(function (error) {
			console.log(error);
		});
	},
	fetchUser (context,id) {
		axios.get("http://localhost:1000/users/"+id,
		{
			headers: {'Content-Type': 'application/json'}
		})
		.then(function (response) {
			context.commit('setUserDetail',response.data)
		})
		.catch(function (error) {
			console.log(error);
			return {};
		});
	},
	addUser (context, userData) {
		axios.post("http://localhost:1000/users",					
		userData,
		{
			headers: {'Content-Type': 'application/json'}
		})
		.then(function (response) {
			if(response.data.hasOwnProperty('id')){
				context.commit('setSavedID',response.data.id)				
			}
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else {
				console.log('Error', error.message);
			}
			console.log(error.config);
			console.log(error.response);
		});		
	},
	updateUser (context, userData) {
		axios.put("http://localhost:1000/users/"+userData.id,					
		userData,
		{
			headers: {'Content-Type': 'application/json'}
		})
		.then(function (response) {
			if(response.data.hasOwnProperty('id')){
				context.commit('setSavedID',response.data.id)				
			}
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else {
				console.log('Error', error.message);
			}
			console.log(error.config);
		});		
	}
}

export default ({
	state,
	mutations,
	actions
})