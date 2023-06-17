class Item{
    constructor(id, nome, prazoValidade){
        this._id = id;
        this._nome = nome;
        this._prazoValidade = prazoValidade;
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

    getPrazoValidade(){
        return _prazoValidade;
    }
    setPrazoValidade(prazoValidade){
        this._prazoValidade = prazoValidade;
    }
}