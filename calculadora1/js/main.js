let calculaTotal = 0;
let armazenado = "0";
let operadoAnterior = null;
const visor = document.querySelector('.screen');

function iniciar(){
    //adicionando a escuta aos eventos de clique nos botoes
    document.querySelector('.calc-buttons').addEventListener('click',
    function(evento){
        // console.log(`botão clicado: ${evento.target.innerText}`)
        botaoClicado(evento.target.innerText);
    });

}

function botaoClicado(valor){
    if(isNaN(parseInt(valor))){
        manipularSimbolo(valor);
    }else{
        manipularNumero(valor);
    }
    renderizar(); //escreer na tela
};

function manipularNumero(valor){
    if(armazenado === "0") {
        armazenado = valor;
    }else {
        //concatenar os numeros que aparecem na tela
        // abaixo de 15 caracteres limita
        if(visor.innerText.length <= 12 )
          armazenado += valor;
    }
}

function manipularSimbolo(valor){
    switch(valor){
        case 'C':
            armazenado = '0'; ;// string que aparece na tela
            calculaTotal = 0; //valor numerico a sera calculado
            break;
        case '=':
            if(operadoAnterior == null )
                return
            executarOperacao(parseInt(armazenado));
            operadoAnterior = null;
            armazenado = +calculaTotal;
            calculaTotal = 0;
            break;
        case '←':
            if(armazenado.length === 1){
                armazenado = '0';
            }else{
                //removendo um caracter
                armazenado = armazenado.substring(0,armazenado.length-1)
            }
            break;
        case '÷':
        case '×':
        case '−':
        case '+':
            manipularMatematica(valor);
            break;
    }
}

function manipularMatematica(valor){
    if(armazenado == '0'){
        //faz nada
        return;
    }
    const inteiroArmazenado = parseInt(armazenado);
    if(calculaTotal === 0){
        calculaTotal = inteiroArmazenado;
    }else{
        executarOperacao(inteiroArmazenado);
    }
    
    operadoAnterior = valor;
    //zerar oq esta na tela
    armazenado = '0';
}

function executarOperacao(inteiroArmazenado){
    switch(operadoAnterior){
        case '÷':
            calculaTotal /= inteiroArmazenado;
            break;
        case '×':
            calculaTotal *= inteiroArmazenado;
            break;
        case '−':
            calculaTotal -= inteiroArmazenado;
            break;
        case '+':
            calculaTotal += inteiroArmazenado;
            break;
    }
        
}


function renderizar(){
    visor.innerText = armazenado;
}


//aqui é onde tudo começa
//chamada da função iniciar que se encarrega de chamar todas as outras
iniciar();