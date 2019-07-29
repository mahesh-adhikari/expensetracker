<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand to="/dashboard">EXPENSE TRACKER</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
       <!-- <b-nav-item to="/" exact>DASHBOARD</b-nav-item>-->
        <b-nav-item to="/dashboard" exact>&nbsp;<span class="fa fa-home"></span>&nbsp;</b-nav-item>
        <b-nav-item to="/daily" exact>DAILY</b-nav-item>
        <b-nav-item to="/monthly" exact>MONTHLY</b-nav-item>
        <b-nav-item to="/yearly" exact>YEARLY</b-nav-item>
        <b-nav-item to="/stats" exact><span class="fa fa-chart-bar"></span> STATS</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">   
        <b-nav-text><span class="fa fa-user"></span> {{displayName}}</b-nav-text>
        <b-nav-item @click="logmeout"><span class="fa fa-sign-out-alt"></span> Logout</b-nav-item>
       <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Contacts</b-dropdown-item>
          <b-dropdown-item @click="logmeout">Logout</b-dropdown-item>
        </b-nav-item-dropdown>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    logmeout() {
      //console.log("emitting logmeout event from navbar");
      this.$emit("logmeout");
    }
  },
  computed: {
    displayName() {
      //return this.$store.getters.getDisplayName;
      return this.$session.get("authUserData").user.displayName;
    }
  }
};
</script>

<style>
.nav-link.active {
  background: lightseagreen;
  border-radius: 6px;
}
</style>
