<template>
  <div class="home">
    <HeaderTwofa />
    <TwoFaFormVue />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTwofa from "../components/Header.vue";
import TwoFaFormVue from "../components/TwoFaForm.vue";
export default {
  name: "TWOFAview",
  components: {
    HeaderTwofa,
    TwoFaFormVue,
  },
};
</script>
