export default class Sprites {

    private _airplanes:Array<HTMLImageElement>;

    constructor(paths: string[]) {
        this.airplanes = paths.map(path => {
            let img: HTMLImageElement = new Image();
                img.src = path;
              
            return img;
        });
    }

    get airplanes() : Array<HTMLImageElement> {
        return this._airplanes;
    }

    set airplanes(spritesAirplane: HTMLImageElement[]) {
        this._airplanes = spritesAirplane;
    }

}