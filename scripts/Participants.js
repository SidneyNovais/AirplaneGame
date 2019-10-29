"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Airplane_1 = require("./Airplane");
var Participants = /** @class */ (function () {
    function Participants(airplane) {
        this._observers = [];
        this.state = 'live';
        this.airplane = new Airplane_1.default(airplane);
    }
    Participants.prototype.colliding = function (object) {
        return this.airplane.collided(object);
    };
    Participants.prototype.reset = function (airplane) {
        this.state = 'live';
        this.airplane.reset(airplane);
    };
    Participants.prototype.die = function () {
        this.state = 'dead';
        this.notifyObserver();
    };
    Participants.prototype.move = function (move) {
        var up = move.up, down = move.down, left = move.left, right = move.right;
        if (up)
            this.up();
        if (down)
            this.down();
        if (left)
            this.left();
        if (right)
            this.right();
    };
    Participants.prototype.shot = function (shot) {
        var space = shot.space;
        if (space)
            this.shoting();
    };
    Participants.prototype.subscribeGun = function (o) {
        this.airplane.gun.registerObserver(o);
    };
    Participants.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    Participants.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    Participants.prototype.notifyObserver = function () {
        var _this = this;
        this.observers.map(function (observer) { return observer.update(_this); });
    };
    Participants.prototype.up = function () {
        this.airplane.moveUp();
    };
    Participants.prototype.down = function () {
        this.airplane.moveDown();
    };
    Participants.prototype.left = function () {
        this.airplane.moveLeft();
    };
    Participants.prototype.right = function () {
        this.airplane.moveRight();
    };
    Participants.prototype.shoting = function () {
        this.airplane.fire();
    };
    Participants.prototype.draw = function () {
        this.airplane.draw(this.sprite);
    };
    Object.defineProperty(Participants.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participants.prototype, "airplane", {
        get: function () {
            return this._airplane;
        },
        set: function (airplane) {
            this._airplane = airplane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participants.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        set: function (sprite) {
            this._sprite = sprite;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Participants.prototype, "observers", {
        get: function () {
            return this._observers;
        },
        set: function (observer) {
            this._observers = observer;
        },
        enumerable: true,
        configurable: true
    });
    return Participants;
}());
exports.default = Participants;
