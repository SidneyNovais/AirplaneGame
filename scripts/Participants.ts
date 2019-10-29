import MoveT from "../interfaces/MoveT";
import Airplane from "./Airplane";
import AirplaneT from "../interfaces/AirplaneT";
import ShotT from "../interfaces/ShotT";
import Observer from "../interfaces/Observer";
import Bullet from "./Bullet";
import Subject from "../interfaces/Subject";
import ObjectInfo from "../interfaces/ObjectInfo";

export default class Participants implements Subject<Participants> {
    
    private _state: string;
    private _airplane: Airplane;
    private _sprite: HTMLImageElement;
    private _observers: Observer<Participants>[] = [];

    constructor(airplane: AirplaneT) {
        this.state = 'live';
        this.airplane = new Airplane(airplane);
    }

    public colliding(object: ObjectInfo) {
        return this.airplane.collided(object);
    }

    public reset(airplane: AirplaneT) {
        this.state = 'live';
        this.airplane.reset(airplane);
    }

    public die() {
        this.state = 'dead';
        this.notifyObserver();
    }

    public move(move: MoveT) : void {
        let {up, down, left, right} = move;

        if(up)    this.up();
        if(down)  this.down();
        if(left)  this.left();
        if(right) this.right();
    }

    public shot(shot: ShotT) : void {
        let {space} = shot;
        if(space) this.shoting();
    }

    public subscribeGun(o: Observer<Bullet>) {
        this.airplane.gun.registerObserver(o);
    }

    public registerObserver(o: Observer<Participants>) {
        this.observers.push(o);
    }

    public removeObserver(o: Observer<Participants>) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    public notifyObserver() {
        this.observers.map(observer => observer.update(this));
    }

    protected up() : void {
        this.airplane.moveUp();
    }

    protected down() : void {
        this.airplane.moveDown();
    }

    protected left() : void {
        this.airplane.moveLeft();
    }

    protected right() : void {
        this.airplane.moveRight();
    }

    protected shoting() : void {
        this.airplane.fire();
    }

    public draw() : void {
        this.airplane.draw(this.sprite);
    }

    get state() : string {
        return this._state;
    }

    set state(state : string) {
        this._state = state;
    }

    get airplane() : Airplane {
        return this._airplane;
    }

    set airplane(airplane : Airplane) {
        this._airplane = airplane;
    }

    get sprite() : HTMLImageElement {
        return this._sprite;
    }

    set sprite(sprite: HTMLImageElement) {
        this._sprite = sprite;
    }

    get observers() : Observer<Participants>[] {
        return this._observers;
    }

    set observers(observer: Observer<Participants>[]) {
        this._observers = observer;
    }

}