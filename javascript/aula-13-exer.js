let num1 = 200
let num2 = 100
let x = 0

function verif(numero1, numero2) {
    if (numero1 > numero2) {
        maior = numero1
        menor = numero2
    } else {
        maior = numero2
        menor = numero1
    }
    return {menor, maior}
}

const result = verif(num1, num2)

for (i = result.menor; i<= result.maior; i++){
    if (i%13 !== 0) {
        x = x + i
    }
}

console.log(`soma: `, x)