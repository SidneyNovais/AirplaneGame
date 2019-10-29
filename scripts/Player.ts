import Participants from "./Participants";
import AirplaneT from "../interfaces/AirplaneT";
import Canvas from "./Canvas";

export default class Player extends Participants {
    
    private _score: number;

    constructor(sprite: HTMLImageElement) {
        super(Player.init());
        this.airplane.velocity = 3;
        this.sprite = sprite;
        this.airplane.gun.interval = 1;
        let porcentageReload = this.airplane.gun.firingRange.getTime();
        let now = new Date();
            now.setSeconds(now.getSeconds() + 10);
            console.log(now.getTime());
            console.log(porcentageReload);
    }

    public drawReload() {
        // Canvas.getCanvas().context.fillStyle = "#000";
        // Canvas.getCanvas().context.fillRect(this.airplane.x,this.airplane.y - 10,,3);
    }

    public die() {
        super.die();
    }

    public reset() {
        this.airplane.reset(Player.init());
        this.airplane.gun.interval = 1;
    }

    public static init() : AirplaneT {
        return {
            x: 10,
            y: 15,
            width: 43,
            height: 46,
            direction: 'right'
        }
    }

    get score() : number {
        return this._score;
    }

    set score(score: number) {
        this._score = score;
    }
}