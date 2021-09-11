import Dice from "./dado.js";
import Player from "./jugador.js";

let d = new Dice();
let j1 = new Player("rojo", 0);
let j2 = new Player("azul", 0);

class Tablero {
    constructor() {
        this._tablero = new Array(100);
        }

        winner(jugador1, jugador2) {
            if(jugador1.getPosition() > jugador2.getPosition()) {
                return `El ganador es ${jugador1.getId()} en la posición ${jugador1.getPosition()}`;
            } else {
                return `El ganador es ${jugador2.getId()} en la posición ${jugador2.getPosition()}`;
            }
        }
        
        playSL(jugador1, jugador2) {

            while(jugador1.getPosition() < 100 && jugador2.getPosition() < 100) {
                jugador1.setPosition(jugador1.getPosition() + d.throwDice());
                jugador2.setPosition(jugador2.getPosition() + d.throwDice());

                if(jugador1.getPosition() == 52) {
                    jugador1.setPosition(84);
                } else if(jugador1.getPosition() == 67) {
                    jugador1.setPosition(77);
                } else if(jugador1.getPosition() == 50) {
                    jugador1.setPosition(75);
                } else if(jugador1.getPosition() == 32) {
                    jugador1.setPosition(66);
                } else if(jugador1.getPosition() == 29) {
                    jugador1.setPosition(60);
                } else if(jugador1.getPosition() == 16) {
                    jugador1.setPosition(45);
                } else if(jugador1.getPosition() == 8) {
                    jugador1.setPosition(31);
                }else if(jugador1.getPosition() == 5) {
                    jugador1.setPosition(25);
                } else if(jugador1.getPosition() == 3) {
                    jugador1.setPosition(21);
                } else if(jugador1.getPosition() == 18) {
                    jugador1.setPosition(4);
                } else if(jugador1.getPosition() == 20) {
                    jugador1.setPosition(7); 
                } else if(jugador1.getPosition() == 25) {
                    jugador1.setPosition(15);
                } else if(jugador1.getPosition() == 30) {
                    jugador1.setPosition(18);
                } else if(jugador1.getPosition() == 45) {
                    jugador1.setPosition(25);
                } else if(jugador1.getPosition() == 56) {
                    jugador1.setPosition(30);
                } else if(jugador1.getPosition() == 74) {
                    jugador1.setPosition(51);
                } else if(jugador1.getPosition() == 80) {
                    jugador1.setPosition(23);
                } else if(jugador1.getPosition() == 99) {
                    jugador1.setPosition(2);
                }

                if(jugador2.getPosition() == 52) {
                    jugador2.setPosition(84);
                } else if(jugador2.getPosition() == 67) {
                    jugador2.setPosition(77);
                } else if(jugador2.getPosition() == 50) {
                    jugador2.setPosition(75);
                } else if(jugador2.getPosition() == 32) {
                    jugador2.setPosition(66);
                } else if(jugador2.getPosition() == 29) {
                    jugador2.setPosition(60);
                } else if(jugador2.getPosition() == 16) {
                    jugador2.setPosition(45);
                } else if(jugador2.getPosition() == 8) {
                    jugador2.setPosition(31);
                }else if(jugador2.getPosition() == 5) {
                    jugador2.setPosition(25);
                } else if(jugador2.getPosition() == 3) {
                    jugador2.setPosition(21);
                } else if(jugador2.getPosition() == 18) {
                    jugador2.setPosition(4);
                } else if(jugador2.getPosition() == 20) {
                    jugador2.setPosition(7); 
                } else if(jugador2.getPosition() == 25) {
                    jugador2.setPosition(15);
                } else if(jugador2.getPosition() == 30) {
                    jugador2.setPosition(18);
                } else if(jugador2.getPosition() == 45) {
                    jugador2.setPosition(25);
                } else if(jugador2.getPosition() == 56) {
                    jugador2.setPosition(30);
                } else if(jugador2.getPosition() == 74) {
                    jugador2.setPosition(51);
                } else if(jugador2.getPosition() == 80) {
                    jugador2.setPosition(23);
                } else if(jugador2.getPosition() == 99) {
                    jugador2.setPosition(2);
                }
            }

            return this.winner(jugador1, jugador2);
        }
}

let t = new Tablero();

console.log(t.playSL(j1,j2));