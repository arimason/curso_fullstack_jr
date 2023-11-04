// INCOMPLETO


//const str1 = `i love you`
//const str2 = `squirtle squirtle squirtle`
//const str3 = `chondrocraniums`
//const str4 = `coal is so dark`
//const str5 = `lacing your dreams`
//const str6 = `te t e te t e te t e te`
//
//const arrayString = [str1, str2, str3, str4, str5, str6]
//
//
function verString(str) {
    //let tamanho = 0
    let arrayString2 = []
    const removeEnter = str.replace(`\n`, ``)
    arrayStr = removeEnter.split(` `)
    let arrayTamanho = []
    for(const stringField of arrayStr) {
        tamanho = stringField.length
        arrayString2.push(tamanho)
    }
    // junta cada elemento do array de string, separando pelo caractere desejado
    const txt = arrayString2.join(`-`)
    return txt
}
//
//for (const f of arrayString){
//    console.log(verString(f))
//}

// ------------------------- resolução proposta -------------------------------------

// informa os tipos de caracteres
process.stdin.setEncoding(`utf8`)
// aparece uma mensagem no console
console.log(`digite algo`)
// permite digitar algo no terminal e captura a infromação digitada no terminal e realiza um processo
process.stdin.on(`data`, function(data){
    console.log(`Vc digitou: ` + data)
    txt = verString(data)
    console.log(txt)
    console.log(`Digite novamente: `)
    // quando o valor digitado for o número 0, irá fechar a interação com o prgrama pelo terminal, a respota capturada no terminal vem como string
    if(data == 0 ) {
        process.stdin.pause()
    }
})
