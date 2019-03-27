<template>
    <div class="card m-4">
        <div class="card-header">
            <h3 class="text-info card-title">New Daily Entry</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" placeholder="Title" v-model="newentry.title">                
            </div>
            <div class="form-group">
                <label for="expense">Expense</label>
                <input type="number" class="form-control" placeholder="Expense" v-model.number="newentry.expense">
            </div>
            <div class="form-group">
                <label for="category">Category</label>
                <select name="category" id="category" class="form-control" v-model="newentry.category">
                    <option v-for="category in categories" :value="category">{{category}}</option>
                </select>
            </div>
            <button class="btn btn-success mr-2" @click="createNew">Create</button>
            <button class="btn btn-danger" @click="cancelCreate">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewDailyEntry",
    data(){
        return {
            newentry: {
                title: "",
                expense: 0,
                category: ""
            }
        }
    },
    methods: {
        createNew(){
            console.log("Newentry:", JSON.stringify(this.newentry));//create new entry
            this.$store.dispatch("setDaily", this.newentry)
            this.$router.replace("/daily")
        },
        cancelCreate(){
            this.$router.replace("/daily");
        }
    },
    computed: {
        categories() {
            return this.$store.getters.getCategories;
        }
    }

}
</script>

<style>

</style>
