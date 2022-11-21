<template>
  <div class="home">
    <HeaderTwofa />
    <RegisterForm />

    <ForgetUserForm />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTwofa from "../components/Header.vue";
import RegisterForm from "src/components/RegisterForm.vue";
export default {
  name: "RegisterUser",
  components: {
    HeaderTwofa,
    RegisterForm,
  },
};
</script>
