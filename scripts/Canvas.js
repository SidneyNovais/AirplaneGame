"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.x = 0;
        this.y = 0;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.frame = document.getElementById("game");
        this.context = this.frame.getContext('2d');
        this.frame.width = this.width;
        this.frame.height = this.height;
    }
    Canvas.getCanvas = function () {
        if (!Canvas.instance) {
            Canvas.instance = new Canvas();
        }
        return Canvas.instance;
    };
    Canvas.limit = function (player) {
        var airplane = player.airplane;
        if (airplane.x <= Canvas.instance.x)
            airplane.x = Canvas.instance.x;
        if (airplane.x + airplane.width >= Canvas.instance.x + Canvas.instance.width)
            airplane.x = Canvas.instance.width - airplane.width;
        if (airplane.y <= Canvas.instance.y)
            airplane.y = Canvas.instance.y;
        if (airplane.y + airplane.height >= Canvas.instance.y + Canvas.instance.height)
            airplane.y = Canvas.instance.height - airplane.height;
    };
    Canvas.prototype.drawBackground = function (color) {
        Canvas.instance.context.fillStyle = "#" + color;
        Canvas.instance.context.fillRect(this.x, this.y, this.width, this.height);
    };
    Canvas.prototype.drawAirplane = function (airplane, sprite) {
        Canvas.instance.context.drawImage(sprite, airplane.x, airplane.y, airplane.width, airplane.height);
    };
    Canvas.prototype.drawBullet = function (bullet) {
        Canvas.instance.context.fillStyle = "#000";
        Canvas.instance.context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    };
    Canvas.prototype.drawScore = function (score) {
        Canvas.instance.context.font = "13px Monaco";
        Canvas.instance.context.strokeText("Score: " + score, 10, 10);
        Canvas.instance.context.strokeText("Best: " + localStorage.getItem('best'), 80, 10);
    };
    Object.defineProperty(Canvas.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "frame", {
        get: function () {
            return this._frame;
        },
        set: function (frame) {
            this._frame = frame;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "context", {
        get: function () {
            return this._context;
        },
        set: function (context) {
            this._context = context;
        },
        enumerable: true,
        configurable: true
    });
    return Canvas;
}());
exports.default = Canvas;
