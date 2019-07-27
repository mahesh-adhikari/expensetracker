<template>
   <div class="row p-3 mt-2">
       <div class="col-2">           
       </div>
       <div class="col-8 text-center">
           <button class="btn btn-outline-light float-left" @click="fetchNew('prev')">
               <i class="fas fa-arrow-left font-x-large"></i>
           </button>
            <span class="badge badge-pill badge-secondary text-monospace font-x-large">{{header}}</span>
            <button class="btn btn-outline-light float-right" @click="fetchNew('next')">
               <i class="fas fa-arrow-right font-x-large"></i>
           </button>
       </div>
       <div class="col-2">           
       </div>       
   </div> 
</template>

<script>
import etmixin from "@/mixins/etmixin";

export default {
  name: "Header",
  props: ["type"],
  mixins: [etmixin],
  data() {
    return {
      // current: new Date(),
      //days : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      //months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };
  },
  computed: {
    header: function() {
      let d = new Date(this.$store.getters.getCurrentDate);
      if (this.type == "daily") {
        return this.dateDetails(d);
      } else if (this.type == "monthly") {
        return this.monthName(d.getMonth()) + " " + d.getFullYear();
      } else if (this.type == "yearly") {
        return d.getFullYear();
      } else {
        console.log("Couldn't evaluate the prop!!");
        return "????";
      }
    }
  },
  methods: {
    fetchNew(what) {
      let offset = what == "next" ? 1 : -1; // Prev or next??
      let currentdate = new Date(this.$store.getters.getCurrentDate);

      switch (this.type) {
        case "daily":
          currentdate.setDate(currentdate.getDate() + offset);
          this.$store.dispatch("setCurrentDay", [
            currentdate.getFullYear(),
            currentdate.getMonth(),
            currentdate.getDate()
          ]);
          break;
        case "monthly":
          currentdate.setMonth(currentdate.getMonth() + offset);
          this.$store.dispatch("setCurrentMonth", [
            currentdate.getFullYear(),
            currentdate.getMonth()
          ]);
          break;
        case "yearly":
          currentdate.setFullYear(currentdate.getFullYear() + offset);
          this.$store.dispatch("setCurrentYear", currentdate.getFullYear());
          break;
        default:
          console.log("%cUnknown type!!", "background:red;color:white");
      }
      //this.$emit('changed', this.current);
    }
  }
};
</script>

<style>
.font-x-large {
  font-size: x-large;
}
</style>
