<template>
  <div class="home">
    <HeaderTwofa />

    <ForgetUserForm />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTwofa from "../components/Header.vue";
import ForgetUserForm from "../components/ForgetUserForm.vue";
// import TwoFaFormVue from "../components/TwoFaForm.vue";
export default {
  name: "ForgotUsername",
  components: {
    HeaderTwofa,
    ForgetUserForm,
    // TwoFaFormVue,
  },
};
</script>
