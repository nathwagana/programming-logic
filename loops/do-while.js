const pessoas = [
    {
        nome: "Ayrton",
        idade: 28,
        possuiCnh: true
    },
    {
        nome: "Maria",
        idade: 15,
        possuiCnh: false
    },
    {
        nome: "João",
        idade: 34,
        possuiCnh: false
    }
]

let i = 0;
do {
    if(pessoas[i].idade >= 18 && pessoas[i].possuiCnh) {
        console.log(`O/A ${pessoas[i].nome} possui CNH e tem ${pessoas[i].idade} anos, portanto, pode dirigir`);
        i++;
    } else if (pessoas[i].idade >= 18 && !pessoas[i].possuiCnh) {
        console.log(`O/A ${pessoas[i].nome} tem ${pessoas[i].idade} anos, mas não possui CNH e, por isso, não pode dirigir`);
        i++;
    } else {
        console.log(`O/A ${pessoas[i].nome} tem ${pessoas[i].idade} anos, por isso não pode dirigir`);
        i++;
    }
} while(i < pessoas.length);