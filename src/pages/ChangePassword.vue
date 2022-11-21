<template>
  <ChangePasswordheader />
  <ChangePasswordform />
</template>

<script>
// @ is an alias to /src

import ChangePasswordform from "src/components/ChangePasswordform.vue";
import ChangePasswordheader from "src/components/ChangePasswordheader.vue";

export default {
  name: "ChangePassword",
  components: {
    ChangePasswordheader,
    ChangePasswordform,
  },
};
</script>
