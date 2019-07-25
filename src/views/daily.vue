<template>
  <div>    
    <TopHeader type="daily" />
    <div class="lower">
      <div class="row">
        <div class="col-md-2">          
        </div>
        <div class="col-md-8">
          <div class="card text-white bg-darkslategray">
            <div class="card-header">
                <div class="float-left w-50">
                  <button class="btn btn-primary ml-2" @click="$router.replace('/newdaily')">
                    <span class="fa fa-plus"></span>
                    Add New
                  </button>
                </div>
                <div class="float-left w-50">
                  <h4 class="text-info text-right">
                    <small>Total: </small> <span class="badge badge-secondary">{{total}} </span>
                  </h4>
                </div>
            </div>
            <div class="card-body">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Expense</th>
                    <th>Category</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="daily in dailyentries" :key="daily.id">
                    <td>{{daily.title}}</td>
                    <td>{{daily.expense}}</td>
                    <td>{{daily.category}}</td>
                    <td>
                      <button class="btn btn-outline-primary mr-2" v-b-modal="'updateModal'" @click="selected(daily)">
                        <i class="fas fa-edit"></i>
                      </button>
                      <b-button variant="outline-danger" v-b-modal="'deleteModal'" @click="selected(daily)">
                        <i class="fas fa-trash"></i>
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal Component -->
      <b-modal
        id="updateModal"
        ref="modal"
        title="Edit Entry!!"
        @ok="updateOk"
        variant="info"
      >
        <div>
          <div class="form-group">
            <label for="title">TItle:</label>
            <input type="text" id="title" class="form-control" v-model="selectedRow.title">
          </div>
          <div class="form-group">
            <label for="expense">TItle:</label>
            <input type="text" id="expense" class="form-control" v-model.number="selectedRow.expense">
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <select name="category" id="category" class="form-control" v-model="selectedRow.category">
                <option v-for="(category,index) in categories" :value="category" v-bind:selected="selectedRow.category == category ? 'selected':''">{{category}}</option>
            </select>
          </div>
        </div>
      </b-modal>
        
      <!-- Modal Component -->
      <b-modal
        id="deleteModal"
        ref="modal"
        title="Delete Entry!!"
        @ok="deleteOk"
        variant="danger"
      >
        Are you sure you want to delete this record?
      </b-modal>
    </div>
  </div>
</template>


<!--<script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>-->
<script>
//import firebase from 'firebase';
import header  from '@/components/header';
import etmixin from "@/mixins/etmixin";

export default {
  name: "Daily",
  components: {
    TopHeader: header
  },
  mixins: [etmixin],
  data(){
    return {
      total: 0,
      current: new Date(),
      currentISO: "",
      selectedRow: {}
    };
  },
  beforeCreate() {
    let d = new Date();
    this.$store.dispatch("setCurrentDay", [d.getFullYear(), d.getMonth(), d.getDate()])
  },
  computed: {
    dailyentries(){
      let dailyentries = this.$store.getters.getDaily;
      this.total = 0;
      dailyentries.forEach(daily => {
        this.total = this.total + daily.expense;
      });
      return dailyentries;
    },
    categories() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    selected(row){
      this.selectedRow = JSON.parse(JSON.stringify(row));
      //console.log("Selected:", JSON.stringify(this.selectedRow,3,3))
    },
    deleteOk(){
      //console.log(this.selectedRow.id + " will be deleted")
      this.$store.dispatch("deleteDaily", this.selectedRow.id )
    },
    updateOk(){
      //console.log("Updating to..\n", JSON.stringify(this.selectedRow,3,3));
      this.$store.dispatch("updateDaily", this.selectedRow)
    }
  }
};
</script>

<style>
</style>
