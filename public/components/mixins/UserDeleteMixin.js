export default {
	computed : {
		deleteStatus () {
			return this.$store.state.users.deleteStatus
		}
	},
	watch: {
		deleteStatus (val) {
	      console.log(val)
			if(val>0){
				console.log(this.$route.name)
				if(this.$route.name == 'userList'){
	      console.log('masuk1')
					this.fetchUsersData()
				}else{
	      console.log('masuk2')
					this.$router.push({ name: 'userList'})
				}
			}
		}
	},
	methods : {
		deleteUser (id) {
			this.$store.dispatch('deleteUser',id)
		}
	}
}