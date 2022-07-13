document.getElementById('button-event').addEventListener("click", function () {
    const textoButton = document.getElementById('input-event').value;

    if (!textoButton) {
        window.alert('Erro, o campo não contem texto!');
        return;
    }

    window.alert(VerificarPalindromo(textoButton));
});

function VerificarPalindromo(palavra) {
    // Palavra não reversa
    let palavraEspacoQuebrada = palavra.split(" ");
    let juntarPalavraQuebrada = palavraEspacoQuebrada.join('');

    // Palavra reversa
    let palavraQuebrada = juntarPalavraQuebrada.split("").reverse();
    let juntarPalavraQuebradaReversa = palavraQuebrada.join('');

    return juntarPalavraQuebrada.toLowerCase() == juntarPalavraQuebradaReversa.toLowerCase() ? "É Palindromo" : "Não é Palindromo";
}