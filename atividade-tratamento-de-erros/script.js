let vetor = [1, 2, 3, 4, 5];

const verify = Verificacao(vetor, 4);
console.log(verify);


function Verificacao(array, tamanho) {
    try {
        if (!array || !tamanho) {
            throw new ReferenceError("Envie os parametros");
        }
        else if (typeof (array) !== 'object') {
            throw new TypeError("Informe o tipo certo: Objeto");
        }
        else if (typeof (tamanho) !== 'number') {
            throw new TypeError("Informe o tipo certo: Number");
        }
        else if (tamanho !== array.length) {
            throw new RangeError(`Fora do Range / ${tamanho} | ${array.length}, alterando o tamanho`);
        }
        return array;
    }
    catch (error) {
        console.log(error.message);
        if (error instanceof ReferenceError) {
            console.log(`Erro de Referencia,  Array: ${array}, Tamanho: ${tamanho}`);
            console.log(error.name);
            console.log(error.stack);
        }

        else if (error instanceof TypeError) {
            console.log(`Erro de Tipo,  Array: ${typeof (array)}, Tamanho: ${typeof (tamanho)}`);
        }
        else if (error instanceof RangeError) {
            tamanho = array.length;
            return array;
        }
        else{
            console.log("Erro não esperado" + error.message)
        }
    }
}