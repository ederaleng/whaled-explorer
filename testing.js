var wlsjs = require("@whaleshares/wlsjs");
wlsjs.api.setOptions({ url: "https://wls.bushkill.rocks/" });
(async function start() {
  var r = await wlsjs.api.getDynamicGlobalPropertiesAsync();
  console.log(r);
  wlsjs.api.getBlockAsync(2500);
})();

/*const base64url = require('base64-url')
var encode_b6=base64url.encode(JSON.stringify({ "type":"prueba", "params":["test"] }))
console.log(encode_b6)
var stringifiv=base64url.decode(encode_b6)
console.log(stringifiv)*/
