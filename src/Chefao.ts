import Personagem from "./Personagem";
import Arma from "./Arma";
import Inimigo from "./Inimigo";

export default class Chefao extends Inimigo {
    //construtor
    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
        super(nome, vida, forca, arma);
    }


    //metodo sobrescrito
    atacar(alvo: Personagem): void {
        console.log(`${this.getNome()} está atacando ${alvo.getNome()}!`);


        const ataqueBemSucedido = Math.random() > 0.1;

        if (!ataqueBemSucedido) {
            console.log(`${this.getNome()} errou o ataque!`);
            return;
        }

        const dano = this.calcularDano();
        alvo.receberDano(dano);
        console.log(`${this.getNome()} causou ${dano} de dano a ${alvo.getNome()}.`);
    }

}