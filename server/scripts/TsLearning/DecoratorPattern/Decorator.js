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
var Cloth = /** @class */ (function () {
    function Cloth(price) {
        this.price = price;
    }
    Cloth.prototype.getPrice = function () {
        return this.price;
    };
    return Cloth;
}());
var ProductDecorator = /** @class */ (function () {
    function ProductDecorator(product) {
        this.product = product;
    }
    return ProductDecorator;
}());
var DiscountDecorator = /** @class */ (function (_super) {
    __extends(DiscountDecorator, _super);
    function DiscountDecorator(product, discountPrice) {
        var _this = _super.call(this, product) || this;
        _this.discountPrice = discountPrice;
        return _this;
    }
    DiscountDecorator.prototype.getPrice = function () {
        return this.product.getPrice() - this.discountPrice;
    };
    return DiscountDecorator;
}(ProductDecorator));
var originalCloth = new Cloth(1000);
var discountedCloth = new DiscountDecorator(originalCloth, 20);
console.log("Original Price:", originalCloth.getPrice());
console.log("Discounted Price:", discountedCloth.getPrice());
