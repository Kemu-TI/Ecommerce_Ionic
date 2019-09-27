const express = require('express');
const bodyParser = require('body-parser');
const variables = require('../bin/configuration/variables');
const mongoose = require('mongoose');


//rotas
const categoriaRouter = require  ('../routes/categoria-router');
const produtoRouter = require  ('../routes/produto-router');
const usuarioRouter = require ('../routes/usuario-router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//configurando a conexão com o banco
//mongoose.connect('mongodb+srv://admin:vitoria@cluster0-wj6vr.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connect(variables.Database.connection,{ useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true});

//configurando as rotas
app.use('/api/categoria',categoriaRouter);
app.use('/api/produto',produtoRouter);
app.use('/api/usuario',usuarioRouter);

module.exports = app;
