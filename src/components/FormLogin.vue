<template>
  <div class="header">
    <div class="mainholder">
      <div class="Formholder">
        <p class="Headingtext">Welcome Back</p>
        <p class="username">Username</p>
        <input class="input" placeholder="username" />
        <p class="label">Password</p>
        <div class="Inputhold">
          <q-input
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            input-style="height:55px"
            outlined
            class="qqq"
            dense
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class=""></div>
      </div>
    </div>
    <router-link to="/" style="text-decoration: none; color: inherit">
      <q-btn
        style="background: #1976d3; color: white"
        label="Confirm"
        class="Submitbutton"
        size="12.5px"
        @click="submitForm"
      />
    </router-link>

    <router-link to="/forgot" style="text-decoration: none; color: inherit">
      <p class="forgetuser">Forget Username ?</p>
    </router-link>

    <router-link to="/password" style="text-decoration: none; color: inherit">
      <p class="forgetpassword">Forget Password ?</p>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    msg: String,
  },
  data: () => {
    return {
      passwordFieldType: "password",
    };
  },
  methods: {
    submitForm() {
      console.log("Clicked");
    },
  },
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
    };
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
.Inputhold {
  text-align: center;
  display: flex;
  justify-content: center;
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
  margin-left: -245px;
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
  /* identical to box height, or 20px */

  text-align: center;
  letter-spacing: 0.17px;

  /* Brand-Blue */

  color: #1976d3;
}
.qq {
  width: 300px;
}
.qqq {
  width: 310px;
}
.rowholder {
}
.Passwordinput {
  width: 200px;
  margin-top: -10px;
  height: 35px;
  padding-left: 20px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;

  border: 1.5px solid #c8c8c8;
  border-radius: 5px;
}
.forgetuser {
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
  margin-top: 20px;
}
.forgetpassword {
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
  margin-top: -5x;
}
</style>
