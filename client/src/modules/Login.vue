<template>
  <div>
      <h1>Login</h1>
      <form>
        <div class="mx-1">Username</div>
        <input
          name="email"
          label="Email*"
          id="email"
          v-model="username"
          prepend-icon="mdi-account-circle"
          required
        /><br/>
        <div class="mx-1">Password</div>
        <input
          name="password"
          label="Password*"
          id="password"
          v-model="password"
          :type="getPasswordFieldType()"
          prepend-icon="mdi-lock"
          :append-icon="getShowPasswordApendIcon()"
          @click:append="toggleShowPassword()"
          required
        />
      </form>
    <div>
      <router-link to="register">Go to Register</router-link>
      <button
        @click="login({ username:username, password: password })"
        >Login</button
      >
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data: function () {
    return {
      showPassword: false,
      isLoginFormValid: false,
      username: "",
      password: "",
      mobilePhone: "",
    };
  },
  methods: {
    getPasswordFieldType: function () {
      if (this.showPassword) {
        return "text";
      } else {
        return "password";
      }
    },
    toggleShowPassword: function () {
      this.showPassword = !this.showPassword;
    },
    getShowPasswordApendIcon: function () {
      if (this.showPassword) {
        return "mdi-eye";
      } else {
        return "mdi-eye-off";
      }
    },
    checkIsRequired: function (value, errorMessage) {
      if (!errorMessage) {
        errorMessage = "This field is required";
      }
      return !!value || errorMessage;
    },
    ...mapActions(["authenticateUserAndSetToken"]),
    validateEmail(email) {
      var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      return (
        re.test(String(email).toLowerCase()) ||
        "Oops, this doesn't looks like rigth, can you check please?"
      );
    },
    login(loginData) {
      loginData.controllerReference = this;
      this.authenticateUserAndSetToken(loginData).then(function (controller) {
        controller.$router.push("/");
      });
    },
  },
  computed: {
    ...mapGetters([
      "getLoginProcessMessage",
      "isProcessing",
      "getIsUserLoggedIn",
      "GetIsSnackbarVisible",
    ]),
  },
};
</script>