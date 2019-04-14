export default {
  created: function() {
   // console.log("Hello from created hook of etmixin!");
  },
  methods: {
    dayName(dayNumber) {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return dayNumber < 7 ? days[dayNumber] : "";
    },
    monthName(monthNumber){
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNumber < 12 ? months[monthNumber] : "";
    },
    dateDetails(d){
      return d.getDate() + " " + this.monthName(d.getMonth()) + " " + d.getFullYear() + ", " + this.dayName(d.getDay());
    },
    uuidv4() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      )
    }
  }
};
