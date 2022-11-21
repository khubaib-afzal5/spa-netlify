<template>
  <!-- <HomeHeader /> -->

  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" class="rounded-borders">
      <q-header elevated class="Header">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title class="Titletext"
            >Customer Sharing Portal</q-toolbar-title
          >
          <p class="Versionclass">ver 1.0.0.0</p>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        class="bg-primary"
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" class="iconstyle" />
                </q-item-section>
                <q-item-section class="draweritem">
                  <p v-if="menuItem.label === 'Invoice'">
                    <router-link
                      to="/login"
                      style="text-decoration: none; color: inherit"
                    >
                      {{ menuItem.label }}
                    </router-link>
                  </p>
                  <p v-else-if="menuItem.label === 'Code Management'">
                    <router-link
                      to="/Codemanagement"
                      style="text-decoration: none; color: inherit"
                    >
                      {{ menuItem.label }}
                    </router-link>
                  </p>
                  <p v-else-if="menuItem.label === 'Change Password'">
                    <router-link
                      to="/changepassword"
                      style="text-decoration: none; color: inherit"
                    >
                      {{ menuItem.label }}
                    </router-link>
                  </p>

                  <p v-else-if="menuItem.label === 'Account Information'">
                    <router-link
                      to="/Accountinfo"
                      style="text-decoration: none; color: inherit"
                    >
                      {{ menuItem.label }}
                    </router-link>
                  </p>

                  <p v-else-if="menuItem.label === 'Logout'">
                    <router-link
                      to="/login"
                      style="text-decoration: none; color: inherit"
                    >
                      {{ menuItem.label }}
                    </router-link>
                  </p>
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page>
          <CodeManagementcontent />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style scoped>
.Versionclass {
  text-align: center;
  margin-top: 15px;
}
.Header {
  background-color: #1976d3;
  height: 50px;
}
.Titletext {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;

  /* White */

  color: #ffffff;
}
.draweritem {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  /* White */

  color: #ffffff;
  margin-top: 20px;
}
.iconstyle {
  color: white;
  text-align: center;
  margin-top: 20px;
}
</style>
;

<script>
// import HomeHeader from "src/components/HomeHeader.vue";
import CodeManagementcontent from "src/components/CodeManagementcontent..vue";
import { ref } from "vue";
const menuList = [
  {
    icon: "receipt",
    label: "Invoice",
    separator: false,
  },

  {
    icon: "",
    label: "Code Management",
    separator: false,
  },
  {
    icon: "lock",
    label: "Change Password",
    separator: false,
  },
  {
    icon: "user",
    label: "Account Information",
    separator: false,
  },
  {
    icon: "Logout",
    label: "Logout",
    separator: false,
  },
];
export default {
  name: "HomePage",
  components: {
    // HomeHeader,
    CodeManagementcontent,
  },
  setup() {
    return {
      drawer: ref(false),
      menuList,
    };
  },
};
</script>
