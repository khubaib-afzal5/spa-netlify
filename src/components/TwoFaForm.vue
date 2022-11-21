<template>
  <div class="header">
    <div class="mainholder">
      <div class="Formholder">
        <p class="Headingtext">2 Factor Authentication (2FA)</p>

        <p class="Subtext">Please check your email for One time</p>

        <p class="lowertext">Password (OTP)</p>
        <input placeholder="One-time Password" class="input" />
      </div>
    </div>
    <router-link to="/home" style="text-decoration: none; color: inherit">
      <q-btn
        style="background: #1976d3; color: white"
        label="Submit"
        class="Submitbutton"
        size="12.5px"
        @click="submitForm"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TwoFaForm",
  props: {
    msg: String,
  },
  data: () => {
    return {};
  },
  methods: {
    submitForm() {
      console.log("Clicked");
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header {
  text-align: center;
  margin-top: 60px;
}
.Headingtext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  align-items: center;

  /* Heading */

  color: #363636;
}

.Subtext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* Heading */

  color: #363636;
  margin-top: 30px;
}

.lowertext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* Heading */

  color: #363636;
  margin-top: -15px;
}
.input {
  width: 310px;
  margin-top: 10px;
  height: 35px;
  padding-left: 20px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  border: 1.5px solid #c8c8c8;
  border-radius: 5px;
}
.Submitbutton {
  margin-top: 25px;
  width: 310px;

  background-color: #1976d3;
  border-radius: 5px;
  border: 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  /* identical to box height, or 173% */

  letter-spacing: 0.46px;
  text-transform: uppercase;

  /* Light/Primary/Contrast */

  color: #ffffff;
}
</style>
