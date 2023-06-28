module.exports = class Item{
    constructor(id, nome, prazoValidade){
        this._id = id;
        this._nome = nome;
        this._prazoValidade = prazoValidade;
    }

    getId(){
        return this._id;
    }
    setId(id){
        this._id = id;
    }

    getNome(){
        return this._nome;
    }
    setNome(nome){
        this._nome = nome;
    }

    getPrazoValidade(){
        return this._prazoValidade;
    }
    setPrazoValidade(prazoValidade){
        this._prazoValidade = prazoValidade;
    }
}
