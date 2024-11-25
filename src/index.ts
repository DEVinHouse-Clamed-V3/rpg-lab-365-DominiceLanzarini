import Arma from "./Arma";
import Personagem from "./Personagem";
import Inimigo from "./Inimigo";

//instanciando
const vassoura = new Arma ("Vassoura", 45, "Vassoura de palha")
const havaianaDePau = new Arma ("Havaina de Pau" , 90, "Patrocinada")
const voadora = new Arma ("Voadora Lindomar Subzero", 50, "Aquela que você viu no vídeo")
const facao = new Arma ("Facão", 150, "Facão de cortar cana")
const cadeira = new Arma("Cadeira de lata de bar", 110, "Aquelas dobráveis dos anos 90")


const entregadorDePizza = new Inimigo ("Uili Nelson", 200, 20)
const veioNoBar = new Inimigo ("Careca", 100, 40)
const bebadoDaRua = new Inimigo ("Rim", 50, 10)
const namoradoDaPeguete = new Inimigo ("Ricardão", 130, 60)
const traficante = new Inimigo("Bola 8", 80, 30)

const heroi = new Personagem ("Juninho", 400, 40)



console.log("-----------------BRASIL FIGHTS-----------------")

console.log(`Tudo começa quando ${heroi.getNome()} vai ao bar da esquina comprar um Derby...`)
console.log(`Nosso herói ${heroi.getNome()} percebe que tem vários inimigos no bar: o entregar de pizza que chutou seu cachorro caramelo: ${entregadorDePizza.getNome()}; um velho nervoso pra ver futebol: ${veioNoBar.getNome()}; o bêbado da rua que vive pedindo um trocado: ${bebadoDaRua.getNome()}; o namorado da mina que ${heroi.getNome()} está pegando: ${namoradoDaPeguete.getNome()} e  hahaha, claro, o traficante que nosso herói está devendo: ${traficante.getNome()}!`)

console.log(`${heroi.getNome()} só quer comprar seu Derbyzinho de fim de semana mas percebe que terá que passar por seus inimigos antes de entrar no bar!`)

console.log(`${heroi.getNome()} não esperava por essa e prepara-se para...`)
heroi.equiparArma(cadeira)
heroi.atacar(namoradoDaPeguete)

namoradoDaPeguete.equiparArma(voadora)
namoradoDaPeguete.comportamentoAleatorio(heroi)

console.log(`${heroi.getNome()} está com ${heroi.getVida()} de vida`)
console.log(`${namoradoDaPeguete.getNome()} está com ${namoradoDaPeguete.getVida()} de vida`)

console.log(`${veioNoBar.getNome()} está irritado com a situação pois não consegue assistir em paz seu time de futebol Ceará Sporting Clube..`)
console.log(`Este verdadeiro torcedor com ${veioNoBar.getForca()} de força e ${veioNoBar.getVida()} de vida decide...`)
veioNoBar.equiparArma(vassoura)
veioNoBar.atacar(heroi)

heroi.equiparArma(cadeira)
heroi.atacar(veioNoBar)

console.log(`${heroi.getNome()} está com ${heroi.getVida()} de vida`)
console.log(`${namoradoDaPeguete.getNome()} está com ${namoradoDaPeguete.getVida()} de vida`) 

console.log(`Som de fundo: Caramelo latindo, cachorros de rua confusos, galinha voando...`)

console.log(`${traficante.getNome()} está com dó de ${heroi.getNome()} e decide ajudá-lo com a intenção de aumentar os juros de sua dívida..`)
traficante.equiparArma(facao)
traficante.atacar(bebadoDaRua)

console.log(`${heroi.getNome()} está com ${heroi.getVida()} de vida`)
console.log(`${traficante.getNome()} está com ${traficante.getVida()} de vida`) 
console.log(`${bebadoDaRua.getNome()} está com ${bebadoDaRua.getVida()} de vida`) 

console.log(`Falta apenas ${heroi.getNome()} lutar contra seu pseudo aliado ${traficante.getNome()} mas...`)