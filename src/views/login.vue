<template>
    <div class="container-fluid">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-3 col-xs-2"></div>
			<div class="col-lg-4 col-md-5 col-sm-6 col-xs-8">
				<div class="jumbotron" style="margin-top:70px;border:1px solid #4682b4;max-width:415px;min-width:315px;">	
					<h2 class="text-info" style="font-family:monospace;">PF REST SERVICES</h2>
					<label for="username">Webaccount</label>
					<span v-show="loginerror" class="text-danger" style="float:right"><b>Login Error!! </b></span>
					<input type="text" class="form-control" v-model="input.username" id="username" autofocus required>
					<br>
					<label for="password">Password</label>
					<input type="password" class="form-control" v-model="input.password" id="password" required><br>
					<button class="form-control btn btn-primary font-bold" v-on:click="login()">Login</button>
				</div>
			</div>
			<div class="col-lg-4 col-md-3 col-sm-3 col-xs-2"></div>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return{
            loginerror: false,
			input: {
				username: "",
				password: ""
			}
        }
	},
	beforeCreate(){
		console.log("login beforeCreate")
		if(this.$session.exists()){
			this.$session.destroy();
			this.$parent.authenticated = false;
		}
	}
	,
	methods: {
		login(){
			if(this.input.username != "" && this.input.password != ""){
				if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password){
					this.$session.start();
					//console.log(this.$router)
					this.$parent.authenticated = true;
					this.$router.push("/");
					this.loginerror = false;
				} else {
					console.log("The username and/or password is incorrect");
					this.loginerror = true;
				}
				/*var encval =  btoa(this.input.username + ":" + this.input.password);
				this.$http.post('https://wsa.pfconcept.com/test/v01/rest/PFRestService/login','',{ headers: {
						"Content-Type": "application/json",
						"Authorization" : "Basic " + encval
				}}).then( data => {
					console.log("Response", data.status, JSON.stringify(data.body.response,3,3));
					if(data.status == 200 && data.body.response.get_login_rsp.login_rsp[0].status == "success"){
						this.$session.start();
						console.log("Session started:", this.$session.id())
						//Vue.http.headers.common['Authorization'] = 'Basic ' + encval;
						this.$session.set("webaccount", this.input.username);
						this.$session.set("authorization", "Basic " + encval);
						this.loginerror = false;
						this.$parent.authenticated = true;
						//this.$emit("authenticated",true);
						this.$router.push("/");
					}else{
						loginerror = true;
					}						
				}, err => {
					console.log("error occured", err.status, err.statusText);
					this.loginerror = true; 
				})*/
			}else{
				console.log("A username and password must be present");
				this.loginerror = true;
			}
		}
	}
}
</script>
