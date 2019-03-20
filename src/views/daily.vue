<template>
  <div>    
    <TopHeader type="daily" @changed="dateChanged"/>
    <table class="table table-striped">
      <thead>
        <th>Title</th>
        <th>Expense</th>
        <th>Category</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="daily in dailyentries" :id="daily.id">
          <td><input type="text" class="bg-transparent border-0" readonly="readonly" v-model="daily.title"></td>
          <td>{{daily.expense}}</td>
          <td>{{daily.category}}</td>
          <td>
            <button class="btn btn-outline-primary mr-2">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-outline-danger">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
        <tr class="font-weight-bold text-white bg-secondary">
          <td>Total</td>
          <td>{{total}}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<!--<script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>-->
<script>
//import firebase from 'firebase';
import header   from '@/components/header'
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
  data(){
    return {
      total : 0,
      current: new Date()
    }
  },
  computed: {
    dailyentries(){
      let dailyentries = this.$store.getters.daily;
      dailyentries.forEach(daily => {
        //this.total = this.total + daily.expense;
      });
      return dailyentries;
    }
  },
  methods: {
    dateChanged(newdate){      
      console.log("new date:", newdate)
      this.current = new Date(newdate);
      this.total = this.current.getDate();
    }
  }
};
</script>

<style>
</style>
