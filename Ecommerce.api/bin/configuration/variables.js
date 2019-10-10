const variables = {
    Api:{
        port: process.env.port || 3000
    },
    
    Database:{
   connection: process.env.connection || 'mongodb+srv://admin:vitoria@cluster0-wj6vr.mongodb.net/test?retryWrites=true&w=majority'

    },
    
    Security: {
       // secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|dde975e926b5e37179830dd1038aaeda'
          secretyKey: '3e655bb058db9508ed8e461a83a3f054|8976304c67f5ac7740e7ada2bdb2d10f'
    }
}
module.exports = variables;