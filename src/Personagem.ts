import Arma from './Arma'

export default class Personagem {
    //atributos
    private nome: string;
    private vida: number;
    private forca: number;
    private arma: Arma | null;


    //construtor
    constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.arma = arma;
    }


    //getters
    getNome(): string {
        return this.nome;
    }

    getVida(): number {
        return this.vida;
    }

    getForca(): number {
        return this.forca
    }

    getArma(): any {
        return this.arma;
    }


    //setters
    setNome(nome: string): void {
        this.nome = nome;
    }

    setVida(vida: number): void {
        this.vida = vida > 0 ? vida : 0;
    }

    setForca(forca: number): void {
        if (forca < 0) throw new Error("A força não pode ser negativa.");
        this.forca = forca;
    }

    setArma(arma: Arma | null): void {
        this.arma = arma;
    }


    //métodos

    equiparArma(arma: Arma): void {
        this.arma = arma;
        console.log(`${this.nome} equipou a arma: ${arma.getNome()}`);
    }



    private calcularDano(): number {
        return this.forca + (this.arma ? this.arma.getDano() : 0);
    }


    atacar(alvo: Personagem): void {
        console.log(`${this.nome} está atacando ${alvo.getNome()}!`);

        const ataqueBemSucedido = Math.random() > 0.5;

        if (!ataqueBemSucedido) {
            console.log(`${this.nome} errou o ataque!`);
            return;
        }

        const dano = this.calcularDano();
        alvo.receberDano(dano);
        console.log(`${this.nome} causou ${dano} de dano a ${alvo.getNome()}.`);
    }



    receberDano(dano: number): void {
        if (dano < 0) throw new Error("O dano recebido não pode ser negativo.");
        this.setVida(this.getVida() - dano);
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.getVida()}`);

        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }
}




