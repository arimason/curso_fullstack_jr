process.stdin.setEncoding(`utf8`)

function soma(num) {
    if (num > 100) {
        throw new Error(`valor inválido`) // cria a exceção 
    }
    if (num <= 0) {
        return 0
    } 
    let somatoria = num + (num - 1)
    // for (somatoria <= num; somatoria++;) {
    //     somatoria = somatoria + 0
    // }
    return somatoria + soma(num - 2)
}

process.stdin.on(`data`, function(data){
    try {
        console.log('soma: ', soma(Number(data)))  
    } catch (error) {
        console.log(error.message)
        process.stdin.pause() // fecha a caixa de diálogo no terminal
    }
})

// const s = soma(10)
// console.log("soma: ", s)