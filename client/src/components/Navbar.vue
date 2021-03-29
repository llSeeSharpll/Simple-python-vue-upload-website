<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Navbar</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" :to="{ name: 'home' }"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'login' }"
            v-if="getIsUserLoggedIn == undefined || getIsUserLoggedIn == false"
            >Log in</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link mx-2 font-wieght-bold"
            :to="{ name: 'profile' }"
            v-if="username != undefined"
            >{{ username }}</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'register' }"
            v-if="getIsUserLoggedIn == undefined || getIsUserLoggedIn == false"
            >Register</router-link
          >
        </li>
        <li class="nav-item">
          <button
            class="nav-link btn-light"
            v-if="getIsUserLoggedIn"
            @click="processLogout()"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  Name: "Navbar",
  data() {
    return {
      username: sessionStorage.getItem("username"),
    };
  },
  computed: {
    ...mapGetters(["getIsUserLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
    processLogout() {
      this.logout({ controllerReference: this }).then(function (ctrl) {
        ctrl.$router.push("login");
      });
    },
  },
};
</script>