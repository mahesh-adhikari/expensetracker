<template>
    <div class="container-fluid">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-3 col-xs-2"></div>
			<div class="col-lg-4 col-md-5 col-sm-6 col-xs-8">
				<div class="jumbotron" style="margin-top:70px;border:1px solid #4682b4;max-width:415px;min-width:315px;">	
					<h2 style="font-family:monospace;" class="text-info font-weight-bold">
						EXPENSE TRACKER
					</h2>
					<label for="username" class="font-weight-bold text-dark">
						Username
					</label>
					<span v-show="loginerror" class="text-danger" style="float:right">
						<b>Login Error!! </b>
					</span>
					<input type="text" class="form-control" v-model="input.username" id="username" autofocus required>
					<br>
					<label for="password" class="font-weight-bold text-dark">
						Password
					</label>
					<input type="password" class="form-control" v-model="input.password" id="password" required>
					<br>
					<button class="form-control btn btn-primary font-bold" v-on:click="login()">Login</button>
          <hr>
          <p class="text-warning">Don't have an account? You can create from <router-link to="/signup">here</router-link></p>
				</div>
			</div>
			<div class="col-lg-4 col-md-3 col-sm-3 col-xs-2"></div>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";

export default {
  data() {
    return {
      loginerror: false,
      input: {
        username: "",
        password: ""
      }
    };
  },
  beforeCreate() {
    console.log("login beforeCreate");
    if (this.$session.exists()) {
      this.$session.destroy();
      this.$parent.authenticated = false;
    }
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$session.start();
          //console.log(this.$router)
          this.$parent.authenticated = true;
          this.$router.push("/dashboard");
          this.loginerror = false;
        } else {
          console.log("The username and/or password is incorrect");
          this.loginerror = true;
        }
      } else {
        console.log("A username and password must be present");
        this.loginerror = true;
      }
    }
  }
};
</script>
