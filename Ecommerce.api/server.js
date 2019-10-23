'use strict'

//const app = require('../Ecommerce.api/bin/express');
const app = require('./bin/express');
//const variables = require ('../Ecommerce.api/bin/configuration/variables');
const variables = require ('./bin/configuration/variables');

app.listen(variables.Api.port, () =>{
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});