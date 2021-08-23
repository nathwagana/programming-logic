const cadastros = [
    {
        nome: "Bruna",
        idade: 17,
        endereco: ""
    },
    {
        nome: "Emari",
        idade: 41,
        endereco: "Rua Papá, 58"
    },
    {
        nome: "Zaquias",
        idade: "",
        endereco: "Rua das Flores, 34"
    }
]

for (let cadastro of cadastros) {
    const nome = cadastro.nome || "Nome não informado";
    const idade = cadastro.idade || "Idade não informado";
    const endereco = cadastro.endereco || "Endereço não informado";
    console.log("Nome: ", nome, ", Idade: ", idade, ", Endereço: ", endereco);
}