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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log(this.name + " is moving");
    };
    return Car;
}());
var Jeep = /** @class */ (function (_super) {
    __extends(Jeep, _super);
    function Jeep(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Jeep.prototype.enable4by4 = function () {
        console.log("4 X 4 is enabled");
    };
    return Jeep;
}(Car));
var jeep = new Jeep("my_jeep");
jeep.move();
jeep.enable4by4();
