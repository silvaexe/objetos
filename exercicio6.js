const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//Será impresso no console : a informções do  cachorro, as mesmas informações do cachorro mas serão impressas na do gato com o nome mudado para Juba e as da tartaruga a mesma coisa só mudando o nome para Jubo.

// A sintaxe do ...  permite que você copie todas as propriedades de um objeto para outro. É uma forma de  clonar um objeto,e também possa modicar  as propriedades do objeto que foi copiado.


