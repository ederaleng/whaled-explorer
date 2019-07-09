<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <div class="text-center" v-if="!finished">
          <img
            src="https://courts.ms.gov/images_folder/demo/loading.gif"
            width="50px"
            height="50px"
            alt="loading"
          />
        </div>
        <div
          class="text-center mt-4"
          v-else-if="finished && full_transactions.length == 0"
        >
          <h4>No have operations in the last 10 blocks</h4>
          <p>
            your last explorer block was {{ finished_las_block }} you want to
            do?
          </p>
          <div class="w-100">
            <button
              type="button"
              class="btn btn-primary mx-3"
              @click="last_five_blocks(finished_las_block)"
            >
              Explore 10 blocks more
            </button>
            <button
              type="button"
              class="btn btn-primary mx-3"
              @click="last_five_blocks(current_block)"
            >
              Retry search of blocks
            </button>
          </div>
        </div>
        <div v-else>
          <TransactionComponent  v-for="(operation, key) in full_transactions" :key="key" :unique_transaction="operation" />
        </div>
      </div>
      <div class="col-sm-12 col-lg-6">
        <div class="text-center" v-if="!current_block">
          <img
            src="https://courts.ms.gov/images_folder/demo/loading.gif"
            width="50px"
            height="50px"
            alt="loading"
          />
        </div>
        <tableInformation v-else :Current_Block="getCurrentProperties" />
      </div>
    </div>
  </div>
</template>
<script>
import wlsjs from "@whaleshares/wlsjs";
import _get from "lodash/get";
import CatchErrors from "../../../tools/ErrorNodes";
import tableInformation from "./components/table";
import TransactionComponent from './components/transactions'

export default {
  name: "Home",
  data: () => ({
    current_block: null,
    full_transactions: [],
    finished: false,
    finished_las_block: null
  }),
  computed: {
    getCurrentProperties() {
      return this.current_block;
    }
  },
  components: {
    tableInformation,
    TransactionComponent
  },
  created() {
    this.starting_blocks();
  },
  methods: {
    async starting_blocks() {
      await this.searchDynamicGlobalProperties()
      this.last_five_blocks(_get(this.current_block, "head_block_number", null));
    },
    async searchDynamicGlobalProperties(fails = 0){
      try {
        wlsjs.api.setOptions({ url: window.current_node });
        this.current_block = await wlsjs.api.getDynamicGlobalPropertiesAsync();
        setTimeout(() => { this.searchDynamicGlobalProperties() }, 3000);
      } catch (error) {
        if (fails > 4) return console.log("error in code", error);
        CatchErrors.ErrorNodes(window.current_node);
        this.searchDynamicGlobalProperties(fails++);
      }
    },
    async last_five_blocks(current_block, cicle = 0) {
      try {
        this.finished = false;
        var res_operations = await wlsjs.api.getBlockAsync(current_block);
        this.full_transactions = this.full_transactions.concat(res_operations.transactions);
        if (cicle <= 10) this.last_five_blocks(current_block - 1, cicle + 1);
        else {
          this.finished = true;
          this.finished_las_block = current_block;
          console.log(this.full_transactions);
        }
      } catch (error) {
        CatchErrors.ErrorNodes(window.current_node);
        this.starting_blocks(current_block, cicle);
      }
    }
  }
};
</script>
