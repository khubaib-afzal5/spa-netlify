<template>
  <div class="header">
    <div class="VersionHolder">
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
export default {
  name: "HeaderTwofa",
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
  margin-top: 10px;
}
.VersionHolder {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  height: 20px;
}
.Versiontext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: grey;
  margin-right: 15px;
}
.LogoHolder {
  margin-left: 35px;
  margin-top: 20px;
}
.imageclass {
  margin-left: 20px;
}
</style>
