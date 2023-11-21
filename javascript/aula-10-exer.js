// entrada
let tempo = 22
let veloc = 67
const autonomia = 12 // km/l
// function 
function consumo(item1, item2) {
    litros = (item1 * item2)/autonomia
    return litros.toFixed(3)
}
// saída
console.log(`Consumo: `, consumo(tempo, veloc))
