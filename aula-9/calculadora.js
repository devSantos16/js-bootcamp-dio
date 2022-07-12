var secret_string = 'My Friend';
calculadora();
function calculadora() {
    let n1, n2;
    const operacao = prompt('Escolha uma operação: \n 1 - Soma\n 2 - Subtracao\n 3 - Divisão real\n 4 - Divisão de Inteiro\n 5 - Multiplicação\n 6 - Potenciação');
    let numeroOperacao = Number(operacao);

    
    if (numeroOperacao >= 1 && numeroOperacao <= 6) {
        n1 = Number(prompt('Escolha o numero 1:'));
        n2 = Number(prompt('Escolha o numero 2:'));
    }

    if (!n1 || !n2) {
        window.alert('Erro, informações invalidas');
        calculadora();
        return;
    }

    switch (numeroOperacao) {
        case 1:
            Soma(n1, n2);
            break;
        case 2:
            Subtracao(n1, n2);
            break;
        case 3:
            DivisaoReal(n1, n2);
            break;
        case 4:
            DivisaoInteiros(n1, n2);
            break;
        case 5:
            Multiplicacao(n1, n2);
            break;
        case 6:
            Potenciacao(n1, n2);
            break;
        default:
            calculadora();
            break;
    }
}

function Soma(n1, n2) {
    let operacao = n1 + n2
    window.alert('Soma: ' + operacao);
}

function Subtracao(n1, n2) {
    let operacao = n1 - n2
    window.alert('Subtracao: ' + operacao);
}

function DivisaoReal(n1, n2) {
    let operacao = n1 / n2
    window.alert('Divisão: ' + operacao);
}

function DivisaoInteiros(n1, n2) {
    let operacao = parseInt(n1 / n2);
    window.alert('Divisão: ' + operacao);
}

function Multiplicacao(n1, n2) {
    let operacao = n1 * n2;
    window.alert('Divisão: ' + operacao);
}

function Potenciacao(n1, n2) {
    let operacao = n1 ** n2;
    window.alert('Potenciacao: ' + operacao);
}