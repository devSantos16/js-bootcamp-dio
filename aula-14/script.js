const ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Durval', 13, 14, 9, 8];
console.log(VerificarArray(ARRAY));

function VerificarArray(array) {

    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++) {

        if (typeof (array[i]) !== 'number') {
            console.log(`Não é numero: ${array[i]} , REMOVENDO`);
            array.splice(i, 1);
        }
        else if (array[i] % 2 == 0) {
            console.log(`Substituindo ${array[i]} por 0`);
            array[i] = 0;
        }
    }
    return array;

}
