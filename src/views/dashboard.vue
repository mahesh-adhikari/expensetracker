<template>
  <div class="home jumbotron text-center">
    <daily msg="Welcome to new Rest PFstore"/>
  </div>
</template>

<script>
// @ is an alias to /src
import daily from "@/views/daily.vue";

export default {
  name: "home",
  components: {
    daily : daily
  },
  methods: {
    toSearch: function() {
      this.$router.replace("search");
    }
  }
};
</script>
