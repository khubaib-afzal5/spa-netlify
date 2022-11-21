<template>
  <div class="header">
    <div class="mainholder">
      <div class="Formholder">
        <p class="Headingtext">Change Password</p>
        <p class="originalpassword">Original Password</p>
        <input class="input" type="password" />
        <p class="Newpassword">New Password</p>
        <input class="input" type="password" />

        <p class="cnp">Confirm New Password</p>
        <input class="input" type="password" />
      </div>
    </div>

    <p class="label">Password Policy</p>
    <div class="Lowerdataholder">
      <p class="Subtextstyle">Length:12 Characters</p>
    </div>
    <p class="Substyle">
      Complexity (must contain atleast three of the following):
    </p>
    <p class="Case">a. English Uppercase characters (A-Z)</p>
    <p class="Case">b. English Lowercase characters (a-z)</p>

    <p class="base">c. Base 10 digit (0-9)</p>
    <p class="nac">d. Non alphabetic characters(!,@,#,$,%)</p>
    <router-link to="/login" style="text-decoration: none; color: inherit">
      <q-btn
        style="background: #1976d3; color: white"
        label="Confirm"
        class="Submitbutton"
        size="12.5px"
        @click="submitForm"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ChangePasswordform",
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
  margin-bottom: 20px;
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
.originalpassword {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* Heading */

  color: #363636;
  margin-left: -195px;
  margin-top: 30px;
}
.Newpassword {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* Heading */

  color: #363636;
  margin-left: -215px;
  margin-top: 30px;
}
.lowertext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  /* identical to box height, or 20px */

  text-align: center;
  letter-spacing: 0.17px;

  /* Brand-Blue */

  color: #1976d3;
}
.labelsub {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;

  /* Heading */

  color: #363636;
}
.Subtextstyle {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  text-align: center;
  margin-left: -190px;
  /* Heading */

  color: #363636;
  justify-content: center;
  margin-top: 20px;
}
.Lowerdataholder {
  display: flex;
  justify-content: center;
}
.cnp {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* Heading */

  color: #363636;
  margin-left: -167.5px;
  margin-top: 30px;
}
.Substyle {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  text-align: center;
  margin-left: -10px;
  /* Heading */

  color: #363636;
  justify-content: center;
  margin-top: 20px;
}
.Case {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  text-align: center;
  margin-left: -107.5px;
  color: #363636;
  justify-content: center;
  margin-top: -15px;
}
.base {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  text-align: center;
  margin-left: -197.5px;
  color: #363636;
  justify-content: center;
  margin-top: -15px;
}
.nac {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  text-align: center;
  margin-left: -100.5px;
  color: #363636;
  justify-content: center;
  margin-top: -15px;
}
.abc {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  text-align: center;
  /* Heading */

  color: #363636;
  justify-content: center;
  margin-top: 20px;
  margin-left: 90px;
}
.q {
}
</style>
