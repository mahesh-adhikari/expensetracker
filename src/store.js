import Vue from "vue";
import Vuex from "vuex";
import VueSession from "vue-session";
import firestore from "./js/firebase";

Vue.use(Vuex);
Vue.use(VueSession, false);
Vue.use(firestore);

const store = new Vuex.Store({
  state: {
    fetched_fb_data: false,
    authUserData: {},
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
    currentDay: new Date().getDate(),
    categories: [
      "Foods",
      "Shopping",
      "Laundry",
      "Mobile",
      "Groceries",
      "Travel",
      "Bike",
      "Smoking",
      "Bills",
      "Finance",
      "Others"
    ],
    dailyentries: [
      /* {
        id: 'sdf6',
        year: 2019,
        month: 3,
        day: new Date().getDate(),
        title: "Initial data from state april",
        expense: 300,
        category: "Foods"
      }*/
    ]
  },
  getters: {
    getDisplayName(state) {
      if (
        state.authUserData.hasOwnProperty("user") &&
        state.authUserData.user.hasOwnProperty("displayName")
      )
        return state.authUserData.user.displayName;
      else return "Unknown";
    },
    getDaily(state) {
      return state.dailyentries.filter(
        entry =>
          entry.year == state.currentYear &&
          entry.month == state.currentMonth &&
          entry.day == state.currentDay
      );
    },
    getMonthly(state) {
      const monthly = state.dailyentries.filter(entry => {
        return (
          entry.year == state.currentYear && entry.month == state.currentMonth
        );
      });
      var grouped = [];
      monthly.forEach(function(day) {
        var found = false;
        grouped.forEach(function(grp) {
          if (day.day === grp.day) {
            grp.expense = grp.expense + day.expense;
            found = true;
          }
        });
        if (!found) grouped.push(JSON.parse(JSON.stringify(day)));
      });
      return grouped;
      //return monthly;
    },
    getYearly(state) {
      const currentYearRecords = state.dailyentries.filter(
        entry => entry.year == state.currentYear
      );
      const perMonthRecords = [];
      currentYearRecords.forEach(function(rec) {
        let found = false;
        perMonthRecords.forEach(function(pmr) {
          if (pmr.month == rec.month) {
            pmr.expense = pmr.expense + rec.expense;
            found = true;
          }
        });
        if (!found)
          perMonthRecords.push({
            year: rec.year,
            month: rec.month,
            expense: rec.expense
          });
      });
      return perMonthRecords;
    },
    getThisYearOverview(state) {
      //return { type: 'test'};
      var thisday = {
        day: new Date().getDate(),
        total: 0,
        highestCategory: "",
        highestExpense: 0,
        leastCategory: "",
        leastExpense: 0,
        expenseDetail: {}
      };
      var thismonth = {
        month: new Date().getMonth(),
        total: 0,
        highestCategory: "",
        highestExpense: 0,
        leastCategory: "",
        leastExpense: 0,
        expenseDetail: {}
      };
      var thisyear = {
        year: new Date().getFullYear(),
        total: 0,
        highestCategory: "",
        highestExpense: 0,
        leastCategory: "",
        leastExpense: 0,
        expenseDetail: {}
      };
      state.dailyentries.forEach(entry => {
        //this year
        if (entry.year === thisyear.year) {
          thisyear.total = thisyear.total + entry.expense;
          if (thisyear.expenseDetail.hasOwnProperty(entry.category))
            thisyear.expenseDetail[entry.category] =
              thisyear.expenseDetail[entry.category] + entry.expense;
          else thisyear.expenseDetail[entry.category] = entry.expense;

          //this month
          if (entry.month === thismonth.month) {
            thismonth.total = thismonth.total + entry.expense;
            if (thismonth.expenseDetail.hasOwnProperty(entry.category))
              thismonth.expenseDetail[entry.category] =
                thismonth.expenseDetail[entry.category] + entry.expense;
            else thismonth.expenseDetail[entry.category] = entry.expense;

            //this day
            if (entry.day === thisday.day) {
              thisday.total = thisday.total + entry.expense;
              if (thisday.expenseDetail.hasOwnProperty(entry.category))
                thisday.expenseDetail[entry.category] =
                  thisday.expenseDetail[entry.category] + entry.expense;
              else thisday.expenseDetail[entry.category] = entry.expense;
            }
          }
        }
      });
      return {
        thisday: thisday,
        thismonth: thismonth,
        thisyear: thisyear
      };
    },
    getCurrentDate(state) {
      return new Date(state.currentYear, state.currentMonth, state.currentDay); //.join("-");
    },
    getCurrentYear(state) {
      return state.currentYear;
    },
    getCurrentMonth(state) {
      return state.currentMonth;
    },
    getCurrentDay(state) {
      return state.currentDay;
    },
    getCategories: state => state.categories,
    getDataStatus: state => state.dailyentries.length
  },
  mutations: {
    SET_AUTH_USER_DATA(state, payload) {
      state.authUserData = payload;
    },
    SETCURRENTDAY(state, payload) {
      if (state.currentYear !== payload[0]) state.currentYear = payload[0];

      if (state.currentMonth !== payload[1]) state.currentMonth = payload[1];

      state.currentDay = payload[2];
    },
    SETCURRENTMONTH(state, payload) {
      if (state.currentYear !== payload[0]) state.currentYear = payload[0];

      state.currentMonth = payload[1];
    },
    SETCURRENTYEAR(state, payload) {
      state.currentYear = payload;
    },
    SETDAILY(state, payload) {
      // payload.year = state.currentYear;
      // payload.month = state.currentMonth;
      // payload.day = state.currentDay;
      state.dailyentries.push(payload);
    },
    DELETEDAILY(state, payload) {
      state.dailyentries = state.dailyentries.filter(obj => obj.id != payload);
    },
    UPDATE_DAILY(state, payload) {
      state.dailyentries.forEach(function(entry) {
        if (entry.id == payload.id) {
          entry.year = payload.year;
          entry.month = payload.month;
          entry.day = payload.day;
          entry.title = payload.title;
          entry.category = payload.category;
          entry.expense = payload.expense;
        }
      });
    }
  },
  actions: {
    setAuthUserData(context, payload) {
      context.commit("SET_AUTH_USER_DATA", payload);
    },
    setCurrentDay(context, payload) {
      context.commit("SETCURRENTDAY", payload);
    },
    setCurrentMonth(context, payload) {
      if (payload.length < 2) return;
      context.commit("SETCURRENTMONTH", payload);
    },
    setCurrentYear(context, payload) {
      context.commit("SETCURRENTYEAR", payload);
    },
    setDaily({ commit, state }, payload) {
      payload.year = state.currentYear;
      payload.month = state.currentMonth;
      payload.day = state.currentDay;
      //commit("SETDAILY", payload);
      //console.log(state.authUserData)
      firestore.db
        .collection(state.authUserData.user.uid)
        .add(payload)
        .then(function(docRef) {
          payload.id = docRef.id;
          commit("SETDAILY", payload);
          //console.log(resp)
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    deleteDaily({ commit, state }, recId) {
      firestore.db
        .collection(state.authUserData.user.uid)
        .doc(recId)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
          commit("DELETEDAILY", recId);
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },
    updateDaily({ commit, state }, payload) {
      firestore.db
        .collection(state.authUserData.user.uid)
        .doc(payload.id)
        .update({
          day: payload.day,
          month: payload.month,
          year: payload.year,
          title: payload.title,
          category: payload.category,
          expense: payload.expense
        });
      commit("UPDATE_DAILY", payload);
    },
    fetchFirestoreData({ commit, state }, authUserData) {
      console.log(
        "fetching data from firestore..",
        "collection:",
        authUserData.user.email
      );
      if (!authUserData.user.displayName) {
        authUserData.user.displayName = authUserData.user.email;
      }
      commit("SET_AUTH_USER_DATA", authUserData);
      if (state.fetched_fb_data) return;
      firestore.db
        .collection(authUserData.user.uid)
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            console.log(doc.data(), doc.id);
            const dailydata = doc.data();
            dailydata.id = doc.id;
            commit("SETDAILY", dailydata);
          });
        });
      state.fetched_fb_data = true;
    }
  }
});

export default store;
