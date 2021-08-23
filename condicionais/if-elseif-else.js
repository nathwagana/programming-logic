/* 
Foi realizada uma pesquisa entre 10 alunos de uma turma para saber:
- Quantos torcem para o Palmeiras;
- Quantos torcem para o Corinthians;
- E quantos torcem para outros times.
*/

const alunos = [
    {
        nome: "Amanda",
        time: "Palmeiras"
    },
    {
        nome: "Rupert",
        time: "Palmeiras"
    },
    {
        nome: "Júnior",
        time: "Corinthians"
    },
    {
        nome: "Kelly",
        time: "Santos"
    },
    {
        nome: "Rita",
        time: "Palmeiras"
    },
    {
        nome: "Lucas",
        time: "Corinthians"
    },
    {
        nome: "Jean",
        time: "São Paulo"
    },
    {
        nome: "Nath",
        time: "Palmeiras"
    },
    {
        nome: "Ayrton",
        time: "São Paulo"
    },
    {
        nome: "Maite",
        time: "Palmeiras"
    },
]

let totalPalmeiras = 0;
let totalCorithians = 0;
let totalOutros = 0;

for (let aluno of alunos) {
    if (aluno.time === "Palmeiras") {
        totalPalmeiras++;
    } else if (aluno.time === "Corinthians") {
        totalCorithians++;
    } else {
        totalOutros++;
    }
}

console.log(`O resultado final foi: Palmeiras - ${totalPalmeiras}, Corinthians - ${totalCorithians}, Outros - ${totalOutros}`);