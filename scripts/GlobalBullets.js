"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalBullets = /** @class */ (function () {
    function GlobalBullets() {
        this.bullets = [];
    }
    GlobalBullets.prototype.update = function (bullet) {
        this.bullets.push(bullet);
    };
    GlobalBullets.prototype.drawBullets = function () {
        this.bullets.map(function (bullet) { return bullet.draw(); });
    };
    GlobalBullets.prototype.moveBullets = function () {
        var _this = this;
        this.bullets.map(function (bullet) {
            bullet.move();
            if (bullet.outOfArea()) {
                var index = _this.bullets.indexOf(bullet);
                _this.bullets.splice(index, 1);
            }
        });
    };
    GlobalBullets.prototype.collidedBullets = function (participants) {
        var _this = this;
        this.bullets.map(function (bullet) {
            participants.map(function (participant) {
                if (bullet.colliding(participant.airplane)) {
                    var indexB = _this.bullets.indexOf(bullet);
                    var indexP = participants.indexOf(participant);
                    if (bullet.direction !== participant.airplane.direction) {
                        _this.bullets.splice(indexB, 1);
                        participant.die();
                        participants.splice(indexP, 1);
                    }
                }
            });
        });
    };
    GlobalBullets.prototype.reset = function () {
        this.bullets = [];
    };
    return GlobalBullets;
}());
exports.default = GlobalBullets;
