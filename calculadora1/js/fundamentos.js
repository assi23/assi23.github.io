//Para ver essa mensagem é necessário pressionar f12 no navegador
console.log ("Fundamentos.js")

//Criação de variável
// modelo da escrita lowerCamelCase
//const = constante valor que n muda
const aluguelMensal = 500;
const aluguelAnual = 12 * aluguelMensal;

//para mostrar no console concatenamos a frase q esta entre aspas mais a constante
console.log('Aluguel Anual = ' + aluguelAnual);

//tipos strings
const primeiroNome = "Guilherme";     //let pode variar ou alterar
const segundoNome = "Assi";         //é constante 

//primeiroNome = 'Geraldo'; //aspas duplas "" ou simples ''
//é pra dar erro pois estou alterando a const
//segundoNome =  'Silva';  //podem ser usadas

const idade = 17;       //número inteiro (int)
const altura = 1.80;    //Número real (float)
const peso = 59;


//concatenação de strings e números
let frase1 = "Meu nome é " + primeiroNome + " " + segundoNome + 
", tenho " + idade + " anos, minha altura é de " + 
altura + " metros, e peso " + peso + "kg. Este sou eu!";

console.log(frase1);

//uso de template String para escrever uma frase
//ao invés de aspas usa crase
// essa barra significa que continua a frase caso contrario ela pularia linha
const frase2 = `Meu nome é ${primeiroNome} ${segundoNome}, tenho \
 ${idade} anos, minha altura é de ${altura} metros, e peso ${peso} kg. 
 Este sou eu! `;

 console.log(frase2);

 //variável booleano
 // variavel true or false
 const ceuEhAzul = true; 
 console.log('Tipo da variável Céu é azul:' + typeof(ceuEhAzul));

 //uso em controle de fluxo com If - else
 if(ceuEhAzul) {
     console.log("O céu é azul");
 } else{
     console.log("Eu pensava que o céu era azul.")
 }

 //controle de fluxo usando comparação
 if (1 + 1 === 2) {
     console.log("1 + 1 nem sempre é 2!");
     console.log(typeof(1+1===2));
 }else {
     console.log("impossível!");
 }

 //Controle de fluxo composto else if
 let amigosNoCinema = 10;
 if(amigosNoCinema === 0) {
     console.log("Vai sobrar mais pipoca.");
 }else if(amigosNoCinema < 10) {
     console.log("Vai dar para ver o filme sussa!")
 }else {
     console.log("A gente veio aqui para fazer festa!")
 }

 // Repetição de uma instrução
 amigosNoCinema = 0;
 amigosNoCinema = amigosNoCinema + 1; //incremento de 1
 amigosNoCinema = amigosNoCinema + 1; //incremento de 1
 amigosNoCinema = amigosNoCinema + 1; //incremento de 1
 amigosNoCinema = amigosNoCinema + 1; //incremento de 1
 amigosNoCinema = amigosNoCinema + 1; //incremento de 1
 amigosNoCinema = amigosNoCinema + 1; //incremento de 1
 amigosNoCinema = amigosNoCinema + 1; //incremento de 1
 amigosNoCinema = amigosNoCinema + 1; //incremento de 1
 amigosNoCinema = amigosNoCinema + 1; //incremento de 1

 console.log(`amigos no cinema: ${amigosNoCinema}`)

 //repetição usando laço ou loop
amigosNoCinema = 0;
while (amigosNoCinema < 10) {

    //repetir enquanto amigosNoCinema for menor do que 10
    amigosNoCinema += 1; //incremento de 1
}; 

console.log(`[while] amigos no cinema: ${amigosNoCinema}`);

amigosNoCinema = 0;
for (let i = 0; i < 10; i++) {
    amigosNoCinema++; //incremento de 1
}

console.log (`[for] amigos no cinema:${amigosNoCinema}`);

//Função
function adicionarDois(numero) {
    //esta função retorna o parâmetro 'numero'
    //adicionado o 2
    return numero + 2;
}

const respostaFinal = adicionarDois(8);
console.log (`Resposta final = ${respostaFinal}`);

function digaOlah(primeiroNome, segundoNome, titulo,saudacao) {
    return`${primeiroNome} ${segundoNome}, ${titulo}, ${saudacao}`; 
}

console.log(digaOlah('Guilherme','Assi','aluno','ohayo!'))
console.log(digaOlah('Geraldo','Silva','aluno','salve!'))

//visibilidade e escopo
//escopo e oq aparece dentro das chaves da função
function adicionarCinco(numero) {
    //variavel criada dentro da função 
    //não pdoe ser vista fora dela
    const total = numero + 5;
    return total;
}

// adicionarCinco(25);
// console.log("o valor total é: " + total);

console.log("o valor total é: " + adicionarCinco(25));

//objeto
const pessoa = {
    primeiroNome:'Guilherme',
    segundoNome: 'Assi',
    peso: 59,
    altura: 1.80,
    idade:17
};

console.log(pessoa);

console.log("Objeto inteiro: " + pessoa);
const frase = `${pessoa.primeiroNome} ${pessoa.segundoNome}, tem ${pessoa.idade} anos, \
pesa ${pessoa.peso} kg e mede ${pessoa.altura} metros.`

console.log(frase);

//objeto com função
const pessoa2 = {
    primeiroNome:'Guilherme',
    segundoNome: 'Assi',
    peso: 59,
    altura: 1.80,
    idade:17,
    imc(){
        const valor = this.peso/(this.altura*this.altura)
        return valor;
    }
};

console.log(pessoa2.primeiroNome + " tem imc igual " + pessoa2.imc());

//emagrecendo o guilherme
pessoa2.peso = 50;
console.log("Emagrecimento do Guilherme! peso: " + pessoa2.peso)
console.log(pessoa2);
console.log(pessoa2.primeiroNome + " tem imc igual " + pessoa2.imc());

//objeto de objeto - notação Json
const pessoa3 = {
    nome: {
        primeiro: "Guilherme",
        segundo:"Assi"
    },
    endereco: {
        rua: "dos bobos",
        numero: '0',
        cidade: 'Brusque'
    }
}

console.log(`${pessoa3.nome.primeiro} ${pessoa3.nome.segundo} \
mora na rua ${pessoa3.endereco.rua} Número ${pessoa3.endereco.numero} \
na cidade de ${pessoa3.endereco.cidade}`);

//Arrays com colchete
const diaDaSemana = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
];

console.log(diaDaSemana);
console.log(diaDaSemana[0]); //Domingo  
console.log(diaDaSemana[5]); //Sexta

for(let i=0; i<7; i++) //n pode colocar ; se n encerra
    console.log(`O dia de hoje é ${diaDaSemana[i]}`);

//Array de objetos
const curso = [
    {professor: 'Tarcísio', UCr: 'LWEB'},
    {professor: 'Rodrigo O.', UCr: "CMBD"},
    {professor:'Rozana', UCr: 'Inglês'}
];

for(let i=0; i<curso.length; i++)
   console.log(`Nome ${curso[i].professor} - UCr: ${curso[i].UCr}`)


  