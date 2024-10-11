const filme  = { 
    nome: "resgate 2",
    ano: 2023,
    diretor: "Sam Hargrave",
    elenco: ['Chris Hemsworth', 'Golshifteh Farahani' , 'Olga Kurylenko' , 'Idris Elba'] ,
    viu: true
    }
filme.personagem = ["Tyler Rake","Nik Kham","Mia","Alcott"]

console.log(`${filme.elenco [0]} interpreta  ${filme.personagem[0]}`)
console.log(`${filme.elenco [1]} interpreta  ${filme.personagem[1]}`)
console.log(`${filme.elenco [2]} interpreta  ${filme.personagem[2]}`)
console.log(`${filme.elenco [3]} interpreta  ${filme.personagem[3]}`)

filme.elenco [0]="Xuxa"

console.log(filme);