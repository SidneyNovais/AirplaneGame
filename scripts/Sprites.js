"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sprites = /** @class */ (function () {
    function Sprites(paths) {
        this.airplanes = paths.map(function (path) {
            var img = new Image();
            img.src = path;
            return img;
        });
    }
    Object.defineProperty(Sprites.prototype, "airplanes", {
        get: function () {
            return this._airplanes;
        },
        set: function (spritesAirplane) {
            this._airplanes = spritesAirplane;
        },
        enumerable: true,
        configurable: true
    });
    return Sprites;
}());
exports.default = Sprites;
