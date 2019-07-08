var wlsjs = require("@whaleshares/wlsjs");
wlsjs.api.setOptions({ url: "https://wls.bushkill.rocks/" });
wlsjs.api.getAccounts(["officialfuzzy", "powerpics"], function(err, result) {
  console.log(err, result);
});
