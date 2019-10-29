(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gun_1 = require("./Gun");
var Canvas_1 = require("./Canvas");
var Collision_1 = require("./Collision");
var Airplane = /** @class */ (function () {
    function Airplane(airplane) {
        this.reset(airplane);
        this.canvas = Canvas_1.default.getCanvas();
        this.collision = new Collision_1.default(this);
    }
    Airplane.prototype.collided = function (object) {
        return this.collision.collided(object);
    };
    Airplane.prototype.reset = function (airplane) {
        this.x = airplane.x;
        this.y = airplane.y;
        this.width = airplane.width;
        this.height = airplane.height;
        this.direction = airplane.direction;
        this.gun = new Gun_1.default(airplane);
    };
    Airplane.prototype.draw = function (sprite) {
        this.canvas.drawAirplane(this, sprite);
    };
    Airplane.prototype.moveUp = function () {
        this.y = this.y - this.velocity;
        this.gun.setGunPosition(this);
    };
    Airplane.prototype.moveDown = function () {
        this.y = this.y + this.velocity;
        this.gun.setGunPosition(this);
    };
    Airplane.prototype.moveLeft = function () {
        this.x = this.x - this.velocity;
        this.gun.setGunPosition(this);
    };
    Airplane.prototype.moveRight = function () {
        this.x = this.x + this.velocity;
        this.gun.setGunPosition(this);
    };
    Airplane.prototype.fire = function () {
        this.gun.shoot(this);
    };
    Object.defineProperty(Airplane.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            this._direction = direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (canvas) {
            this._canvas = canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "gun", {
        get: function () {
            return this._gun;
        },
        set: function (gun) {
            this._gun = gun;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "collision", {
        get: function () {
            return this._collision;
        },
        set: function (collision) {
            this._collision = collision;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Airplane.prototype, "velocity", {
        get: function () {
            return this._velocity;
        },
        set: function (velocity) {
            this._velocity = velocity;
        },
        enumerable: true,
        configurable: true
    });
    return Airplane;
}());
exports.default = Airplane;

},{"./Canvas":3,"./Collision":4,"./Gun":9}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas_1 = require("./Canvas");
var Collision_1 = require("./Collision");
var Bullet = /** @class */ (function () {
    function Bullet(bullet) {
        this.x = bullet.x;
        this.y = bullet.y;
        this.width = bullet.width;
        this.height = bullet.height;
        this.direction = bullet.direction;
        this.canvas = Canvas_1.default.getCanvas();
        this.collision = new Collision_1.default(this);
    }
    Bullet.prototype.colliding = function (object) {
        return this.collision.collided(object);
    };
    Bullet.prototype.outOfArea = function () {
        return this.x <= 0 || this.x + this.width >= this.canvas.width;
    };
    Bullet.prototype.move = function () {
        if (this.direction === 'left') {
            this.x = this.x - 10;
        }
        else if (this.direction === 'right') {
            this.x = this.x + 10;
        }
    };
    Bullet.prototype.draw = function () {
        this.canvas.drawBullet(this);
    };
    Object.defineProperty(Bullet.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            this._direction = direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (canvas) {
            this._canvas = canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "collision", {
        get: function () {
            return this._collision;
        },
        set: function (collision) {
            this._collision = collision;
        },
        enumerable: true,
        configurable: true
    });
    return Bullet;
}());
exports.default = Bullet;

},{"./Canvas":3,"./Collision":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collision = /** @class */ (function () {
    function Collision(objectA) {
        this.objectA = objectA;
    }
    Collision.prototype.collided = function (objectB) {
        return (this.objectA.x + this.objectA.width >= objectB.x && this.objectA.x <= objectB.x + objectB.width)
            && (this.objectA.y + this.objectA.height >= objectB.y && this.objectA.y <= objectB.y + objectB.height);
    };
    Object.defineProperty(Collision.prototype, "objectA", {
        get: function () {
            return this._objectA;
        },
        set: function (objectA) {
            this._objectA = objectA;
        },
        enumerable: true,
        configurable: true
    });
    return Collision;
}());
exports.default = Collision;

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"./Canvas":3,"./Participants":10}],7:[function(require,module,exports){
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

},{"./Canvas":3,"./Commands":5,"./Enemy":6,"./GlobalBullets":8,"./Player":11,"./Spawn":12,"./Sprites":13}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"./Bullet":2}],10:[function(require,module,exports){
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

},{"./Airplane":1}],11:[function(require,module,exports){
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

},{"./Participants":10}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spawn = /** @class */ (function () {
    function Spawn(intervalRespawn) {
        this.lastSpawn = new Date();
        this.intervalRespawn = intervalRespawn;
    }
    Spawn.prototype.execute = function (callback) {
        var now = (new Date()).getTime();
        if (now >= this.lastSpawn.getTime()) {
            callback();
            this.lastSpawn = new Date();
            this.lastSpawn.setSeconds(this.lastSpawn.getSeconds() + this.intervalRespawn);
        }
    };
    Object.defineProperty(Spawn.prototype, "intervalRespawn", {
        get: function () {
            return this._intervalRespawn;
        },
        set: function (interval) {
            this._intervalRespawn = interval;
        },
        enumerable: true,
        configurable: true
    });
    return Spawn;
}());
exports.default = Spawn;

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"./GameControl":7}]},{},[14]);
