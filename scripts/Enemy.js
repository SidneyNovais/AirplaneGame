"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Participants_1 = require("./Participants");
var Canvas_1 = require("./Canvas");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(sprite) {
        var _this = _super.call(this, Enemy.setPosition()) || this;
        _this.sprite = sprite;
        _this.airplane.velocity = 0.30;
        return _this;
    }
    Enemy.setPosition = function () {
        var canvas = Canvas_1.default.getCanvas();
        var width = 44;
        var height = 32;
        var y = Math.abs(Math.random() * canvas.height - height);
        var x = canvas.width + width;
        var direction = 'left';
        return { x: x, y: y, width: width, height: height, direction: direction };
    };
    Enemy.prototype.die = function () {
        _super.prototype.die.call(this);
    };
    return Enemy;
}(Participants_1.default));
exports.default = Enemy;
