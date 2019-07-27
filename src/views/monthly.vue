<template>    
    <div id="monthly-overview">
        <TopHeader type="monthly" />

        <div class="row">
            <div class="col-md-2">          
            </div>
            <div class="col-md-8">
                <div class="card text-white bg-darkslategray">
                    <div class="card-header">
                        <h4 class="text-center"><small>Total: </small> <span class="badge badge-success">{{total}}</span></h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-sm table-striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Expense</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="day in month" :key="day.id" title="See details">
                                    <td>{{formattedDay(day.day)}}</td>
                                    <td>{{day.expense}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>            
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import header from "@/components/header";
import etmixin from "@/mixins/etmixin";

export default {
  name: "Monthly",
  components: {
    TopHeader: header
  },
  mixins: [etmixin],
  data() {
    return {
      total: 0,
      currentMonth: 0
    };
  },
  beforeCreate() {
    let d = new Date();
    this.$store.dispatch("setCurrentDay", [
      d.getFullYear(),
      d.getMonth(),
      d.getDate()
    ]);
  },
  methods: {
    formattedDay(day) {
      let currMonth = this.$store.getters.getCurrentMonth;
      let name = this.monthName(currMonth);
      return day + " " + name;
    }
  },
  computed: {
    month() {
      let montlydata = this.$store.getters.getMonthly;
      this.currentMonth = this.$store.getters.getCurrentMonth;
      this.total = 0;
      montlydata.forEach(daily => {
        this.total = this.total + daily.expense;
      });
      return montlydata;
    }
  },
  filters: {
    formatDay(day) {
      //return this.formattedDay(day);
      //let currMonth = $store.getters.getCurrentMonth;
      //console.log("CurrentMonth:", currMonth);
      //return day + " " +  " March" //this.getMonthName(3);
    }
  }
};
</script>

<style>
</style>
