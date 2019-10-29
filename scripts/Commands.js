"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Commands = /** @class */ (function () {
    function Commands() {
        this.setEventsMove();
        this.setEventsShot();
    }
    Commands.prototype.setEventsMove = function () {
        var _this = this;
        window.addEventListener('keydown', function (e) {
            var code = e.code;
            if (code === 'ArrowUp')
                _this.up = true;
            if (code === 'ArrowDown')
                _this.down = true;
            if (code === 'ArrowLeft')
                _this.left = true;
            if (code === 'ArrowRight')
                _this.right = true;
        });
        window.addEventListener('keyup', function (e) {
            var code = e.code;
            if (code === 'ArrowUp')
                _this.up = false;
            if (code === 'ArrowDown')
                _this.down = false;
            if (code === 'ArrowLeft')
                _this.left = false;
            if (code === 'ArrowRight')
                _this.right = false;
        });
    };
    Commands.prototype.setEventsShot = function () {
        var _this = this;
        window.addEventListener('keydown', function (e) {
            var code = e.code;
            if (code === 'Space')
                _this.space = true;
        });
        window.addEventListener('keyup', function (e) {
            var code = e.code;
            if (code === 'Space')
                _this.space = false;
        });
    };
    Commands.prototype.getMoves = function () {
        return this;
    };
    Commands.prototype.getShot = function () {
        return this;
    };
    Object.defineProperty(Commands.prototype, "up", {
        get: function () {
            return this._up;
        },
        set: function (up) {
            this._up = up;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Commands.prototype, "down", {
        get: function () {
            return this._down;
        },
        set: function (down) {
            this._down = down;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Commands.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (left) {
            this._left = left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Commands.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (right) {
            this._right = right;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Commands.prototype, "space", {
        get: function () {
            return this._space;
        },
        set: function (space) {
            this._space = space;
        },
        enumerable: true,
        configurable: true
    });
    return Commands;
}());
exports.default = Commands;
