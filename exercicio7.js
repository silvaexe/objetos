function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//Será  impresso: false e undefined
//Ocoreu undefined porque a propriedade altura não existe no objeto pessoa. Por isso, não foi possível  acessar ela. E o false  foi impresso porque a propriedade backender existe no objeto pessoa. Por isso, foi possível  acessar ela.  

