<template>
    <div class="row">
        <div class="col-md-2">          
        </div>
        <div class="col-md-7">
            <div class="card m-4">
                <div class="card-header">
                    <p class="text-info card-title">
                        <span class="lead font-weight-bold text-success">New Daily Entry</span> 
                        <span class="float-right badge badge-info">{{dateDetail}}</span>
                    </p>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" id="title" class="form-control" placeholder="Title" v-model="newentry.title" autofocus>                
                    </div>
                    <div class="form-group">
                        <label for="expense">Expense</label>
                        <input type="number" id="expense" class="form-control" placeholder="Expense" v-model.number="newentry.expense">
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <select name="category" id="category" class="form-control" v-model="newentry.category">
                            <option v-for="(category,index) in categories" :value="category" v-bind:selected="index == 1 ? 'selected':''">{{category}}</option>
                        </select>
                    </div>
                    <button class="btn btn-success mr-2" @click="createNew">Create</button>
                    <button class="btn btn-danger" @click="cancelCreate">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import etmixin from "@/mixins/etmixin";

export default {
  name: "NewDailyEntry",
  mixins: [etmixin],
  data() {
    return {
      newentry: {
        id: "",
        title: "",
        expense: 0,
        category: ""
      }
    };
  },
  methods: {
    createNew() {
      this.newentry.id = this.uuidv4();
      console.log("Newentry:", JSON.stringify(this.newentry)); //create new entry
      this.$store.dispatch("setDaily", this.newentry);
      this.$router.replace("/daily");
    },
    cancelCreate() {
      this.$router.replace("/daily");
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
    dateDetail() {
      let d = new Date(this.$store.getters.getCurrentDate);
      return this.dateDetails(d);
    }
  }
};
</script>

<style>
</style>
