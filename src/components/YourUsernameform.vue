<template>
  <div class="header">
    <div class="mainholder">
      <div class="Formholder">
        <p class="Headingtext">Your Username</p>
        <p class="label">Your username is</p>
        <div class="holder">
          <div class="Nameshow">
            <p class="innertext">{{ data }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="Subholder">
      <p class="Subtext">
        You must change your password before next <br />
        login
      </p>
    </div>
    <router-link
      to="/changepassword"
      style="text-decoration: none; color: inherit"
    >
      <q-btn
        style="background: #1976d3; color: white"
        label="CHANGE PASSWORD"
        class="Submitbutton"
        size="12.5px"
        @click="submitForm"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "YourUsernameform",
  props: {
    msg: String,
  },
  data: () => {
    return {
      data: "Taha Khalid",
    };
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
.Subholder {
  margin-top: 30px;
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

  /* Heading */

  color: #363636;
  margin-top: -5px;
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
  margin-top: -12.5px;
  height: 35px;
  padding-left: 20px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  border: 1.5px solid #c8c8c8;
  border-radius: 5px;
}
.Submitbutton {
  margin-top: 12.5px;
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
.Nameshow {
  margin-top: 30px;

  margin-top: -12.5px;
  border-radius: 5px;
  background-color: #f3f3f3;
  height: 35px;
  width: 320px;
  text-align: left;
  padding-left: 20px;
}

.holder {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.innertext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  margin-top: 8.5px;

  /* Black50 */

  color: rgba(0, 0, 0, 0.5);
}
</style>
