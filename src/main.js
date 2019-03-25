import Vue from "vue";
//import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
//import VueResource from "vue-resource";
import VueSession from "vue-session";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
//Vue.use(VueResource);
//Vue.use(axios);
Vue.use(VueSession, false);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD9EhjfrwCgT7nO0RtpxB3DnC3cul9s4m8",
  authDomain: "aarambha-abc.firebaseapp.com",
  databaseURL: "https://aarambha-abc.firebaseio.com",
  projectId: "aarambha-abc",
  storageBucket: "aarambha-abc.appspot.com",
  messagingSenderId: "108719500181"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
