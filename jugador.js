export default class Player {
    constructor(color, pos) {
        this._color = color;
        pos = 0;
        this._pos = pos;
    }

    getId() {
        return this._color;
    }
    
    getPosition() {
        return this._pos;
    }

    setPosition(position) {
        this._pos = position;
    }
}