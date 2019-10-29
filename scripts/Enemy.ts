import Participants from "./Participants";
import AirplaneT from "../interfaces/AirplaneT";
import Canvas from "./Canvas";

export default class Enemy extends Participants {
    
    constructor(sprite: HTMLImageElement) {
        super(Enemy.setPosition());
        this.sprite = sprite;
        this.airplane.velocity = 0.30;
    }

    private static setPosition() : AirplaneT {
        let canvas: Canvas = Canvas.getCanvas();
        let width = 44;
        let height = 32;
        let y = Math.abs(Math.random() * canvas.height - height);
        let x = canvas.width + width;
        let direction = 'left';
        return {x,y,width,height,direction};
    }

    public die() {
        super.die();
    }

}