<template>    
    <div id="monthly-overview">
        <TopHeader type="monthly" @changed="dateChanged" />
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
                        <td>{{day.date}}</td>
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
import header   from '@/components/header';
export default {
    name: "Monthly",
    components:{
      TopHeader : header
    },
    data(){
        return{
            total: 12345,
            current: new Date(),
            month:[
                {id: 1, date: new Date().getDate(), expense: 123},
                {id: 2, date: new Date().getDate(), expense: 456},
                {id: 3, date: new Date().getDate(), expense: 789}
            ]
        }
    },
    methods: {
        dateChanged(newdate){  
        this.current = new Date(newdate);
        this.total   = this.current;
        }
    }
};
</script>

<style>
</style>
