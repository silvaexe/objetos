const pessoa1 = {
    nome: "Samara",
    idade: 24,
    profissao: "Empacotadora"
};

const pessoa2 = {
    nome: "Yuri",
    idade: 18,
    profissao: "Designer"
};

function minhaFuncao(pessoa) {
    const resultado = [];
    resultado.push(pessoa.nome);
    resultado.push(pessoa.nome.length);
    resultado.push(pessoa.idade);
    resultado.push(pessoa.profissao);
    resultado.push(pessoa.profissao.length);
    
    return resultado;
}

console.log(minhaFuncao(pessoa1));
console.log(minhaFuncao(pessoa2));