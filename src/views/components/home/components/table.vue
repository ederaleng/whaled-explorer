<template>
  <table class="tablestyle">
    <tbody id="tbodycenter">
      <tr class="trtitletable">
        <td colSpan="2" class="titletable"><b>Global Properties</b></td>
      </tr>

      <tr v-for="(key_ob, key) in keys_obj" :key="key">
        <th>{{ key_ob }}:</th>
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
