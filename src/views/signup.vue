<template>
    <div class="card">
        <div class="card-header">
            <p class="text-danger text-center lead">Let's create a new account !</p>
        </div>
        <div class="card-body">            
            <input class="form-control" placeholder="Email" v-model="email"> <br>
            <input class="form-control" placeholder="Password" v-model="password"> <br>
            <button class="btn btn-primary" @click="signUp">Sign Up</button> <br>
            <p v-if="showMessage">{{message}}</p>            
        </div>
        <div class="card-footer">
          <router-link to="/login" class="text-warning">Go back to login</router-link>  
        </div> 
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: "SignUp",
    data() {
        return {
            email:"",
            password: "",
            message: "",
            showMessage: false
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                function(user){
                    //this.message = "Your account has been created, you can login now from login section!";
                    //this.showMessage = true;
                    alert(user);
                    console.log(user)
                },
                function(err){
                    //this.message = "Oops. " + err.message;
                    //this.showMessage = true;
                    alert(err.message);
                    console.log(err.message)
                }
            )
        }
    }
}
</script>

<style>

</style>
