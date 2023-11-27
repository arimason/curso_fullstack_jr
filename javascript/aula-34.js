const lista = [
    {
        nome: 'jose',
        idade: 32,
        cartoes: ['123', '1234']
    },
    {
        nome: 'maria',
        idade: 30,
        cartoes: ['123', '1234']

    },
    {
        nome: 'vivian',
        idade: 31,
        cartoes: ['123', '1234']

    },
    {
        nome: 'joaquim',
        idade: 34,
        cartoes: ['123', '1234']

    },
    {
        nome: 'didi',
        idade: 33,
        cartoes: ['123', '1234']

    },
    {
        nome: 'priscilla',
        idade: 35,
        cartoes: ['123', '1234']

    },
]

const cartoes = lista.flatMap((cart)=> cart.cartoes) // converte um campo do obj que é um array, e soma esses campos de todos dtos e transforma em um array unico

console.log(cartoes)