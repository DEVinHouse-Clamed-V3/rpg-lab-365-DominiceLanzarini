import Arma from "./Arma";
import Personagem from "./Personagem";

export default class Inimigo extends Personagem {
    //construtor
    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
        super(nome, vida, forca, arma);
    }

    //metodo sobrescrito
    atacar(alvo: Personagem): void {
        console.log(`${this.getNome()} está atacando ${alvo.getNome()}!`);


        const ataqueBemSucedido = Math.random() > 0.2;

        if (!ataqueBemSucedido) {
            console.log(`${this.getNome()} errou o ataque!`);
            return;
        }

        const dano = super.calcularDano();
        alvo.receberDano(dano);
        console.log(`${this.getNome()} causou ${dano} de dano a ${alvo.getNome()}.`);
    }


  
    comportamentoAleatorio(jogador: Personagem): void {
        const acao = Math.random() > 0.6 ? "atacar" : "esperar";

        if (acao === "atacar") {
            this.atacar(jogador);
        } else {
            console.log(`${this.getNome()} está observando o jogador...`);
        }
    }
}

