class Usuario {
    email
    password
    nome

    constructor(email, senha, nome) {
        this.email = email
        this.nome = nome
        this.password = senha
    }
}

class Adm extends Usuario {
    permissoes

    constructor(email, senha, nome, permissoes) {
        super(email, senha, nome)
        this.permissoes = permissoes
    }

}

class Comprador extends Usuario {
    compras

    constructor(email, senha, nome, compras) {
        super(email, senha, nome)
        this.compras = compras
    }
}

const adm =  new Adm('email', 'senha', 'jose', [1,6])

console.log(adm.password)