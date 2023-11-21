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

console.log(lista.map((objeto) => objeto.idade)) // defino qual o campo do objeto que desejo visualizar

const converObj = (obj) => {
    return {
        nome: obj.nome,
        idade: obj.idade,
        nomeIdade: `${obj.nome} + ${obj.idade}` // posso definir nomes aos campos de um "novo" obj 
        // utilizando valores do obj real
    }
    // outra maneira de poder adicionar todos o campos e valores de todos os objs
    return {
        ...obj,
        nomeIdade: `${obj.nome} + ${obj.idade}`
    }
}

console.log(lista.map(converObj))