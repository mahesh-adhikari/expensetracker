<template>
  <div class="dashboard">
    <div class="card bg-light text-dark">
      <div class="card-body">
        <h5 class="text-primary float-right">25 March, 2019 <span class="small">Monday</span></h5>
      </div>
    </div>
    <div class="card-deck mt-3">
      <!-- Today's card -->
      <div class="card text-white text-monospace">
        <div class="card-body bg-info">
          <h3 class="card-title">Total Expense Today:</h3>
          <h1><span class="badge badge-warning text-white">Rs.250</span></h1>
          <p>Highest expense on: <span class="badge badge-pill badge-danger">Food</span><br>
             Least expense on: <span class="badge badge-pill badge-success">Clothing</span></p>
        </div>
        <div class="card-footer">
          <router-link to="/daily">Go to Daily Overview</router-link>
        </div>
      </div>
      <!-- Monthly card -->
      <div class="card text-white text-monospace">
        <div class="card-body bg-info">
          <h3 class="card-title">Total Expense This Month:</h3>
          <h1><span class="badge badge-warning text-white">Rs.3350</span></h1>
          <p>Highest expense on: <span class="badge badge-pill badge-danger">Food</span><br>
            Least expense on: <span class="badge badge-pill badge-success">Clothing</span></p>
        </div>
        <div class="card-footer">
          <router-link to="/monthly">Go to Monthly Overview</router-link>
        </div>
      </div>
      <!-- YTD card -->
      <div class="card text-white text-monospace">
        <div class="card-body bg-info">
          <h3 class="card-title">Total Expense YTD:</h3>
          <h1><span class="badge badge-warning text-white">Rs.45250</span></h1>
          <p>Highest expense on: <span class="badge badge-pill badge-danger">Food</span><br>
            Least expense on: <span class="badge badge-pill badge-success">Clothing</span></p>
        </div>
        <div class="card-footer">
          <router-link to="/yearly">Go to Yearly Overview</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import daily from "@/views/daily.vue";

export default {
  name: "dashboard",
  components: {},
  methods: {}
};
</script>
