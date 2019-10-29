export default class Spawn {

    private lastSpawn: Date = new Date();
    private _intervalRespawn: number;

    constructor(intervalRespawn: number) {
        this.intervalRespawn = intervalRespawn;
    }

    public execute(callback) : void {
        let now = (new Date()).getTime();

        if(now >= this.lastSpawn.getTime()) {
            callback();
            this.lastSpawn = new Date();
            this.lastSpawn.setSeconds(this.lastSpawn.getSeconds() + this.intervalRespawn);
        }
    }

    get intervalRespawn() : number {
        return this._intervalRespawn;
    }

    set intervalRespawn(interval : number) {
        this._intervalRespawn = interval;
    }


}