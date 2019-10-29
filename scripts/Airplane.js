"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gun_1 = require("./Gun");
var Canvas_1 = require("./Canvas");
var Collision_1 = require("./Collision");
var Airplane = /** @class */ (function () {
    function Airplane(airplane) {
        this.reset(airplane);
        this.canvas = Canvas_1.default.getCanvas();
        this.collision = new Collision_1.default(this);
    }
    Airplane.prototype.collided = function (object) {
        return this.collision.collided(object);
    };
    Airplane.prototype.reset = function (airplane) {
        this.x = airplane.x;
        this.y = airplane.y;
        this.width = airplane.width;
        this.height = airplane.height;
        this.direction = airplane.direction;
        this.gun = new Gun_1.default(airplane);
    };
    Airplane.prototype.draw = function (sprite) {
        this.canvas.drawAirplane(this, sprite);
    };
    Airplane.prototype.moveUp = function () {
        this.y = this.y - this.velocity;
        this.gun.setGunPosition(this);
    };
    Airplane.prototype.moveDown = function () {
        this.y = this.y + this.velocity;
        this.gun.setGunPosition(this);
    };
    Airplane.prototype.moveLeft = function () {
        this.x = this.x - this.velocity;
        this.gun.setGunPosition(this);
    };
    Airplane.prototype.moveRight = function () {
        this.x = this.x + this.velocity;
        this.gun.setGunPosition(this);
    };
    Airplane.prototype.fire = function () {
        this.gun.shoot(this);
    };
    Object.defineProperty(Airplane.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            this._direction = direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (canvas) {
            this._canvas = canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "gun", {
        get: function () {
            return this._gun;
        },
        set: function (gun) {
            this._gun = gun;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "collision", {
        get: function () {
            return this._collision;
        },
        set: function (collision) {
            this._collision = collision;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "velocity", {
        get: function () {
            return this._velocity;
        },
        set: function (velocity) {
            this._velocity = velocity;
        },
        enumerable: true,
        configurable: true
    });
    return Airplane;
}());
exports.default = Airplane;
