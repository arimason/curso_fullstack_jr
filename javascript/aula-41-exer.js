class Produto {
    nome
    preco
    descricao
    codigo
    quantidade_em_estoque

    quantidade_em_estoqueProd(value) {
        if (this.quantidade_em_estoque + value <= 0) {
            console.log(value)
            this.quantidade_em_estoque = 0
        } else {
            this.quantidade_em_estoque += value
        }
        
    }

    altPreco(novoPreco) {
        this.preco = novoPreco
    }
    constructor(nome, descricao, codigo) {
        this.nome = nome
        this.preco = 0
        this.descricao = descricao
        this.codigo = codigo
        this.quantidade_em_estoque = 0
    }
}

class SmartPhone extends Produto {
    marca
    modelo
    sistema_operacional
    
    descCompl() {
        return this.descricao + " " + this.marca + " " + this.modelo + " " + this.sistema_operacional
    }
    constructor(nome, descricao, codigo, marca, modelo, sistema_operacional) {
        super(nome, descricao, codigo),
        this.marca = marca
        this.modelo = modelo
        this.sistema_operacional = sistema_operacional
        
    }
}

const smartphone1 =  new SmartPhone(
    'iphone',
    'celular se',
    'asdasda',
    'apple',
    'se',
    'iOs15'
)

smartphone1.altPreco(300)
smartphone1.quantidade_em_estoqueProd(-13)

console.log(smartphone1)