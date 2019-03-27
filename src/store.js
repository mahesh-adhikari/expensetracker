import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
    currentDay: new Date().getDate(),
    categories: ["Foods", "Shopping", "Laundry", "Mobile", "Groceries", "Travel", "Bike", "Smoking", "Bills", "Finance"],
    dailyentries: [
      { id: 1, year: 2019, month: 2, day: 28, title: "Water jar", expense: 45, category: "Water" },
      { id: 2, year: 2019, month: 2, day: 25, title: "Milk", expense: 30, category: "Foods" },
      { id: 3, year: 2019, month: 2, day: 25, title: "XYZ", expense: 30, category: "Foods" },
      { id: 4, year: 2019, month: 1, day: 26, title: "Milk", expense: 30, category: "Foods" },
      { id: 5, year: 2019, month: 1, day: 26, title: "Milk", expense: 30, category: "Foods" },
      { id: 6, year: 2019, month: 1, day: 26, title: "BDCK", expense: 30, category: "Foods" },
      { id: 7, year: 2019, month: 3, day: 27, title: "Milk", expense: 30, category: "Foods" },
      { id: 8, year: 2019, month: 3, day: 27, title: "BBB", expense: 30, category: "Foods" },
      { id: 9, year: 2019, month: 0, day: 27, title: "Milk", expense: 30, category: "Foods" },
      { id: 10,year: 2019, month: 0, day: 27,  title: "MMMMlk", expense: 30, category: "Foods" }
    ]
  },
  getters: {
    getDaily(state) {
      return state.dailyentries.filter((entry) => entry.year == state.currentYear && entry.month == state.currentMonth && entry.day == state.currentDay);
    },
    getMonthly(state) {
      const monthly = state.dailyentries.filter((entry) => entry.year == state.currentYear && entry.month == state.currentMonth);
      return monthly;
    },
    getYearly(state) {
      return {id:1, month: "jan"}
    },
    getCurrentDate(state){
      return new Date(state.currentYear, state.currentMonth, state.currentDay) //.join("-");
    },
    getCategories: state => state.categories    
  },
  mutations: {
    SETCURRENTDAY(state, payload){
      if(state.currentYear !== payload[0])
        state.currentYear = payload[0];

      if(state.currentMonth !== payload[1])
        state.currentMonth = payload[1];
      
        state.currentDay = payload[2];
    },
    SETCURRENTMONTH(state, payload){
      if(state.currentYear !== payload[0])
        state.currentYear = payload[0];

      state.currentMonth = payload[1];
    },
    SETCURRENTYEAR(state, payload){
      state.currentYear = payload
    },
    SETDAILY(state, payload){
      payload.year  = state.currentYear;
      payload.month = state.currentMonth;
      payload.day   = state.currentDay;
      state.dailyentries.push(payload);
    }
  },
  actions: {
    setCurrentDay(context, payload){
      context.commit("SETCURRENTDAY", payload)
    },
    setCurrentMonth(context, payload){
      if (payload.length < 2) return;
      context.commit("SETCURRENTMONTH", payload)
    },
    setCurrentYear(context, payload){
      context.commit("SETCURRENTYEAR", payload)
    },
    setDaily(context, payload){
      context.commit("SETDAILY", payload);
    }
  }
});
