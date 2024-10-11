
let carrinho = [];


const fruta1 = {
    nome: "Maçã",
    disponibilidade: true
};

const fruta2 = {
    nome: "Banana",
    disponibilidade: true
};

const fruta3 = {
    nome: "Laranja",
    disponibilidade: true
};


function adicionarFrutaAoCarrinho(fruta) {
    carrinho.push(fruta);
}


adicionarFrutaAoCarrinho(fruta1);
adicionarFrutaAoCarrinho(fruta2);
adicionarFrutaAoCarrinho(fruta3);


console.log(carrinho);
