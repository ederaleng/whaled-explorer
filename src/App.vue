<template lang="pug">
  div
    Nav
    router-view
</template>
<script>
import Nav from "./views/nav";
import CatchErrors from "./tools/ErrorNodes";
import wlsjs from '@whaleshares/wlsjs';
import { mapActions } from "vuex";

export default {
  created() {
    CatchErrors.ErrorNodes();
    wlsjs.api.setOptions({ url: window.current_node });
    this.DynamicGlobalProperties()
  },
  components: {
    Nav
  },
  methods:{
    ...mapActions({
      setproperties: "dynamicglobalproperties/setproperties"
    }),
    async DynamicGlobalProperties(){
      try {
        let data = await wlsjs.api.getDynamicGlobalPropertiesAsync();
        this.setproperties(data)
        setTimeout(() => { this.DynamicGlobalProperties() }, 3000);
      } catch (error) {
        CatchErrors.ErrorNodes();
        this.DynamicGlobalProperties()
      }
    }
  }
};
</script>
