<template>
    <div class="row">
        <div class="col-md-3 col-sm-2"></div>
        <div class="col-md-6 col-sm-8">
            <div class="card mt-2">
                <div class="card-header">
                    <p class="text-primary font-weight-bold text-center lead">Let's create a new account !</p>
                </div>
                <div class="card-body"> 
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                        </div>
                        <input class="form-controld" :class="[{'border-danger': hasError}, 'form-control']" placeholder="abcd@xyz.com" v-model="email">
                    </div>           
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Password</span>
                        </div>
                        <input class="form-control" placeholder="secret" v-model="password" type="password"> 
                    </div>
                    
                    <button class="btn btn-primary" @click="signUp">Sign Up</button> <br>
                    <p v-if="showMessage" v-bind:class="{'text-danger': hasError, 'text-success': isSuccess}">{{message}}</p>            
                </div>
                <div class="card-footer">
                <router-link to="/login" class="btn btn-outline-info">
                    <span class="fas fa-backward"></span>
                    Go back to login
                </router-link>  
                </div> 
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
    
</template>

<script>
import firebase from "firebase";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      showMessage: false,
      hasError: false,
      isSuccess: false
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            //this.message = "Your account has been created, you can login now from login section!";
            //this.showMessage = true;
            //alert(user.user.email);
            console.log(JSON.stringify(user, 0, 3));
            this.showMessage = true;
            this.hasError = false;
            this.isSuccess = true;
            this.message = user.user.refreshToken;
          },
          err => {
            //this.message = "Oops. " + err.message;
            //this.showMessage = true;
            // alert(err.message);
            this.showMessage = true;
            this.hasError = true;
            this.isSuccess = false;
            this.message = "Error: " + err.message;
          }
        );
    }
  }
};
</script>

<style>
</style>
