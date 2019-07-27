<template>
    <div id="yearly-overview">
        <TopHeader type="yearly" />
        
        <div class="row">
            <div class="col-md-2">          
            </div>
            <div class="col-md-8">
                <div class="card text-white bg-darkslategray">
                    <div class="card-header">
                        <h4 class="card-title text-center"><small>Total: </small> 
                            <span class="badge badge-success">{{total}}</span>
                        </h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-sm table-striped">
                            <thead>
                                <tr>
                                    <th class="pl-3">Month</th>
                                    <th>Expense</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="month in year" :key="month.id">
                                    <td class="pl-3">{{month.name}}</td>
                                    <td>{{month.expense}}</td>
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
  name: "Yearly",
  components: {
    TopHeader: header
  },
  mixins: [etmixin],
  data() {
    return {
      total: 0
    };
  },
  computed: {
    year() {
      const yeardata = this.$store.getters.getYearly;
      this.total = 0;
      yeardata.forEach(month => {
        month.name = this.monthName(month.month);
        this.total = this.total + month.expense;
      });
      yeardata.sort((a, b) => a.month - b.month);
      return yeardata;
    }
  }
};
</script>

<style>
</style>
