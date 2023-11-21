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

const novaPessoa = lista.find((pessoa) => pessoa.nome === 'priscilla') // realiza um find, retorna apenas 1 elemento

console.log(novaPessoa)