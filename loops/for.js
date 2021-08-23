for (let i =0; i <= 20; i++) {
    if (i % 2 == 0 && i != 20) {
        console.log(`Número par: ${i}, continuando o loop.`);
    } else if (i % 2 == 1) {
        console.log(`Número ímpar: ${i}, continuando o loop.`);
    } else {
        console.log(`Número par: ${i}, fim do loop!`);
    }
}