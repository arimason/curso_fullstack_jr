const msg = `asdfagdfgdbv asd`
const msg2 = `bhgngk`

console.log(msg.length)
console.log(msg.substring(5, 1))
// quebra a string em array a partir de um parametro estabelecido
console.log(msg2.split(`df`))
//concatenar
console.log(msg + msg2)
console.log(msg.concat(msg2))
// substitui caracteres por outros
console.log(msg.replace(`df`, `AAA`)) //substitui apenas o primeiro conjunto encontrado, para substituir todos encontrados deverá utilizar-se o regex