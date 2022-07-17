var Objeto = {
    nome: "João",
    Emanuel: {
        nome: "Trakinas",
        valor: 20.60
    }
}

var array = [Objeto, 1, true];

//i     // iteravel
for (obj in Objeto) {
    if (Objeto[obj] == Objeto['Emanuel']) {
        Objeto['Emanuel'].nome = "Coco";
        Objeto['Emanuel'].valor = 30.60;

        for (obj in Objeto['Emanuel']) {
            console.log(Objeto['Emanuel'][obj]);
        }
    }
}

for (vetor of array) {
    console.log(vetor);
    if (vetor == Objeto) {
        console.log(vetor['nome']);
    }
}
let i = 0
do {
    i++;
    console.log('Oi');
} while (i !== 2);
