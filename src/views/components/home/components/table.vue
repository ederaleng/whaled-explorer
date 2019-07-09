<template>
  <table class="tablestyle">
    <tbody id="tbodycenter">
      <tr class="trtitletable">
        <td colSpan="2" class="titletable"><b>Global Properties</b></td>
      </tr>

      <tr v-for="(key_ob, key) in keys_obj" :key="key">
        <th>{{ key_ob.replace(/_/g, " ") }}:</th>
        <td>{{ Current_Block[key_ob] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "TableHeadblock",
  props: ["Current_Block"],
  data: () => ({
    keys_obj: null
  }),
  created() {
    this.keys_obj = Object.keys(this.Current_Block);
  }
};
</script>
<style scoped>
.tablestyle {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
  display: flow-root;
  width: 100%;
  overflow-x: auto;
}
.titletable {
  background-color: #004085;
  text-align: center;
  color: white;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.trtitletable {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
</style>
