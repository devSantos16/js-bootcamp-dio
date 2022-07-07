var numeros = [1,2,3,4,5,6,7,8,9,10]
var resultado = returnEvenValues(numeros);

for(var i = 0; i < resultado.length; i++){
    console.log(resultado[i]);
}

function returnEvenValues(vetor){
    var vetorPares = [];
    for(var i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            vetorPares.push(vetor[i]);
        }
    }
    return vetorPares;
}