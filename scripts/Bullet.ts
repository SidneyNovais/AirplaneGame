import BulletT from "../interfaces/BulletT";
import Canvas from "./Canvas";
import Collision  from "./Collision";
import ObjectInfo from "../interfaces/ObjectInfo";

export default class Bullet {
    private _x:number;
    private _y:number;
    private _width:number;
    private _height:number;
    private _direction:string;
    private _canvas: Canvas;
    private _collision: Collision;

    constructor(bullet: BulletT) {
        this.x         = bullet.x;
        this.y         = bullet.y;
        this.width     = bullet.width;
        this.height    = bullet.height;
        this.direction = bullet.direction;
        this.canvas    = Canvas.getCanvas();
        this.collision = new Collision(this);
    }

    public colliding(object: ObjectInfo) : boolean {
        return this.collision.collided(object);
    }

    public outOfArea() : boolean {
        return this.x <= 0 || this.x + this.width >= this.canvas.width;
    }

    public move() : void {
        if(this.direction === 'left') {
            this.x = this.x - 10;
        } else if(this.direction === 'right') {
            this.x = this.x + 10;
        }
    }

    public draw() : void {
        this.canvas.drawBullet(this);
    }

    get x() : number {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    get y() : number {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }

    get width() : number {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
    }

    get height() : number {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    } 

    get direction() : string {
        return this._direction;
    }

    set direction(direction: string) {
        this._direction = direction;
    }

    get canvas() : Canvas {
        return this._canvas;
    }

    set canvas(canvas: Canvas) {
        this._canvas = canvas;
    }

    get collision() : Collision {
        return this._collision;
    }

    set collision(collision: Collision) {
        this._collision = collision;
    }
}