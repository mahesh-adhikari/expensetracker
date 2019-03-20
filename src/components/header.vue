<template>
   <div class="row p-3 bg-success mt-2">
       <div class="col-2">
           <button class="btn btn-block border-secondary btn-outline-dark float-right" @click="fetchNew('prev')">
               <i class="fas fa-arrow-left font-x-large"></i>
           </button>
       </div>
       <div class="col-8 text-center">
            <span class="lead text-monospace font-weight-bold">{{header}}</span>
       </div>
       <div class="col-2">
           <button class="btn btn-block border-secondary btn-outline-dark float-left" @click="fetchNew('next')">
               <i class="fas fa-arrow-right font-x-large"></i>
           </button>
       </div>       
   </div> 
</template>

<script>

export default {
    name: "Header",
    props:["type"] ,
    data(){
        return{
            current: new Date(),
            days : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    },
    computed:{
        header:function(){
            let d = new Date(this.current);
            if(this.type == "daily"){
                return d.getDate() + " " + this.months[d.getMonth()] + " " + d.getFullYear() + ", " + this.days[d.getDay()];
            }
            else if(this.type == "monthly"){
                return this.months[d.getMonth()] + " " + d.getFullYear();
            }
            else if(this.type == "yearly"){
                return d.getFullYear();
            }
            else{
                console.log("Couldn't evaluate the prop!!");
                return "????"
            }
        }        
    },
    methods: {
        fetchNew(what){
            let offset  = (what == 'next') ? 1 : -1;      
            let olddate = new Date(this.current);
            switch(this.type){
                case "daily":
                    this.current = olddate.setDate(olddate.getDate() + offset);
                    break;
                case "monthly":
                    this.current = olddate.setMonth(olddate.getMonth() + offset);
                    break;
                case "yearly":
                    this.current = olddate.setFullYear(olddate.getFullYear() + offset)
                    break;
                default:
                    console.log("%cUnknown type!!","background:red;color:white")
            }
            this.$emit('changed', this.current);
        }
    }
}
</script>

<style>
.font-x-large{
    font-size: x-large;
}
</style>
