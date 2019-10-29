"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameControl_1 = require("./GameControl");
var Game = /** @class */ (function () {
    function Game() {
        if (!localStorage.getItem('best'))
            localStorage.setItem('best', "0");
        new GameControl_1.default();
    }
    return Game;
}());
new Game();
