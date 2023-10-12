//Factory Pattern allow us to create objects of class under specific conditions and additionaly if we want to limit the type of object creation
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
var _a;
var House = /** @class */ (function () {
    function House(type, owner, address) {
        this.owner = "abdul";
        this.address = "karachi";
        this.type = type;
        this.owner = owner;
        this.address = address;
    }
    House.prototype.revealDetail = function () {
        console.log("type =" + this.type);
        console.log("owner =" + this.owner);
        console.log("address =" + this.address);
    };
    return House;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.createHome = function (type) {
        if (type = '2A') {
            return new House("2A", "abdul", "karachi");
        }
        else if (type = '3A') {
            return new House("3A", "abdul", "islamabad");
        }
    };
    return Factory;
}());
var factory = new Factory();
(_a = factory.createHome('2A')) === null || _a === void 0 ? void 0 : _a.revealDetail();
var IsbHouse = /** @class */ (function (_super) {
    __extends(IsbHouse, _super);
    function IsbHouse() {
        return _super.call(this, "2A", "atya", "isb") || this;
    }
    return IsbHouse;
}(House));
var isbHouse = new IsbHouse();
isbHouse.revealDetail(); // Display details of IsbHouse
