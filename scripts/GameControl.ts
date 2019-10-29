import Canvas from './Canvas';
import Player from './Player';
import Sprites from './Sprites';
import Commands from './Commands';
import Enemy from './Enemy';
import Spawn from './Spawn';
import GlobalBullets from './GlobalBullets';
import Participants from './Participants';
import Observer from '../interfaces/Observer';

export default class GameControl implements Observer<Participants> {
    private _score: number = 0;
    private canvas: Canvas = Canvas.getCanvas();
    private _spawn: Spawn = new Spawn(2);
    private _player: Player;
    private _sprites: Sprites;
    private _commands: Commands;
    private _participants: Array<Participants> = [];
    private _globalBullets: GlobalBullets = new GlobalBullets();
    
    constructor() {
        this.sprites = new Sprites(["sprites/player.png","sprites/enemy.png"]);
        this.commands = new Commands();
        this.player = new Player(this.sprites.airplanes[0]);
        this.player.subscribeGun(this.globalBullets);
        this.player.registerObserver(this);
        this.participants.push(this.player);
        this.gameLoop();
    }

    update(participant: Participants) {
        if(participant instanceof Player) {
            if(participant.state === 'dead')
                this.defeat();
        }

        if(participant instanceof Enemy) {
            if(participant.state === 'dead'){
                this.score = this.score + 5;
            }
        }
    }

    defeat() {
        this.globalBullets.reset();
        this.participants = [];
        this.player.reset();
        this.player.subscribeGun(this.globalBullets);
        this.participants.push(this.player);
        if(parseInt(localStorage.getItem('best') || "0") <= this.score)
            localStorage.setItem('best', `${this.score}`);
        this.score = 0;
    }
    
    gameLoop() : void {
        window.requestAnimationFrame(() => this.gameLoop());
        this.updateData();
        this.draw();
    }

    updateData() : void {
        this.player.move(this.commands.getMoves());
        this.player.shot(this.commands.getShot());
        this.spawn.execute(() => {
            let enemy = new Enemy(this.sprites.airplanes[1])
                enemy.subscribeGun(this.globalBullets);
                enemy.registerObserver(this);
            this.participants.push(enemy);
        });

        this.participants.map(participant => {
            if(participant.airplane.direction === 'left') {
                participant.move({up:false,down:false,left:true,right:false});
                participant.shot({space: true});
                if(participant.airplane.x < 0)
                    this.defeat();
            }
        });
        this.globalBullets.moveBullets();
        this.globalBullets.collidedBullets(this.participants);

        // Verifica se o player colide com um inimigo.
        this.participants.map(participant => {
            if(this.player.colliding(participant.airplane)) {
                if(this.player.airplane !== participant.airplane) {
                    this.player.die();
                }
            }
        })

        Canvas.limit(this.player);
        this.player.drawReload();
    }

    draw() : void {
        this.canvas.drawBackground("8ACBF5");
        this.canvas.drawScore(this.score);
        this.participants.map(participant => participant.draw());
        this.globalBullets.drawBullets();
    }

    get player() : Player {
        return this._player;
    }

    set player(player: Player) {
        this._player = player;
    }

    get sprites() : Sprites {
        return this._sprites;
    }

    set sprites(sprites: Sprites) {
        this._sprites = sprites;
    }

    get commands() : Commands {
        return this._commands;
    }

    set commands(commands: Commands) {
        this._commands = commands;
    }

    get participants() : Array<Enemy> {
        return this._participants;
    }

    set participants(participant: Array<Enemy>) {
        this._participants = participant;
    }

    get spawn() : Spawn {
        return this._spawn;
    }

    set spawn(spawn: Spawn) {
        this._spawn = spawn;
    }

    get globalBullets() : GlobalBullets {
        return this._globalBullets;
    }

    set globalBullets(globalBullets: GlobalBullets) {
        this._globalBullets = globalBullets;
    }

    get score() : number {
        return this._score;
    }

    set score(score: number) {
        this._score = score;
    }

    
}