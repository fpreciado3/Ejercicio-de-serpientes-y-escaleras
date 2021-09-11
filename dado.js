export default class Dice {
    throwDice() {
        return Math.floor(Math.random()*6 + 1);
    }
}