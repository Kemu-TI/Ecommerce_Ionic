'use strict'

function produtoController(){

}

produtoController.prototype.post = async (req,res) => {};

produtoController.prototype.put = async (req,res) => {};

produtoController.prototype.get = async (req,res) => {
    res.status(200).send("Listando Produtos");
};

produtoController.prototype.getByid = async (req,res) => {
    res.status(200).send(`o id passado foi ${req.params.id}`);
};

produtoController.prototype.delete = async (req,res) => {};

module.exports = produtoController;