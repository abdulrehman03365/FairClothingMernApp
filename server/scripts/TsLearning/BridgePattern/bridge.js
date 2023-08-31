var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Remote = /** @class */ (function () {
    function Remote(tv) {
        this.tv = tv;
    }
    return Remote;
}());
var SonyTv = /** @class */ (function () {
    function SonyTv() {
    }
    SonyTv.prototype.turnOnTv = function () {
        console.log("Sony Tv is on");
    };
    SonyTv.prototype.turnOffTv = function () {
        console.log("Sony Tv is off");
    };
    SonyTv.prototype.changeChannel = function () {
        console.log("Sony Tv is changing channel");
    };
    return SonyTv;
}());
var SonyRemote = /** @class */ (function (_super) {
    __extends(SonyRemote, _super);
    function SonyRemote(tv) {
        return _super.call(this, tv) || this;
    }
    SonyRemote.prototype.turnOnTv = function () {
        this.tv.turnOnTv();
    };
    SonyRemote.prototype.turnOffTv = function () {
    };
    SonyRemote.prototype.changeChannel = function () {
    };
    return SonyRemote;
}(Remote));
var sonyTv = new SonyTv();
var sonyRemote = new SonyRemote(sonyTv);
sonyRemote.turnOnTv();
