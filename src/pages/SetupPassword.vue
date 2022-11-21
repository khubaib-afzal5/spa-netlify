<template>
  <HeaderTwofa />
  <SetupForm />
</template>

<script>
// @ is an alias to /src

import SetupForm from "src/components/SetupForm.vue";
import HeaderTwofa from "../components/Header.vue";

export default {
  name: "SetupPassword",
  components: {
    HeaderTwofa,

    SetupForm,
  },
};
</script>
