let valor;
let result;

function btn(num){ //exibi os numeros na tela
    valor = document.calc.visor.value += num;
}

function reset(){ //faz o botao C funfar
    document.calc.visor = '';
}

function calculate(){ //faz as operações funfar
    result = eval(valor);
    document.calc.visor.value = result.toLocaleString('pt-br');
}