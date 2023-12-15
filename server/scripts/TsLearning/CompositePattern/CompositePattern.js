// it let us deal individual objects and composite objects uniformly
var Bomb = /** @class */ (function () {
    function Bomb() {
    }
    Bomb.prototype.Explode = function () {
        console.log("Bomb is exploded");
    };
    return Bomb;
}());
var ClusterBomb = /** @class */ (function () {
    function ClusterBomb(numberOfBombs) {
        this.bombs = [];
        for (var i = 0; i < numberOfBombs; i++) {
            this.bombs.push(new Bomb());
        }
    }
    ClusterBomb.prototype.Explode = function () {
        console.log("Cluster Bomb is exploded");
        for (var _i = 0, _a = this.bombs; _i < _a.length; _i++) {
            var bomb = _a[_i];
            bomb.Explode();
        }
    };
    return ClusterBomb;
}());
var clusterBomb = new ClusterBomb(2);
clusterBomb.Explode();
