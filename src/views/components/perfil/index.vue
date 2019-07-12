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
      <transactions :history="history_username" />
    </div>
  </div>
</template>
<script>
import wlsjs from "@whaleshares/wlsjs";
import perfilData from "./components/perfilData";
import transactions from "./components/transactions";
import CatchErrors from "../../../tools/ErrorNodes";
import _get from "lodash/get";

export default {
  name: "Perfil",
  data: () => ({
    isValid: true,
    username: null,
    username_data: null,
    history: null,
    page: 1
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
      this.search_info_user(this.username);
      this.search_history(this.username);
    }
  },
  computed: {
    info_username() {
      return this.username_data;
    },
    history_username() {
      return this.history;
    }
  },
  methods: {
    async search_info_user(username, fails = 0) {
      try {
        wlsjs.api.setOptions({ url: window.current_node });
        let account = await wlsjs.api.getAccountsAsync([username]);
        this.username_data = _get(account, "[0]");
      } catch (error) {
        if (fails > 3) console.log(error);
        CatchErrors.ErrorNodes(window.current_node);
        this.searchInfoUser(username, fails + 1);
      }
    },
    async search_history(username, fails = 0) {
      try {
        const init = (this.page * 100) * -1;
        this.history = await wlsjs.api.getAccountHistoryAsync(
          username,
          init,
          100
        );
        console.log(this.history)
      } catch (error) {
        if (fails > 3) console.log(error);
        CatchErrors.ErrorNodes(window.current_node);
        this.search_history(username, fails + 1);
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
