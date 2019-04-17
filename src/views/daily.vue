<template>
  <div>    
    <TopHeader type="daily" />
    <div class="lower">
      <div class="total-section pr-3 text-right">
        <h3 class="text-info">Total: <span class="badge badge-secondary">{{total}} </span>
          <button class="btn btn-primary ml-2" @click="$router.replace('/newdaily')">
            <span class="fa fa-plus"></span>
             Add New
          </button>
        </h3>
      </div>
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Expense</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody> 
          <tr v-for="daily in dailyentries" :key="daily.id">
            <td><input type="text" class="bg-transparent border-0" readonly="readonly" v-model="daily.title"></td>
            <td>{{daily.expense}}</td>
            <td>{{daily.category}}</td>
            <td>
              <button class="btn btn-outline-primary mr-2">
                <i class="fas fa-edit"></i>
              </button>
              <b-button variant="outline-danger" v-b-modal="'questionModal'" @click="selected(daily.id)">
                <i class="fas fa-trash"></i>
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Modal Component -->
      <b-modal
        id="questionModal"
        ref="modal"
        title="Delete Entry!!"
        @ok="deleteOk"
      >
        Are you sure you want to delete this record?
      </b-modal>
    </div>
  </div>
</template>


<!--<script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>-->
<script>
//import firebase from 'firebase';
import header  from '@/components/header';
import etmixin from "@/mixins/etmixin";
/*var config = {
  apiKey: "AIzaSyD9EhjfrwCgT7nO0RtpxB3DnC3cul9s4m8",
  authDomain: "aarambha-abc.firebaseapp.com",
  databaseURL: "https://aarambha-abc.firebaseio.com",
  projectId: "aarambha-abc",
  storageBucket: "aarambha-abc.appspot.com",
  messagingSenderId: "108719500181"
};
firebase.initializeApp(config);
*/
export default {
  name: "Daily",
  components: {
    TopHeader : header
  },
  mixins: [etmixin],
  data(){
    return {
      total : 0,
      current: new Date(),
      currentISO: "",
      selectedRow: 0
    }
  },
  computed: {
    dailyentries(){
      let dailyentries = this.$store.getters.getDaily;
      dailyentries.forEach(daily => {
        this.total = this.total + daily.expense;
      });
      return dailyentries;
    }
  },
  methods: {
    selected(key){
      this.selectedRow = key;
    },
    deleteOk(){
      console.log(this.selectedRow + " will be deleted")
    }
  }
};
</script>

<style>
</style>
