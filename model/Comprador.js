class Comprador{
    constructor(id, nome, senha, email, historicoPedidos){
        this._id = id;
        this._nome = nome;
        this._senha = senha;
        this._email = email;
        this._historicoPedidos = historicoPedidos;
    }

    getId(){
        return _id;
    }
    setId(id){
        this._id = id;
    }

    getNome(){
        return _nome;
    }
    setNome(nome){
        this._nome = nome;
    }

    getSenha(){
        return _senha;
    }
    setSenha(senha){
        this._senha = senha;
    }
    
    getEmail(){
        return _email;
    }
    setEmail(email){
        this._email = email;
    }

    getHistoricoPedidos(){
        return this._historicoPedidos;
    }
    setHistoricoPedidos(historicoPedidos){
        this._historicoPedidos = historicoPedidos;
    }
}