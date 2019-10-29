"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spawn = /** @class */ (function () {
    function Spawn(intervalRespawn) {
        this.lastSpawn = new Date();
        this.intervalRespawn = intervalRespawn;
    }
    Spawn.prototype.execute = function (callback) {
        var now = (new Date()).getTime();
        if (now >= this.lastSpawn.getTime()) {
            callback();
            this.lastSpawn = new Date();
            this.lastSpawn.setSeconds(this.lastSpawn.getSeconds() + this.intervalRespawn);
        }
    };
    Object.defineProperty(Spawn.prototype, "intervalRespawn", {
        get: function () {
            return this._intervalRespawn;
        },
        set: function (interval) {
            this._intervalRespawn = interval;
        },
        enumerable: true,
        configurable: true
    });
    return Spawn;
}());
exports.default = Spawn;
