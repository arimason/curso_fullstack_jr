// callback
const test1 = () => {
    setTimeout(() => {
        console.log('test1')
    }, 100)
}
const test2 = (callback) => {
    setTimeout(() => {
        console.log('test2')
        callback()// A função categorizada como callback será iniciada após o tempo estiuplado
    }, 600)// e após executar as linhas anteriores do bloco. Ex: console.log('test2')
}
const test3 = () => {
    console.log('test3')
}
const test4 = () => {
    console.log('test4')
}

// function chamarCallback() {
//     console.log('salvou')
// }
const chamarCall = () => {
    console.log('SALVOU')
}


test1()
console.log(1+1)
test2(chamarCall)
test3()
console.log(2+2)
test4()