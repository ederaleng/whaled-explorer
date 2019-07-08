const nodes = ["https://wls.bushkill.rocks/", "https://pubrpc.whaleshares.io/"];

class NodeError {
  ErrorNodes(current_node = "https://wls.bushkill.rocks/") {
    var position_current_node = nodes.indexOf(current_node);
    if (position_current_node == nodes.length - 1)
      window.current_node = nodes[0];
    else window.current_node = nodes[position_current_node++];
  }
}

var node_error = new NodeError();
export default node_error;
