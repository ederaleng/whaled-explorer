<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col">
        <router-link class="navbar-brand" to="/">
          <img
            src="/img/icon.svg"
            width="35"
            height="35"
            class="d-inline-block align-top"
            alt="img nav"
          />
        </router-link>
        <b class="mr-2">Whale-Explorer</b>
        <router-link to="/witnesses"><span>witnesses</span></router-link>
      </div>

      <div class="col py-2 text-right">
        Whaled-Explorer is Developer by
        <a
          href="https://whaleshares.io/@ederaleng"
          rel="noopener noreferrer"
          target="_blank"
          >@ederaleng</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-bar"
};
</script>
<style scoped></style>
