<template>
  <div id="myapp">
    <div id="nav" v-if="$session.exists()||authenticated">
      <navbar @logmeout="logout()"></navbar>
    </div>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import Vue from "vue";
import Navbar from "@/components/navbar.vue";
import { mapState } from 'vuex';

export default {
  name: "app",
  components: {
    navbar: Navbar
  },
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "Mahesh",
        password: "letmein"
      }
    };
  },
  created() {
    //console.log("App.beforecreate", "session:", this.$session.exists());
    this.authenticated = this.$session.exists();
    if (!this.authenticated) {
      
      this.$router.push("/login");
    } else {
      console.log(this.$session.getAll());  
      if(this.fetched_fb_data == false){
        this.$store.dispatch(
              "fetchFirestoreData",
              this.$session.get("authUserData") //.user.uid
            );
      }    
    }
  },
  methods: {
    logout() {
      this.authenticated = false;
      this.$session.destroy();
      this.$router.push("/login");
    }
  },
  computed: mapState(['fetched_fb_data'])
};
</script>

<style>
.bg-darkslategray {
  background: darkslategray !important;
}
@import "./assets/css/fa-all.css";
</style>
