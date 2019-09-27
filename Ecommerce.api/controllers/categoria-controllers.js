'use strict'

const repository = require('../repositories/categoria-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function categoriaController(){
}

categoriaController.prototype.post = async (req,res) => {

    let _validationContratc = new validation();
    _validationContratc.isRequired(req.body.titulo,'Título é obrigatório');
    _validationContratc.isRequired(req.body.foto, 'A foto é obrigatória');
    ctrlBase.post(_repo, _validationContratc, req, res);
};

categoriaController.prototype.put = async (req,res) => {

    
    let _validationContratc = new validation();
    _validationContratc.isRequired(req.body.titulo,'Título é obrigatório');
    _validationContratc.isRequired(req.body.foto, 'A foto é obrigatória');
   // _validationContratc.isRequired(req.params.id, 'O id que será atualizada é obrigatório');
     
    ctrlBase.put(_repo, _validationContratc, req, res);
};

categoriaController.prototype.get = async (req,res) => {
    ctrlBase.get(_repo, req, res);
    console.log('Peguei a informação na Categoria', req.usuarioLogado.user._id);
};

categoriaController.prototype.getById = async (req,res) => {
    ctrlBase.getById(_repo, req, res);
};

categoriaController.prototype.delete = async (req,res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = categoriaController;