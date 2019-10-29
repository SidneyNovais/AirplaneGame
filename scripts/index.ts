import GameControl from './GameControl';

class Game {

    constructor() {
        if(!localStorage.getItem('best')) localStorage.setItem('best', "0");
        new GameControl();
    }
}

new Game();