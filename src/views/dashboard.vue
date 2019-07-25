<template>
  <div class="dashboard">
    <div class="card bg-light text-dark">
      <div class="card-footer bg-success">
        <p><span class="font-x-large font-weight-light badge-pill badge-danger border border-dark float-right">{{todayFormatted}}</span></p>
      </div>
    </div>
    <div class="card-deck mt-3">
      <!-- Today's card -->
      <div class="card border-info text-white text-monospace">
        <div class="card-body bg-info">
          <h3 class="card-title">Total Expense Today:</h3>
          <h1><span class="badge badge-warning text-white">Rs.{{thisYearOverview.thisday.total}}</span></h1>
          <!--<p>Highest expense on: <span class="badge badge-pill badge-danger">Food</span><br>
             Least expense on: <span class="badge badge-pill badge-success">Clothing</span>
          </p>-->
          <ul>
            <li v-for="(val,key) of thisYearOverview.thisday.expenseDetail">
              <span>{{key}}</span> : <span>{{val}}</span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <router-link to="/daily" class="btn btn-outline-secondary btn-block">
            Go to Daily Overview
            <span class="fa fa-walking"></span>
          </router-link>
        </div>
      </div>
      <!-- Monthly card -->
      <div class="card border-info text-white text-monospace">
        <div class="card-body bg-info">
          <h3 class="card-title">Total Expense This Month:</h3>
          <h1><span class="badge badge-warning text-white">Rs.{{thisYearOverview.thismonth.total}}</span></h1>
          <ul>
            <li v-for="(val,key) of thisYearOverview.thismonth.expenseDetail">
              <span>{{key}}</span> : <span>{{val}}</span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <router-link to="/monthly" class="btn btn-outline-secondary btn-block">
            Go to Monthly Overview
            <span class="fa fa-walking"></span>  
          </router-link>
        </div>
      </div>
      <!-- YTD card -->
      <div class="card border-info text-white text-monospace">
        <div class="card-body bg-info">
          <h3 class="card-title">Total Expense YTD:</h3>
          <h1><span class="badge badge-warning text-white">Rs.{{thisYearOverview.thisyear.total}}</span></h1>
          <ul>
            <li v-for="(val,key) of thisYearOverview.thisyear.expenseDetail">
              <span>{{key}}</span> : <span>{{val}}</span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <router-link to="/yearly" class="btn btn-outline-secondary btn-block">
            Go to Yearly Overview 
            <span class="fa fa-walking"></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import daily from "@/views/daily.vue";
import etmixin from '@/mixins/etmixin'

export default {
  name: "dashboard",
  mixins: [etmixin],
  data(){
    return {}
  },
  beforeCreate(){
    console.log("dashboard_beforeCreate")
  },
  computed: {
      thisYearOverview(){
          let ov = this.$store.getters.getThisYearOverview; 
          return ov;
      },
      todayFormatted(){
        return this.dateDetails(new Date())
      }
  }
};
</script>
