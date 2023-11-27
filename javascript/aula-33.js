const lista = [
    {
        nome: 'jose',
        idade: 32
    },
    {
        nome: 'maria',
        idade: 30
    },
    {
        nome: 'vivian',
        idade: 31
    },
    {
        nome: 'joaquim',
        idade: 34
    },
    {
        nome: 'didi',
        idade: 33
    },
    {
        nome: 'priscilla',
        idade: 35
    },
]

const resultado= lista.some((obj) => obj.idade > 50)
const resultado2= lista.every((obj) => obj.idade > 29)


console.log("resultado: ", resultado)
console.log("resultado2: ", resultado2)
