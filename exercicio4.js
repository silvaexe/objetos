function minhaFuncao(pessoa)  {
    const novo = {
        ...pessoa,
        comidaspreferidas:["Lasanha","Pizza",'Churarsco'],
        melhorAmigo:{
            nome:'Wesley',
            idade:18
        }
    };

        
    

    console.log(`O nome da pessoa é ${novo.nome} e suas comidas preferidas são ${novo.comidaspreferidas[0]}, ${novo.comidaspreferidas[1]} e ${novo.comidaspreferidas[2]}. Seu melhor amigo se chama ${novo.melhorAmigo.nome} e tem ${novo.melhorAmigo.idade} anos`);
}

const pessoa  ={
    nome: 'Matheus',
    idade: 18,
    generoMusical: 'Pagode'
}

minhaFuncao(pessoa)
 



