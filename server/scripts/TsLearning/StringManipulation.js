var StringManipulation = /** @class */ (function () {
    function StringManipulation(string) {
        this.string = string;
    }
    StringManipulation.prototype.manipulateString = function () {
        console.log("slice", this.string.slice(2, 5));
        // substring deals negative index starting from zero
        console.log("subString", this.string.substring(2));
        console.log("replace", this.string.replace("Hello", "Fuck"));
        console.log("array of string", this.string.split(","));
        console.log("padd string", this.string.padStart(10, "x"));
    };
    StringManipulation.prototype.stringSearch = function () {
        console.log("indexOf", this.string.indexOf("world"));
        console.log("last index of returns last index of string occurance", this.string.lastIndexOf("world"));
        console.log("search", this.string.search("world"));
        console.log("match", this.string.match("world"));
        console.log("indexOf", this.string.includes("world", 2));
    };
    return StringManipulation;
}());
var stringManipulation = new StringManipulation("hello world this is my crazy world");
stringManipulation.manipulateString();
stringManipulation.stringSearch();
