<template lang="pug">
  div
    Nav
    router-view
</template>
<script>
import Nav from "./views/nav";
import Load_Node from "./tools/ErrorNodes";
export default {
  created() {
    Load_Node.ErrorNodes();
  },
  components: {
    Nav
  }
};
</script>
