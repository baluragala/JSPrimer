function makeCoffee(quantity, callback) {
    var message = "Prepared " + quantity + " coffee";
    console.log("Preparing " + quantity + " coffee");
    callback(message);
}
var callback = function (statusMessage) { return console.log("Serving to table :" + statusMessage); };
makeCoffee(10, callback);
//# sourceMappingURL=functions.js.map