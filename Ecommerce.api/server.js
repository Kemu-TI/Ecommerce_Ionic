'use strict'

const app = require('../Ecommerce.api/bin/express');
const variables = require ('../Ecommerce.api/bin/configuration/variables');
//const app = require('./bin/express');
//const variables = require ('./bin/configuration/variables');

app.listen(variables.Api.port, () =>{
    console.info(`Api_Margherita inicializada com sucesso na porta ${variables.Api.port}`);
});