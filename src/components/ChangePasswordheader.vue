<template>
  <div class="header">
    <div class="VersionHolder">
      <div class="firstrow">
        <img :src="drawer" />
        <p class="Customertext">Customer Sharing Portal</p>
      </div>
      <p class="Versiontext">ver {{ version }}</p>
    </div>

    <div class="LogoHolder">
      <img :src="logo" />
      <img :src="line" class="imageclass" />
      <img :src="portal" class="imageclass" />
    </div>
  </div>
</template>

<script>
import QHMSlogo from "../assets/images/QHMSlogo.png";
import Line from "../assets/images/Line.png";
import portal from "../assets/images/portal.png";
import drawer from "../assets/images/drawer.png";
export default {
  name: "ChangePasswordheader",
  props: {
    msg: String,
  },
  data: () => {
    return {
      version: "1.0.0",
      logo: QHMSlogo,
      line: Line,
      portal: portal,
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
}
.VersionHolder {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  height: 40px;
  background-color: #1976d3;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  font-display: row;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
}
.Versiontext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: white;
  margin-right: 15px;
  text-align: center;
}
.LogoHolder {
  margin-left: 35px;
  margin-top: 20px;
}
.imageclass {
  margin-left: 20px;
}
.firstrow {
  display: flex;
  flex-direction: row;
}
.Customertext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  /* White */

  color: #ffffff;
}
</style>
