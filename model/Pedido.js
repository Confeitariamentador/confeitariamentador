module.exports = class Pedido{
    constructor(id, comprador, itens, estado, dataPedido, dataEntrega, entregador){
        this._id = id;
        this._comprador = comprador;
        this._itens = itens;
        this._estado = estado;
        this._dataPedido = dataPedido;
        this._dataEntrega = dataEntrega;
        this._entregador = entregador;
    }

    getId(){
        return _id;
    }
    setId(id){
        this._id = id;
    }

    getComprador(){
        return _comprador;
    }
    setComprador(comprador){
        this._comprador = comprador;
    }

    getItens(){
        return _itens;
    }
    setItens(itens){
        this._itens = itens;
    }
    
    getEstado(){
        return _estado;
    }
    setEstado(estado){
        this._estado = estado;
    }

    getdataPedido(){
        return _dataPedido;
    }
    setdataPedido(dataPedido){
        this._dataPedido = dataPedido;
    }

    getDataEntrega(){
        return _dataEntrega;
    }
    setDataEntrega(dataEntrega){
        this._dataEntrega = dataEntrega;
    }
}
