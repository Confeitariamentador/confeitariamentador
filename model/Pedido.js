const bd = require('../database/Database');
module.exports = class Pedido{
    constructor(id,item){
        this._comprador = id;
        this._itens = item;
    }

    getId(){
        return this._id;
    }
    setId(id){
        this._id = id;
    }

    getComprador(){
        return this._comprador;
    }
    setComprador(comprador){
        this._comprador = comprador;
    }

    getItens(){
        return this._itens;
    }
    setItens(itens){
        this._itens = itens;
    }
    
    getEstado(){
        return this._estado;
    }
    setEstado(estado){
        this._estado = estado;
    }

    getdataPedido(){
        return this._dataPedido;
    }
    setdataPedido(dataPedido){
        this._dataPedido = dataPedido;
    }

    getDataEntrega(){
        return this._dataEntrega;
    }
    setDataEntrega(dataEntrega){
        this._dataEntrega = dataEntrega;
    }
}
