import AirplaneT from "../interfaces/AirplaneT";
import Bullet from "./Bullet";
import Subject from "../interfaces/Subject";
import Observer from "../interfaces/Observer";

export default class Gun implements Subject<Bullet> {

    private _x:number;
    private _y:number;
    private _firingRange:Date = new Date();
    private _interval:number = 3;
    private _observers: Observer<Bullet>[] = [];
    
    constructor(airplane: AirplaneT) {
        this.setGunPosition(airplane);
    }

    public setGunPosition(airplane: AirplaneT): void {
        if(airplane.direction === 'left') {
            this.x = airplane.x;
            this.y = airplane.y + (airplane.height / 2);
        } else if (airplane.direction === 'right') {
            this.x = airplane.x + airplane.width;
            this.y = airplane.y + (airplane.height / 2);
        }
    }

    public shoot(airplane: AirplaneT) : void {
        let now = new Date();
        if(now.getTime() >= this.firingRange.getTime()) {
            let bullet: Bullet = new Bullet({
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
    }

    public registerObserver(o: Observer<Bullet>) {
        this.observers.push(o);
    }

    public removeObserver(o: Observer<Bullet>) {
        let index = this.observers.indexOf(o);
            this.observers.splice(index, 1);
    }

    public notifyObserver(bullet: Bullet) {
        this.observers.map(o => o.update(bullet));
    }

    get x() : number {
        return this._x;
    }

    set x(x:number) {
        this._x = x;
    }

    get y() : number {
        return this._y;
    }

    set y(y:number) {
        this._y = y;
    }

    get firingRange() : Date {
        return this._firingRange;
    }

    set firingRange(date: Date) {
        this._firingRange = date;
    }

    get interval() : number {
        return this._interval;
    }

    set interval(interval: number) {
        this._interval = interval;
    }
    
    get observers() : Observer<Bullet>[] {
        return this._observers;
    }

    set observers(observer: Observer<Bullet>[]) {
        this._observers = observer;
    }
 }