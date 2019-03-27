export default {
  created: function() {
   // console.log("Hello from created hook of etmixin!");
  },
  methods: {
    getDayName(dayNumber) {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return dayNumber < 7 ? days[dayNumber] : "";
    },
    getMonthName(monthNumber){
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNumber < 12 ? months[monthNumber] : "";
    }
  }
};
