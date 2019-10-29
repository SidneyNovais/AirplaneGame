import AirplaneT from "../interfaces/AirplaneT";
import DrawAirplaneT from "../interfaces/DrawAirplaneT";
import BulletT from "../interfaces/BulletT";
import Player from "./Player";

export default class Canvas implements DrawAirplaneT {
    private _context:CanvasRenderingContext2D;
    private _x:number;
    private _y:number;
    private _width:number;
    private _height:number;
    private _frame:HTMLCanvasElement;
    private static instance: Canvas;

    private constructor() {
        this.x       = 0;
        this.y       = 0;
        this.width   = window.innerWidth;
        this.height  = window.innerHeight;
        this.frame   = document.getElementById("game") as HTMLCanvasElement;
        this.context = this.frame.getContext('2d') as CanvasRenderingContext2D;

        this.frame.width = this.width;
        this.frame.height = this.height;
    }

    static getCanvas() {
        if(!Canvas.instance) {
            Canvas.instance = new Canvas();
        }

        return Canvas.instance;
    }

    static limit(player: Player) : void {
        let {airplane} = player;
        if(airplane.x <= Canvas.instance.x)
            airplane.x = Canvas.instance.x;
        if(airplane.x+airplane.width >= Canvas.instance.x + Canvas.instance.width) 
            airplane.x = Canvas.instance.width - airplane.width;
        if(airplane.y <= Canvas.instance.y)
            airplane.y = Canvas.instance.y;
        if(airplane.y+airplane.height >= Canvas.instance.y + Canvas.instance.height)
            airplane.y = Canvas.instance.height - airplane.height;
    }

    public drawBackground(color: string) : void {
        Canvas.instance.context.fillStyle = `#${color}`;
        Canvas.instance.context.fillRect(this.x,this.y,this.width, this.height);
    }

    public drawAirplane(airplane: AirplaneT, sprite: HTMLImageElement) : void {
        Canvas.instance.context.drawImage(sprite, airplane.x, airplane.y, airplane.width, airplane.height);
    }

    public drawBullet(bullet: BulletT) {
        Canvas.instance.context.fillStyle = "#000";
        Canvas.instance.context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }

    public drawScore(score: number) {
        Canvas.instance.context.font = "13px Monaco";
        Canvas.instance.context.strokeText(`Score: ${score}`, 10,10);
        Canvas.instance.context.strokeText(`Best: ${localStorage.getItem('best')}`,80,10);
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

    get width(): number {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
    }

    get height(): number {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }

    get frame() : HTMLCanvasElement {
        return this._frame;
    }

    set frame(frame: HTMLCanvasElement) {
        this._frame = frame;
    }

    get context(): CanvasRenderingContext2D {
        return this._context;
    }

    set context(context: CanvasRenderingContext2D) {
        this._context = context;
    }

}