var SecHeighest = /** @class */ (function () {
    function SecHeighest() {
        this.array_of_num = [4, 3, 2];
    }
    SecHeighest.prototype.secHeighest = function () {
        var heighest = this.array_of_num[0];
        var secHeighest = this.array_of_num[1];
        for (var i = 0; i < (this.array_of_num.length); i++) {
            if (this.array_of_num[i] > heighest && this.array_of_num[i] > secHeighest) {
                var temp = heighest;
                heighest = this.array_of_num[i];
                secHeighest = temp;
            }
            else if (this.array_of_num[i] > heighest && this.array_of_num[0] > secHeighest) {
                var temp = secHeighest;
                secHeighest = this.array_of_num[i];
            }
        }
        console.log("second heighest : " + secHeighest);
    };
    return SecHeighest;
}());
var secHeighest = new SecHeighest();
secHeighest.secHeighest();
