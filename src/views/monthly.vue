<template>    
    <div id="monthly-overview">
        <TopHeader type="monthly" />
        <div>
            <h3 class="text-right">Total Expense: <span class="badge badge-secondary">{{total}}</span></h3>
            <table class="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Expense</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="day in month" :key="day.id">
                        <td>{{day.day}}</td>
                        <td>{{day.expense}}</td>
                        <td>
                            <button class="btn btn-outline-primary mr-2">
                                <i class="fa fa-hand-point-right"></i> See Details
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import header  from '@/components/header';
import etmixin from "@/mixins/etmixin";

export default {
    name: "Monthly",
    components:{
      TopHeader : header
    },
    mixins: [etmixin],
    data(){
        return{
            total: 12345,
            current: new Date()
        }
    },
    methods: {},
    computed: {
        month(){
            return this.$store.getters.getMonthly
        }
    }
};
</script>

<style>
</style>
