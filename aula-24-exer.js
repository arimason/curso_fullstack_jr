process.stdin.setEncoding(`utf8`)

function soma(num) {
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
    console.log('soma: ', soma(Number(data)))
})

// const s = soma(10)
// console.log("soma: ", s)