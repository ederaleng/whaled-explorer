<template>
  <div class="col-lg-8 col-sm-12" v-if="!history">
    <center>
      <img
        src="https://courts.ms.gov/images_folder/demo/loading.gif"
        width="20%"
        height="20%"
        alt="loading"
      />
    </center>
  </div>
  <div class="col-lg-8 col-sm-12" v-else>
    <operation v-for="(op, key) in history" :key="key" :operation="op" />
  </div>
</template>
<script>
import operation from "./operation";

export default {
  name: "transactions",
  props: ["history"],
  components: {
    operation
  },
  created() {
    console.log(this.history);
  }
};
</script>
