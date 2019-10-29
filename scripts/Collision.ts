import ObjectInfo from "../interfaces/ObjectInfo";

export default class Collision {
    private _objectA: ObjectInfo;

    constructor(objectA: ObjectInfo) {
        this.objectA = objectA;
    }

    public collided(objectB: ObjectInfo) : boolean {
        return(this.objectA.x + this.objectA.width >= objectB.x && this.objectA.x <= objectB.x + objectB.width) 
           && (this.objectA.y + this.objectA.height >= objectB.y && this.objectA.y <= objectB.y + objectB.height)
    }

    get objectA() : ObjectInfo {
        return this._objectA;
    }

    set objectA(objectA : ObjectInfo) {
        this._objectA = objectA;
    }
}