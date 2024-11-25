export default class Arma {
    //atributos
    private readonly nome: string;
    private readonly descricao: string;
    private dano: number;

    
    //construtor
    constructor(nome: string, dano: number, descricao: string){
        this.nome = nome;
        this.descricao = descricao;
        this.dano = dano;
    }


    //getters
    getNome(): string {
        return this.nome;
    }

    getDescricao(): string {
        return this.descricao;
    }

    getDano(): number {
        return this.dano;
    }


    //setters
    setDano(novoDano: number): void {
        if (novoDano < 0) {
            throw new Error("O dano não pode ser negativo.");
        }
        this.dano = novoDano;
    }
}



