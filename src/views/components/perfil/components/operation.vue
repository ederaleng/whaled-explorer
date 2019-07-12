<template>
  <h1>operation</h1>
</template>
<script>
export default {
  name: "operation",
  props: ["operation"],
  created() {
    console.log(this.operation);
  }
};
</script>
