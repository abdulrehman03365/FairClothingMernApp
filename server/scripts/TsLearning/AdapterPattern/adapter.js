var SMS = /** @class */ (function () {
    function SMS() {
    }
    SMS.prototype.step1 = function () {
        console.log("SMS service step 1 done");
    };
    SMS.prototype.step2 = function () {
        console.log(" SMS service step 2 done");
    };
    SMS.prototype.step3 = function () {
        console.log("SMS service step 3 done");
    };
    SMS.prototype.sendSms = function () {
        console.log("sms sent");
    };
    return SMS;
}());
var smsAdapter = /** @class */ (function () {
    function smsAdapter(service) {
        this.service = service;
    }
    smsAdapter.prototype.send = function () {
        this.service.step1();
        this.service.step2();
        this.service.step3();
        this.service.sendSms();
    };
    return smsAdapter;
}());
var emailAdapter = /** @class */ (function () {
    function emailAdapter() {
    }
    emailAdapter.prototype.send = function () {
        console.log("sending email");
    };
    return emailAdapter;
}());
var sms = new SMS;
var smsadapter = new smsAdapter(sms);
var emailadapter = new emailAdapter();
smsadapter.send();
emailadapter.send();
