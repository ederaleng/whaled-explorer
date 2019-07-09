<template> </template>
<script>
export default {
  name: "transaction",
  props: ["unique_transaction"],
  created() {
    console.log(this.unique_transaction);
  }
};
</script>
