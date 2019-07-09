<template>
  <h2>transactions in Home</h2>
</template>
<script>
export default {
  name: "transaction",
  props: ["unique_transaction"],
  created() {
    console.log(this.unique_transaction);
  }
};
</script>
