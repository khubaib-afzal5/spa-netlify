<template>
  <div class="home">
    <HeaderTwofa />
    <ForgetPasswordform /> 
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTwofa from "../components/Header.vue"; 
import ForgetPasswordform from "../components/ForgetPasswordform.vue";
export default {
  name: "ForgetPassword",
  components: {
    HeaderTwofa,
    ForgetPasswordform,
    // ForgetPassword,
    //   ForgetUserForm,
    // TwoFaFormVue,
  },
};
</script>
