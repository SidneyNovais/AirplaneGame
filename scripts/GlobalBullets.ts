import Observer from "../interfaces/Observer";
import Bullet from "./Bullet";
import Participants from "./Participants";

export default class GlobalBullets implements Observer<Bullet> {

    private bullets:Bullet[] = [];

    public update(bullet: Bullet) : void {
        this.bullets.push(bullet);
    }

    public drawBullets() : void {
        this.bullets.map(bullet => bullet.draw());
    }

    public moveBullets() : void {
        this.bullets.map(bullet => {
            bullet.move();
            if(bullet.outOfArea()) {
                let index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
            }
        });
    }

    public collidedBullets(participants: Participants[]) : void {
        this.bullets.map(bullet => {
            participants.map(participant => {
                if(bullet.colliding(participant.airplane)) {
                    let indexB = this.bullets.indexOf(bullet);
                    let indexP = participants.indexOf(participant);
                    if(bullet.direction !== participant.airplane.direction) {
                        this.bullets.splice(indexB, 1);
                        participant.die();
                        participants.splice(indexP, 1);
                    }
                }
            })
        })
    }

    public reset() {
        this.bullets = [];
    }

}