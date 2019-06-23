import Vue from "vue";
//import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
//import VueResource from "vue-resource";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
//Vue.use(VueResource);
//Vue.use(axios);
<<<<<<< HEAD
=======
Vue.use(VueSession, false);

// Initialize Firebase
var config = {
};
firebase.initializeApp(config);
>>>>>>> 4775559b5efa5a79f78f349d207bf9342bf5a68d

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
