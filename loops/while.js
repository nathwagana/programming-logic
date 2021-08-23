const frutasParaComprar = ["Banana", "Maçã", "Pêra", "Uva", "Caqui"];

let i = 0;
while (i < frutasParaComprar.length) {
    if (i == frutasParaComprar.length - 1) {
        console.log(`A última fruta acaba de ser comprada: ${frutasParaComprar[i]}`);
    } else {
        console.log(`Ainda existem frutas para serem compradas. Próxima: ${frutasParaComprar[i]}`);
    }
    i++;
}