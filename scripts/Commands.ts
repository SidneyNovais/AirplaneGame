import MoveT from "../interfaces/MoveT";
import ShotT from "../interfaces/ShotT";

export default class Commands {
    private _up:boolean;
    private _down:boolean;
    private _left:boolean;
    private _right:boolean;
    private _space:boolean;

    constructor() {
        this.setEventsMove();
        this.setEventsShot();
    }

    public setEventsMove () : void {
        window.addEventListener('keydown', (e) => {
            let code = e.code;
            if(code === 'ArrowUp')    this.up    = true;
            if(code === 'ArrowDown')  this.down  = true;
            if(code === 'ArrowLeft')  this.left  = true;
            if(code === 'ArrowRight') this.right = true;
        });

        window.addEventListener('keyup', (e) => {
            let code = e.code;
            if(code === 'ArrowUp')    this.up    = false;
            if(code === 'ArrowDown')  this.down  = false;
            if(code === 'ArrowLeft')  this.left  = false;
            if(code === 'ArrowRight') this.right = false;
        });
    }

    public setEventsShot() : void {
        window.addEventListener('keydown', (e) => {
            let code = e.code;
            if(code === 'Space') this.space = true;
        });

        window.addEventListener('keyup', (e) => {
            let code = e.code;
            if(code === 'Space') this.space = false;
        });
    }

    public getMoves() : MoveT {
        return this;
    }

    public getShot() : ShotT {
        return this;
    }

    get up() : boolean {
        return this._up;
    }

    set up(up:boolean) {
        this._up = up;
    }

    get down() : boolean {
        return this._down;
    }

    set down(down:boolean) {
        this._down = down;
    }

    get left() : boolean {
        return this._left;
    }

    set left(left:boolean) {
        this._left = left;
    }

    get right() : boolean {
        return this._right;
    }

    set right(right:boolean) {
        this._right = right;
    }

    get space() : boolean {
        return this._space;
    }

    set space(space:boolean) {
        this._space = space;
    }

}