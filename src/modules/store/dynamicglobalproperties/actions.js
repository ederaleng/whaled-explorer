export default {
  setproperties({ commit }, dt){
    commit("setState", { key: "properties", value: dt });
  }
};
