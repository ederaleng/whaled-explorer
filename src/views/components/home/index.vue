<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <center>
          <img
            src="https://courts.ms.gov/images_folder/demo/loading.gif"
            width="50px"
            height="50px"
            alt="loading"
          />
        </center>
      </div>
      <div class="col-sm-12 col-lg-6">
        <center>
          <img
            src="https://courts.ms.gov/images_folder/demo/loading.gif"
            width="50px"
            height="50px"
            alt="loading"
          />
        </center>
      </div>
    </div>
  </div>
</template>
<script>
import wlsjs from "@whaleshares/wlsjs";
import _get from "lodash/get";
import ErrorNodes from "../../../tools/ErrorNodes";

export default {
  name: "Home",
  data: () => ({
    current_block: null,
    full_transactions: []
  }),
  created() {
    this.starting_blocks();
  },
  methods: {
    async starting_blocks(fails = 0) {
      try {
        wlsjs.api.setOptions({ url: window.current_node });
        this.current_block = await wlsjs.api.getDynamicGlobalPropertiesAsync();
        this.last_five_blocks(
          _get(this.current_block, "head_block_number", null),
          0
        );
      } catch (error) {
        if(fails>4)
          return console.log("error in code",error)
        ErrorNodes(window.current_node);
        this.starting_blocks(fails++);
      }
    },
    async last_five_blocks(current_block, cicle) {
      try {
        var res_operations = await wlsjs.api.getBlockAsync(current_block);
        this.full_transactions.concat(res_operations.transactions);
        if (cicle <= 10)
          this.last_five_blocks(current_block - 1, cicle + 1);
        else
          console.log(this.full_transactions)
      } catch (error) {
        ErrorNodes(window.current_node);
        this.starting_blocks(current_block, cicle);
      }
    }
  }
};
</script>
