<template>
  <div class="home">
    <HeaderTwofa />
    <AccountForm />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTwofa from "../components/Header.vue";
import AccountForm from "src/components/AccountForm.vue";
export default {
  name: "AccountInfo",
  components: {
    HeaderTwofa,
    AccountForm,
  },
};
</script>
