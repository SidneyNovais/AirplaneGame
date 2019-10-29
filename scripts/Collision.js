"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collision = /** @class */ (function () {
    function Collision(objectA) {
        this.objectA = objectA;
    }
    Collision.prototype.collided = function (objectB) {
        return (this.objectA.x + this.objectA.width >= objectB.x && this.objectA.x <= objectB.x + objectB.width)
            && (this.objectA.y + this.objectA.height >= objectB.y && this.objectA.y <= objectB.y + objectB.height);
    };
    Object.defineProperty(Collision.prototype, "objectA", {
        get: function () {
            return this._objectA;
        },
        set: function (objectA) {
            this._objectA = objectA;
        },
        enumerable: true,
        configurable: true
    });
    return Collision;
}());
exports.default = Collision;
