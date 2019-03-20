import Vue from "vue";
//import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
//import VueResource from "vue-resource";
import VueSession from "vue-session";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
//Vue.use(VueResource);
//Vue.use(axios);
Vue.use(VueSession, false);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
