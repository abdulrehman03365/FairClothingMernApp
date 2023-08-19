var Paypal = /** @class */ (function () {
    function Paypal() {
    }
    Paypal.prototype.execute = function () {
        console.log("Paypal is implemented ");
    };
    return Paypal;
}());
var Stripe = /** @class */ (function () {
    function Stripe() {
    }
    Stripe.prototype.execute = function () {
        console.log("Stripe is selected as payment Strategy");
    };
    return Stripe;
}());
var Pay = /** @class */ (function () {
    function Pay(strategy) {
        this.strategy = strategy;
    }
    Pay.prototype.executePayment = function () {
        this.strategy.execute();
    };
    return Pay;
}());
new Pay(new Paypal).executePayment();
