<template>
  <div class="container">
    <Register />
  </div>
</template>

<script>
import Register from "@/modules/authentication/Register.vue";
export default {
  name: "RegisterView",
  components: {
    Register,
  },
};
</script>