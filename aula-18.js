// TRY CATCH FINALLY

function calcular(valor) {
    if (valor === 0) {
        throw new Error(`O valor nao pode ser zero`) // apenas a criação da mensagem de erro throw quebra a aplicação, não processando outras funções
    }

    return valor / 2
}


// utiliza-se o try - catch para verificar e tratar os possíveis erros, mesmo ocorrendo o erro, ele executa as proximas funções fora do TRY-CATCH

try {
    const resultado  = calcular(0) // caso ocorra um erro na função as próximas linhas dentro do TRY não serão processadas
    console.log(`resulado: `, resultado)
} catch (error) {
    // posso inserir uma função que irá deletar um usuario que nao consegui criar completamente no banco(exemplo), evitando um usuario duplicado
    console.log(error.message) // posso manipular a mensagem de erro
} finally { // sempre será processado, independente de ocorrer ou não uma exceção(erro) no TRY
    console.log(`chegou no finaly`)
}

console.log(`continua`)
