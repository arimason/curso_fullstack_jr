const lista = [
    {
        nome: 'jose',
        idade: 20
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
        idade: 19,
        exibir: true,
    },
]
                                // a função dessa forma é chamada anônima, dificulta o mapeamento de um erro
const listaFiltrada = lista.filter((pessoa) => pessoa.idade > 20) // no filter, devo retornar boolean, para aquele elemento ser fitlrado
console.log(listaFiltrada)
                                        // esse !! é para reconhecer o undefenied para true, em seguia false
const listaExibir = lista.filter((obj) => !!obj.exibir)
console.log(listaExibir)