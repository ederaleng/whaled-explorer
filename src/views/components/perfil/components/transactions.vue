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
  <div v-else>
    <h2>transactions in perfil</h2>
  </div>
</template>
<script>
export default {
  name: "transactions",
  props: ["history"],
  created() {
    console.log(this.history);
  }
};
</script>
