const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms ))//=> { // vai processar a solução dessa promessa
    //     // após o tempo ms
    //     console.log('SLEEP')
    // }, 1000)) // ele promete que vai devolver um valor
}

const aguardarComRetorno = async (ms) => {
    await sleep(ms)
    return 30
}


const aguardar = async () => { // transformando em função async posso definir um await, 
    // que espera a linha definida terminar antes de executar a outra
    console.log('PASSOU', 2**2)
    // await sleep(5000)
    const aguardarComRetorno2 = await aguardarComRetorno(3000) // garante que nada acontecera ate terminar
    console.log('retorno', aguardarComRetorno2)
    console.log('PASSOU1', 2**2)
    console.log('PASSOU2', 2**2)
    console.log('PASSOU3', 2**2)
    console.log('PASSOU4', 2**2)

}

aguardar()