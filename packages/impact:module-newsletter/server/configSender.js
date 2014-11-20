// or in both/init.js?

Modules.Newsletter.from = "Please run Modules.Newsletter.configSender({from: ...})";

Modules.Newsletter.configSender = function (params) {

  Modules.Newsletter.from = params.from; 

}
