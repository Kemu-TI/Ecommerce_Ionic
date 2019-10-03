const variables = {
    Api:{
        port: process.env.port || 3000
    },
    
    Database:{
   connection: process.env.connection || 'mongodb+srv://admin:vitoria@cluster0-wj6vr.mongodb.net/test?retryWrites=true&w=majority'

    },
    
    Security: {
        secretKey: 'd41d8cd98f00b204e9800998ecf8427e|dde975e926b5e37179830dd1038aaeda'
    }
}
module.exports = variables;