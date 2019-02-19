<template>
  <div id="app">
    <div id="nav" v-if="authenticated">
      <navbar @logmeout="logout()"></navbar>
      <div class="mt-5"></div>
      <button class="btn btn-primary" @click="testAuthenticated">Test Auth</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/navbar.vue'

export default {
  name: 'app',
  components: {
    'navbar': Navbar
  },
  data () {
    return {
      authenticated: false,
      preurl: "https://wsa.pfconcept.com/test/v01/rest/PFRestService/",
      mockAccount: {
        username: "1028521",
        password: "pftest123"
      }
    }
  },
  mounted(){
    this.authenticated = this.$session.exists();
  },
  beforeCreate(){
    console.log("App.beforecreate","session:",this.$session.exists(),"authenitcated:",this.authenticated)
    this.authenticated = this.$session.exists();
    if(!this.authenticated){
      console.log("App.Not authenticated::beforeCreate")
      this.$router.push("/login")
    }else{
      console.log(this.$session.getAll())
      Vue.http.headers.common.Authorization = this.$session.get("authorization")
    }
  },
  methods: {
    testAuthenticated(){
      var	webaccount = '1028521',
		requestURL = this.preurl + "PriceAndStock?get_price_and_stock_req=",
		requestjson = {"price_and_stock_req":[]},
		requestparam = {
			"request_id": "12345",
			"version": "1",
			"website": "pfc",
			"material_nr": '10000205',
			"qty": "1",
			"unit": "",
			"customer_number": webaccount,
			"sales_organization": "",
			"distribution_channel": "",
			"division": "",
			"call_stock": true,
			"call_price": true,
			"call_deco_price": true,
			"get_addons": true
		};
	requestjson["price_and_stock_req"].push(requestparam);
	//console.log(JSON.stringify(requestjson,0,3));
  var url = encodeURI(requestURL + JSON.stringify(requestjson));
  
      this.$http.get(url,{})
        .then( (data) => {
          console.log('TestAuth:', data)
        }, (err) => {
          console.log(err)
        })
    },
    logout(){
      //this.authenticated = false;
      console.log("session exists:", this.$session.exists())
      this.authenticated = false;
      this.$session.destroy();
      this.$router.push("/login")
    }
  },
  computed: {
    
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*#navs {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
*/
#nav a.router-link-exact-active {
  background: #5887EC;
  border-radius: 5px;
}
</style>
