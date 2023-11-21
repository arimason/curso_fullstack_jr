const idade = 8
nome = `Juliogfdg`

// apenas `==` olha sem verificar  o tipo, com `===` verifica o tipo também, pois o node converte automaticamente
//if (idade >= 18 && nome === `Juliogfdg`) {
//    
//    console.log(`usuario pode entrar`)
// 
//}

if (idade >= 18 || nome === `Juliogfdg`) {
    
    console.log(`usuario pode entrar`)

} else {
    console.log(`NAO ENTRA!!!`)
}
