<template>
  <div class="home">
    <HeaderTwofa />
    <YourUsernameform />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTwofa from "../components/Header.vue";
// import TwoFaFormVue from "../components/TwoFaForm.vue";
import YourUsernameform from "src/components/YourUsernameform.vue";
export default {
  name: "YourUsername",
  components: {
    HeaderTwofa,
    YourUsernameform,
    // TwoFaFormVue,
  },
};
</script>
