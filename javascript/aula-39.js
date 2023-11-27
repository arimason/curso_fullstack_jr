
const padrao = (field) => {
        value = field,
        writable = true, // se stiver como true => usuario.nome = 'novo nome'
        configurable = false, // se estiver como true => posso deletar o nome
        enumerable = true //se estiver true => será exibido no objeto
}


class Usuario {
    nome
    senha
    email

    constructor(email, senha, nome) {
        Object.defineProperty(this, {
            nome: padrao(nome),
            senha: padrao(senha),
            email: {
                get: () => email,
                set: (val) => email = val
            }
        })
    }

}