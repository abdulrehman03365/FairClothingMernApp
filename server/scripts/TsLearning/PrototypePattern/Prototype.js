var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ShirtDesign = /** @class */ (function () {
    function ShirtDesign(CustomerNumber, Website, images) {
        if (images === void 0) { images = ['https://PSL.png']; }
        this.CustomerNumber = CustomerNumber;
        this.Website = Website;
        this.images = images;
    }
    ShirtDesign.prototype.clone = function (newImages) {
        return new ShirtDesign(this.CustomerNumber, this.Website, __spreadArray(__spreadArray([], this.images, true), newImages, true));
    };
    return ShirtDesign;
}());
var baseShirtDesign = new ShirtDesign(12, "");
var LQShirt = baseShirtDesign.clone(['https://lqimage_logo.png']);
var KKShirt = baseShirtDesign.clone(['https://KKimage_logo.png']);
console.log("Base Shirt", baseShirtDesign);
console.log("LQ Shirt", LQShirt);
console.log("KK SHIRT", KKShirt);
