"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas_1 = require("./Canvas");
var Player_1 = require("./Player");
var Sprites_1 = require("./Sprites");
var Commands_1 = require("./Commands");
var Enemy_1 = require("./Enemy");
var Spawn_1 = require("./Spawn");
var GlobalBullets_1 = require("./GlobalBullets");
var GameControl = /** @class */ (function () {
    function GameControl() {
        this._score = 0;
        this.canvas = Canvas_1.default.getCanvas();
        this._spawn = new Spawn_1.default(2);
        this._participants = [];
        this._globalBullets = new GlobalBullets_1.default();
        this.sprites = new Sprites_1.default(["sprites/player.png", "sprites/enemy.png"]);
        this.commands = new Commands_1.default();
        this.player = new Player_1.default(this.sprites.airplanes[0]);
        this.player.subscribeGun(this.globalBullets);
        this.player.registerObserver(this);
        this.participants.push(this.player);
        this.gameLoop();
    }
    GameControl.prototype.update = function (participant) {
        if (participant instanceof Player_1.default) {
            if (participant.state === 'dead')
                this.defeat();
        }
        if (participant instanceof Enemy_1.default) {
            if (participant.state === 'dead') {
                this.score = this.score + 5;
            }
        }
    };
    GameControl.prototype.defeat = function () {
        this.globalBullets.reset();
        this.participants = [];
        this.player.reset();
        this.player.subscribeGun(this.globalBullets);
        this.participants.push(this.player);
        if (parseInt(localStorage.getItem('best') || "0") <= this.score)
            localStorage.setItem('best', "" + this.score);
        this.score = 0;
    };
    GameControl.prototype.gameLoop = function () {
        var _this = this;
        window.requestAnimationFrame(function () { return _this.gameLoop(); });
        this.updateData();
        this.draw();
    };
    GameControl.prototype.updateData = function () {
        var _this = this;
        this.player.move(this.commands.getMoves());
        this.player.shot(this.commands.getShot());
        this.spawn.execute(function () {
            var enemy = new Enemy_1.default(_this.sprites.airplanes[1]);
            enemy.subscribeGun(_this.globalBullets);
            enemy.registerObserver(_this);
            _this.participants.push(enemy);
        });
        this.participants.map(function (participant) {
            if (participant.airplane.direction === 'left') {
                participant.move({ up: false, down: false, left: true, right: false });
                participant.shot({ space: true });
                if (participant.airplane.x < 0)
                    _this.defeat();
            }
        });
        this.globalBullets.moveBullets();
        this.globalBullets.collidedBullets(this.participants);
        // Verifica se o player colide com um inimigo.
        this.participants.map(function (participant) {
            if (_this.player.colliding(participant.airplane)) {
                if (_this.player.airplane !== participant.airplane) {
                    _this.player.die();
                }
            }
        });
        Canvas_1.default.limit(this.player);
        this.player.drawReload();
    };
    GameControl.prototype.draw = function () {
        this.canvas.drawBackground("8ACBF5");
        this.canvas.drawScore(this.score);
        this.participants.map(function (participant) { return participant.draw(); });
        this.globalBullets.drawBullets();
    };
    Object.defineProperty(GameControl.prototype, "player", {
        get: function () {
            return this._player;
        },
        set: function (player) {
            this._player = player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameControl.prototype, "sprites", {
        get: function () {
            return this._sprites;
        },
        set: function (sprites) {
            this._sprites = sprites;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameControl.prototype, "commands", {
        get: function () {
            return this._commands;
        },
        set: function (commands) {
            this._commands = commands;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameControl.prototype, "participants", {
        get: function () {
            return this._participants;
        },
        set: function (participant) {
            this._participants = participant;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameControl.prototype, "spawn", {
        get: function () {
            return this._spawn;
        },
        set: function (spawn) {
            this._spawn = spawn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameControl.prototype, "globalBullets", {
        get: function () {
            return this._globalBullets;
        },
        set: function (globalBullets) {
            this._globalBullets = globalBullets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameControl.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (score) {
            this._score = score;
        },
        enumerable: true,
        configurable: true
    });
    return GameControl;
}());
exports.default = GameControl;
