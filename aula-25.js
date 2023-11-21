const jose =  { // DTO Objeto de Transferência de Dados
    Idade: 25,
    Peso: 80,
    Nome: `José`,
    Nacionalidade: `brasileiro`
}


const exibirInformacoes = (pessoa) => {
    console.log(`Nome: ${pessoa.Nome}` )
}

exibirInformacoes(jose)
