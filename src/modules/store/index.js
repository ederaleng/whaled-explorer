import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import state from "./states";
import Vue from "vue";
import Vuex from "vuex";

// Other Modules
import dynamicglobalproperties from './dynamicglobalproperties';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    dynamicglobalproperties
  }
});
