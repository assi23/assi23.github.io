let valor;
let result;

function btn(num){ //exibi os numeros na tela
    valor = document.calc.visor.value += num; //concatena os números no click
}

function reset(){ //faz o botao C funfar
    document.calc.visor = '';
}

function calculate(){ //faz as operações funfar
    result = eval(valor);// efetua todas as operações
    document.calc.visor.value = result.toLocaleString('pt-br');
}