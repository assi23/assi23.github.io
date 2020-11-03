console.log('Início do jogo');

const dino = document.querySelector('.dino');
// console.log(dino);

let dinoPosition = 0;
let estaPulando = false;

//verificar se a tecla espaço foi pressionada
document.addEventListener('keydown', (event)=>{
    //console.log(event.code); //ajuda a verficar qual tecla esta pressionada monstrando o code da tecla
    if (event.code === 'Space') 
        if (!estaPulando) pular(); // ! = não
});

function pular(){
    let intervaloPulo = setInterval(() => {
        estaPulando = true;
        if (dinoPosition >= 250) {
            console.log('topo!');   
            clearInterval(intervaloPulo)
            let intervalQueda = setInterval(()=> {
            if(dinoPosition <= 0) {
                console.log('chão!');
                estaPulando = false;
                clearInterval(intervalQueda);
            }else {
            //decrementar a posição do dino
            dinoPosition -= 20;
            //atualizar a posição na tela
            dino.style.bottom = dinoPosition + 'px';
            }
        },20);
    } else{
            //incrementar o dino
            dinoPosition += 20; 
            //atualiza a posição na tela
            dino.style.bottom = dinoPosition + 'px';
        }
    },20);
    
}

//criação do cacto 
const background = document.querySelector('.background');

function criarCacto (){
    let cactoPosition = 1000;
   const cacto = document.createElement ('div');
   //tempo aleatorio entre 1 e 6 segundos para criação dos cactos
   let tempoRandom = Math.random() * 6000 + 100;
   //adiciona uma class ao cacto
   cacto.classList.add('cacto');
   //posiciona o cacto a 1000px a esquerda
   cacto.style.left = 1000 + 'px';
   //aparece o cacto na tela
   background.appendChild(cacto);

   let intervaloEsquerda = setInterval(() => {
    if(cactoPosition <= -60){
        clearInterval(intervaloEsquerda);
        //remover cacto da tela
        background.removeChild(cacto);
    } else{
        //movimentação do cacto
        cactoPosition -= 10;
        cacto.style.left = cactoPosition + 'px';
    }
   },20);
   let tempoCacto = setTimeout(criarCacto, tempoRandom);
}

criarCacto();