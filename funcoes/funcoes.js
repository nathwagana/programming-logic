function soma(a, b) {
    const soma = a + b;
    console.log("A soma é: " + soma);
}

const subtracao = function(a,b) {
    const subtracao = a - b;
    console.log("A subtração é: " + subtracao);
}

const divisao = (a,b) => {
    const divisao = a / b;
    console.log("A divisão é: " + divisao);
}

const multiplicacao = (a,b) => {
    const multiplicacao = a * b;
    console.log("A multiplicação é: " + multiplicacao);
}

soma(5,2);
subtracao(123,12);
divisao(44,22);
multiplicacao(5,300);