import Gun from "./Gun";
import Canvas from "./Canvas";
import Collision from "./Collision";
import AirplaneT from "../interfaces/AirplaneT";
import ObjectInfo from "../interfaces/ObjectInfo";

export default class Airplane {
    private _x:number;
    private _y:number;
    private _width:number;
    private _height:number;
    private _direction:string;
    private _canvas:Canvas;
    private _gun: Gun;
    private _collision: Collision;
    private _velocity: number;

    constructor(airplane: AirplaneT) {
        this.reset(airplane);
        this.canvas    = Canvas.getCanvas();
        this.collision = new Collision(this);
    }

    public collided(object: ObjectInfo) : boolean {
        return this.collision.collided(object);
    }

    public reset(airplane: AirplaneT) : void {
        this.x         = airplane.x;
        this.y         = airplane.y;
        this.width     = airplane.width;
        this.height    = airplane.height;
        this.direction = airplane.direction;
        this.gun       = new Gun(airplane);
    }

    public draw(sprite: HTMLImageElement) : void {
        this.canvas.drawAirplane(this, sprite);
    }

    public moveUp() : void {
        this.y = this.y - this.velocity;
        this.gun.setGunPosition(this);
    }

    public moveDown() : void {
        this.y = this.y + this.velocity;
        this.gun.setGunPosition(this);
    }

    public moveLeft() : void {
        this.x = this.x - this.velocity;
        this.gun.setGunPosition(this);
    }

    public moveRight() : void {
        this.x = this.x + this.velocity;
        this.gun.setGunPosition(this);
    }

    public fire() :void {
        this.gun.shoot(this);
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

    get gun() : Gun {
        return this._gun;
    }

    set gun(gun: Gun) {
        this._gun = gun;
    }

    get collision() : Collision {
        return this._collision;
    }

    set collision(collision: Collision) {
        this._collision = collision;
    }

    get velocity() : number {
        return this._velocity;
    }

    set velocity(velocity: number) {
        this._velocity = velocity;
    }

}