const pessoa = {
    nome: "Matheus",
    apelidos : ["Mathias","Theus","Mat"]
}

function apresentarPessoa(objetos) {
    console.log(`Olá, meu nome é ${objetos.nome} e meus  apelidos são ${objetos.apelidos}`);
    
    

    
}

apresentarPessoa(pessoa);

const apelidosNovos = { 
    ...pessoa, 
    apelidos: ["Matheusinho", "Matheuzão", "Teuzinho"] 
};


function apresentarPessoa(objetos) {
    console.log(`Olá, meu nome é ${objetos.nome} e meus  apelidos são ${objetos.apelidos}`);

}

apresentarPessoa(apelidosNovos);
