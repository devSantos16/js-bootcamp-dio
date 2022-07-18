// Crie uma função que recebe o vetor alunos e um número que irá representar a média final;
// Percorra o vetor e popule um novo vetor auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
// Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

let vetor = [{ nome: 'Pedro', nota: 10 },
{ nome: 'joao', nota: 7 },
{ nome: 'caio', nota: 10 }];

let MediaFinal = (vetor) => {
    let media = 0;
    for (let i = 0; i < vetor.length; i++) {
        const { nome, nota } = vetor[i];
        if (nota < 0 || nota > 10) {
            console.log(`O aluno ${nome} está com a nota incorreta, informe corretamente !`);
            console.log(`Nota do aluno: ${nota}`);
            vetor.splice(i, 1);
        }
        else {
            media += nota;
        }
    }
    return media / vetor.length;
}

const media = MediaFinal(vetor);
const vetorAlunosMedia = VerificarMediaDosAlunos(vetor, media);
console.log(vetorAlunosMedia);


function VerificarMediaDosAlunos(vetor, media) {
    vetorAuxiliar = []
    for (let i = 0; i < vetor.length; i++) {
        const { nome, nota } = vetor[i]
        if (nota >= media) vetorAuxiliar.push(nome);
    }
    return vetorAuxiliar;
}



