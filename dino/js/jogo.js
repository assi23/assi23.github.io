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
        },50);
    } else{
            //incrementar o dino
            dinoPosition += 20; 
            //atualiza a posição na tela
            dino.style.bottom = dinoPosition + 'px';
        }
    },30);
    
};