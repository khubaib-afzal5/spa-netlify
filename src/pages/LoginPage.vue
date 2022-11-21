<template>
  <div class="home">
    <HeaderTwofa />
    <FormLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTwofa from "../components/Header.vue";
import FormLogin from "src/components/FormLogin.vue";
export default {
  name: "LoginPage",
  components: {
    HeaderTwofa,
    FormLogin,
  },
};
</script>
