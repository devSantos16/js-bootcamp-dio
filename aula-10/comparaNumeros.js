var compararNumeros = function(numero1, numero2){
    let soma = numero1 + numero2;
    let verificarNumerosIguais = numero1 === numero2 ? 'Os numeros são Iguais.' : 'Os numeros não são iguais.';

    let verificarNumeroMenorQue10 = verificarNumero(soma, 10);
    let verificarNumeroMenorQue20 = verificarNumero(soma, 20);

    console.log(verificarNumerosIguais + " " + verificarNumeroMenorQue10 + " " + verificarNumeroMenorQue20);
    
}

compararNumeros(8,2);

function verificarNumero(soma, numero){

    if(soma == numero){
        return `Soma dos numeros é igual que ${numero}.`;
    }

    return soma <= numero ? `Soma dos numeros é menor que ${numero}.` : `Soma dos numeros é maior que ${numero}.`;
}




