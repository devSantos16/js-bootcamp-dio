document.getElementById('button-event').addEventListener("click", function () {
    const textoButton = document.getElementById('input-event').value;

    if (!textoButton) {
        window.alert('Erro, o campo não contem texto!');
        return;
    }

    window.alert(VerificarPalindromo(textoButton));
});

function VerificarPalindromo(palavra) {
    // Palavra reversa
    let palavraQuebrada = palavra.split("").reverse().join('');
    let palavraEspacoQuebrada = palavra.split(" ").join('');

    return palavraQuebrada.toLowerCase() == palavraEspacoQuebrada.toLowerCase() ? "É Palindromo" : "Não é Palindromo";
}