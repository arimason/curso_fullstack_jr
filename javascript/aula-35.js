class Pessoa {
    nome
    idade
    filho
    
    constructor(nome, idade, filho) {
        this.nome = nome
        this.idade = idade
        this.filho = filho
    }
}

const filho1 = new Pessoa('maria', 24)
const filho2 = new Pessoa('joao', 34)


const pessoa = new Pessoa('jose', 54, [filho1, filho2])

console.log(pessoa)