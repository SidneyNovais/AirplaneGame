"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bullet_1 = require("./Bullet");
var Gun = /** @class */ (function () {
    function Gun(airplane) {
        this._firingRange = new Date();
        this._interval = 3;
        this._observers = [];
        this.setGunPosition(airplane);
    }
    Gun.prototype.setGunPosition = function (airplane) {
        if (airplane.direction === 'left') {
            this.x = airplane.x;
            this.y = airplane.y + (airplane.height / 2);
        }
        else if (airplane.direction === 'right') {
            this.x = airplane.x + airplane.width;
            this.y = airplane.y + (airplane.height / 2);
        }
    };
    Gun.prototype.shoot = function (airplane) {
        var now = new Date();
        if (now.getTime() >= this.firingRange.getTime()) {
            var bullet = new Bullet_1.default({
                x: this.x,
                y: this.y,
                width: 4,
                height: 2,
                direction: airplane.direction
            });
            this.firingRange = new Date();
            this.firingRange.setSeconds(this.firingRange.getSeconds() + this.interval);
            this.notifyObserver(bullet);
        }
    };
    Gun.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    Gun.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    Gun.prototype.notifyObserver = function (bullet) {
        this.observers.map(function (o) { return o.update(bullet); });
    };
    Object.defineProperty(Gun.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gun.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gun.prototype, "firingRange", {
        get: function () {
            return this._firingRange;
        },
        set: function (date) {
            this._firingRange = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gun.prototype, "interval", {
        get: function () {
            return this._interval;
        },
        set: function (interval) {
            this._interval = interval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gun.prototype, "observers", {
        get: function () {
            return this._observers;
        },
        set: function (observer) {
            this._observers = observer;
        },
        enumerable: true,
        configurable: true
    });
    return Gun;
}());
exports.default = Gun;
