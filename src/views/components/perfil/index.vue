<template>
  <div class="text-center mt-5" v-if="!isValid">
    <h4>The username {{ username }} is invalid</h4>
    <h5>check the username and try again</h5>
  </div>
  <div class="container" v-else>
    <div class="row">
      <h3 class="col-12 titleUsername">{{ `@${username}` }}</h3>
    </div>
    <div class="row">
      <perfilData :username="info_username" />
      <transactions />
    </div>
  </div>
</template>
<script>
import wlsjs from "@whaleshares/wlsjs";
import perfilData from "./components/perfilData";
import transactions from "./components/transactions";
import CatchErrors from "../../../tools/ErrorNodes";

export default {
  name: "Perfil",
  data: () => ({
    isValid: true,
    username: null,
    username_data: null
  }),
  components: {
    perfilData,
    transactions
  },
  created() {
    this.username = this.$route.params.id.replace(/@/g, "");
    if (wlsjs.utils.validateAccountName(this.username)) {
      this.isValid = false;
    } else {
      this.searchInfoUser(this.username);
    }
  },
  computed:{
    info_username(){
      return this.username_data;
    }
  },
  methods: {
    async searchInfoUser(username, fails = 0) {
      try {
        wlsjs.api.setOptions({ url: window.current_node });
        this.username_data = await wlsjs.api.getAccountsAsync([username]);
      } catch (error) {
        if (fails > 3) console.log(error);
        CatchErrors.ErrorNodes(window.current_node);
        this.searchInfoUser(username, fails + 1);
      }
    }
  }
};
</script>
<style scoped>
.titleUsername {
  color: #555758 !important;
  padding-left: 15px;
  padding-bottom: 30px;
}
</style>
