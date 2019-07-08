<template lang="pug">
  div
    Nav
    router-view
</template>
<script>
import Nav from "./views/nav";
export default {
  components: {
    Nav
  }
};
</script>
