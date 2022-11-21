<template>
  <div class="header">
    <div class="mainholder">
      <div class="Formholder">
        <p class="Headingtext">Forget Password</p>
        <p class="username">Username</p>
        <input class="input" />
        <p class="label">Registered Email</p>
        <input class="input" />
      </div>
    </div>

    <router-link
      to="/Setuppassword"
      style="text-decoration: none; color: inherit"
    >
      <q-btn
        style="background: #1976d3; color: white"
        label="Confirm"
        class="Submitbutton"
        size="12.5px"
        @click="submitForm"
      />
    </router-link>

    <router-link
      to="/Setuppassword"
      style="text-decoration: none; color: inherit"
    >
      <p class="Backbutton">Back</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ForgetPasswordform",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  margin-top: -10px;
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
.label {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* Heading */

  color: #363636;
  margin-left: -200px;
  margin-top: 30px;
}
.username {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* Heading */

  color: #363636;
  margin-left: -240px;
  margin-top: 30px;
}
.lowertext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  text-align: center;
  letter-spacing: 0.17px;

  color: #1976d3;
}
.Backbutton {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;

  text-align: center;
  letter-spacing: 0.17px;

  color: #1976d3;
  margin-top: 20px;
}
</style>
