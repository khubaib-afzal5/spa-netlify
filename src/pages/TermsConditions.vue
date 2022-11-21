<template>
  <div class="home">
    <HeaderTwofa />
    <div class="dataholder">
      <p class="Headingtext">Terms and Condition</p>
      <div class="holder">
        <p class="textdata">{{ data1 }}</p>
        <p class="textdata">{{ data2 }}</p>
        <p class="textdata">{{ data3 }}</p>
      </div>
    </div>
    <div class="checkholder">
      <q-checkbox
        dense
        v-model="cyan"
        label="I have agreed to Terms and Conditions"
        color="cyan"
      />
    </div>
    <div class="buttonholder">
      <q-btn
        style="background: #1976d3; color: white"
        label="Next"
        class="Submitbutton"
        size="12.5px"
        @click="submitForm"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTwofa from "../components/Header.vue";
import { ref } from "vue";

export default {
  name: "TcText",
  components: {
    HeaderTwofa,
  },
  setup() {
    return {
      teal: ref(true),
      orange: ref(false),
      red: ref(true),
      cyan: ref(false),
    };
  },
  data: () => {
    return {
      data1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ultrices lectus, molestie vulputate purus rutrum vitae. Nam dignissim porta velit vel accumsan. Vestibulum sed cursus lacus. Phasellus at nisl iaculis, condimentum dolor quis, fermentum justo. Mauris nibh lacus, pellentesque nec iaculis sed, blandit ac erat. Aenean et pretium mauris. Maecenas eros mi, rhoncus eget maximus ut, tristique eu lectus. Maecenas at metus mi. Vestibulum sit amet convallis nisl. Fusce in diam efficitur, pulvinar libero maximus, faucibus libero. Integer vehicula suscipit turpis, sodales gravida eros sagittis nec. Nulla vulputate ante vel posuere efficitur. Etiam feugiat velit eget nisl consectetur porttitor.",
      data2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ultrices lectus, molestie vulputate purus rutrum vitae. Nam dignissim porta velit vel accumsan. Vestibulum sed cursus lacus. Phasellus at nisl iaculis, condimentum dolor quis, fermentum justo. Mauris nibh lacus, pellentesque nec iaculis sed, blandit ac erat. Aenean et pretium mauris. Maecenas eros mi, rhoncus eget maximus ut, tristique eu lectus. Maecenas at metus mi. Vestibulum sit amet convallis nisl. Fusce in diam efficitur, pulvinar libero maximus, faucibus libero. Integer vehicula suscipit turpis, sodales gravida eros sagittis nec. Nulla vulputate ante vel posuere efficitur. Etiam feugiat velit eget nisl consectetur porttitor",
      data3:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ultrices lectus, molestie vulputate purus rutrum vitae. Nam dignissim porta velit vel accumsan. Vestibulum sed cursus lacus. Phasellus at nisl iaculis, condimentum dolor quis, fermentum justo. Mauris nibh lacus, pellentesque nec iaculis sed, blandit ac erat. Aenean et pretium mauris. Maecenas eros mi, rhoncus eget maximus ut, tristique eu lectus. Maecenas at metus mi. Vestibulum sit amet convallis nisl. Fusce in diam efficitur, pulvinar libero maximus, faucibus libero. Integer vehicula suscipit turpis, sodales gravida eros sagittis nec. Nulla vulputate ante vel posuere efficitur. Etiam feugiat velit eget nisl consectetur porttitor.",
    };
  },
};
</script>
<style scoped>
.textdata {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  margin-left: 40px;
  margin-right: 40px;

  color: #363636;
  margin-top: 15px;
}
.buttonholder {
  text-align: center;
  margin-bottom: 30px;
}
.dataholder {
  text-align: center;
}

.Headingtext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-top: 50px;

  /* Heading */

  color: #363636;
}
.holder {
  margin-top: 35px;
}
.checkholder {
  margin-left: 70px;
  margin-top: 40px;
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
