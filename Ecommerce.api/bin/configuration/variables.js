const variables = {
    Api:{
        port: process.env.port || 3000
    },
    
    Database:{
   connection: process.env.connection || 'mongodb+srv://admin:vitoria@cluster0-wj6vr.mongodb.net/test?retryWrites=true&w=majority'

    }   
}
module.exports = variables;