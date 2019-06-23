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
import Vue from "vue";
import Navbar from "@/components/navbar.vue";

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
  mounted() {
    //this.authenticated = this.$session.exists();
  },
  beforeCreate() {
    console.log(
      "App.beforecreate",
      "session:",
      this.$session.exists()
    );
    this.authenticated = this.$session.exists();
    if (!this.authenticated) {
      console.log("App.Not authenticated::beforeCreate");
      this.$router.push("/login");
    } else {
      console.log(this.$session.getAll());
      //Vue.http.headers.common.Authorization = this.$session.get("authorization")
    }
  },
  methods: {
    logout() {
      //this.authenticated = false;
      //console.log("session exists:", this.$session.exists());
      this.authenticated = false;
      this.$session.destroy();
      this.$router.push("/login");
    }
  },
  computed: {}
};
</script>

<style>
  @import './assets/css/fa-all.css';
</style>
