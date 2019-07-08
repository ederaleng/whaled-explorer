<template lang="pug">
  div
    Nav
    router-view
</template>
<script>
import Nav from "./views/nav";
import CatchErrors from "./tools/ErrorNodes";
export default {
  created() {
    CatchErrors.ErrorNodes();
  },
  components: {
    Nav
  }
};
</script>
