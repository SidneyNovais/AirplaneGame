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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(sprite) {
        var _this = _super.call(this, Player.init()) || this;
        _this.airplane.velocity = 3;
        _this.sprite = sprite;
        _this.airplane.gun.interval = 1;
        var porcentageReload = _this.airplane.gun.firingRange.getTime();
        var now = new Date();
        now.setSeconds(now.getSeconds() + 10);
        console.log(now.getTime());
        console.log(porcentageReload);
        return _this;
    }
    Player.prototype.drawReload = function () {
        // Canvas.getCanvas().context.fillStyle = "#000";
        // Canvas.getCanvas().context.fillRect(this.airplane.x,this.airplane.y - 10,,3);
    };
    Player.prototype.die = function () {
        _super.prototype.die.call(this);
    };
    Player.prototype.reset = function () {
        this.airplane.reset(Player.init());
        this.airplane.gun.interval = 1;
    };
    Player.init = function () {
        return {
            x: 10,
            y: 15,
            width: 43,
            height: 46,
            direction: 'right'
        };
    };
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (score) {
            this._score = score;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}(Participants_1.default));
exports.default = Player;
