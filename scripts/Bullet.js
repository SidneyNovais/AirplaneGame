"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas_1 = require("./Canvas");
var Collision_1 = require("./Collision");
var Bullet = /** @class */ (function () {
    function Bullet(bullet) {
        this.x = bullet.x;
        this.y = bullet.y;
        this.width = bullet.width;
        this.height = bullet.height;
        this.direction = bullet.direction;
        this.canvas = Canvas_1.default.getCanvas();
        this.collision = new Collision_1.default(this);
    }
    Bullet.prototype.colliding = function (object) {
        return this.collision.collided(object);
    };
    Bullet.prototype.outOfArea = function () {
        return this.x <= 0 || this.x + this.width >= this.canvas.width;
    };
    Bullet.prototype.move = function () {
        if (this.direction === 'left') {
            this.x = this.x - 10;
        }
        else if (this.direction === 'right') {
            this.x = this.x + 10;
        }
    };
    Bullet.prototype.draw = function () {
        this.canvas.drawBullet(this);
    };
    Object.defineProperty(Bullet.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            this._direction = direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (canvas) {
            this._canvas = canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "collision", {
        get: function () {
            return this._collision;
        },
        set: function (collision) {
            this._collision = collision;
        },
        enumerable: true,
        configurable: true
    });
    return Bullet;
}());
exports.default = Bullet;
