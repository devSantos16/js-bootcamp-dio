document.getElementById('button-event').addEventListener("click", function () {
    let textoButton = document.getElementById('input-event').value;


    if (!textoButton) {
        window.alert('Erro, o campo não contem texto!');
        return;
    }

    window.alert(VerificarPalindromo(textoButton));
});

function VerificarPalindromo(palavra) {
    // Palavra reversa
    let palavraReversa = palavra.split(" ").join('');
    palavraReversa = palavraReversa.split("").reverse().join("");
    // palavra reajustada
    let palavraAjustada = palavra.split(" ").join('');
    return palavraReversa.toLowerCase() == palavraAjustada.toLowerCase() ? "É Palindromo" : "Não é Palindromo";
}



// metodo só na logica
function VerificarPalindromo2(palavra) {
    let resultado = "";
    let palavraTratada = "";

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == ' ') {
            palavraTratada += "";
        }
        else {
            palavraTratada += palavra[i];
        }
    }

    for (let i = 0; i < palavraTratada.length; i++) {
        resultado += palavraTratada[palavraTratada.length - i - 1];
    }

    return palavraTratada.toLowerCase() == resultado.toLowerCase() ? "É Palindromo" : "Não é Palindromo";
}


// Dividindo o processo em 2
function VerificarPalindromo3(palavra) {
    
    let palavraFiltrada = palavra.split(" ").join('').toLowerCase();
    let tamanho = palavraFiltrada.length;

    for (let i = 0; i < tamanho / 2; i++) {
        if (palavraFiltrada[i] != palavraFiltrada[tamanho - 1 - i]) {
            return "Não é Palindromo";
        }
    }
    return "É Palindromo";
}