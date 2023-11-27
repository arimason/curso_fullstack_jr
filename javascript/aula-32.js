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

lista.sort((a,b)=> {
    if (a.idade < b.idade) {
        return -1
    }
    if(a.idade>b.idade) {
        return 1
    }
    return 0
}) 

console.log(lista)