class Usuario {
    nome
    senha
    email

    constructor(email, senha, nome) {

        this.senha =     senha
        this.email =     email

        Object.defineProperty(this, 'nome', {
            value: nome,
            writable: true, // se stiver como true => usuario.nome = 'novo nome'
            configurable: false, // se estiver como true => posso deletar o nome
            enumerable: true, //se estiver true => será exibido no objeto
            })
    }

}

const user = new Usuario('email', 'senha', 'nome')

console.log(user)