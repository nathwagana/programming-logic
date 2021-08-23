/* 
Para entrar em um brinquedo no parque de diversões existem as seguintes regras:
- Ter mais de 15 anos ou;
- Estar acompanhado de um adulto e ter mais de 1.60 de altura.
*/

const pessoa = {
    nome: "Kléber",
    idade: 15,
    altura: 1.59,
    possuiAcompanhante: true
};

if (pessoa.idade > 15 || (pessoa.possuiAcompanhante && pessoa.altura > 1.60)) {
    console.log(`${pessoa.nome} pode entrar no brinquedo`);
} else {
    console.log(`${pessoa.nome} não pode entrar no brinquedo`);
}