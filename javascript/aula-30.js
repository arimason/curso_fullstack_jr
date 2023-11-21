const lista = [
    {
        nome: 'jose',
        idade: 33
    },
    {
        nome: 'maria',
        idade: 33
    },
    {
        nome: 'vivian',
        idade: 33
    },
    {
        nome: 'joaquim',
        idade: 33
    },
    {
        nome: 'didi',
        idade: 33
    },
    {
        nome: 'priscilla',
        idade: 33
    },
]

const pessoa = {
    jose: { // key - jose (chave primária)
        idade: 54,// value - idade
    },
    joao: {
        idade: 65,
    },
    maria: {
        idade: 23
    }
}
// dessa forma consigo acessar Jose, sem precisar percorrer todo o array
pessoa.jose.idade
const people = lista.reduce((acc, obj) => {
    // acc => {} // o acumulador começa assim devido ao segundo arg
    return {
        ...acc,
        [obj.nome]: { // aqui estou  utilizando o campo nome como Chave primária
            ...obj, // aqui estou atribuindo o restante das informações desse obj a essa chave primária
        }
    }
}, {}) // segundo arg define que estou iniciando com o obj vazio
console.log(people)
const peopleArray = lista.reduce((acc, obj) => {
    acc.push(obj.idade) // psuh adiciona elementos no array, nesse caso o valor do campo idade
    return acc
}, []) // defino que o array começa vazio
console.log("array: ", peopleArray)

