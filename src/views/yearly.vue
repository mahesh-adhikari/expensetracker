<template>
    <div id="yearly-overview">
        <TopHeader type="yearly" @changed="dateChanged"/>
        <div>
            <h3 class="text-right">Total Expense: <span class="badge badge-secondary">{{total}}</span></h3>
            <table class="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Expense</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="month in year" :key="month.id">
                        <td>{{month.name}}</td>
                        <td>{{month.expense}}</td>
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
    name: "Yearly",
    components:{
      TopHeader : header
    },
    data(){
        return {
            months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            current: new Date().getFullYear(),
            total : 123547,
            year: [
                {id: 0, name: "January", expense: 1236},
                {id: 1, name: "February", expense: 642},
                {id: 2, name: "March", expense: 25789},
                {id: 3, name: "April", expense: 3950},
                {id: 4, name: "May", expense: 3434},
                {id: 5, name: "June", expense: 2333},
                {id: 6, name: "July", expense: 15400},
                {id: 7, name: "August", expense: 5555},
                {id: 8, name: "September", expense: 4433},
                {id: 9, name: "October", expense: 8767},
                {id: 10, name:"November", expense: 5677},
                {id: 11, name:"December", expense: 8988},
            ]
        }
    },
    methods: {
        dateChanged(newdate){  
        this.current = new Date(newdate).getFullYear();
        this.total   = this.current;
        }
    }
};
</script>

<style>
</style>
