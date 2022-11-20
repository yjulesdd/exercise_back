const mongoose = require('mongoose');

let connection
const stringConnection = process.env.DB_CONNECTION || 'mongodb://localhost:27017/COMPTABILITE';

async function connect(){
    if(!connection){
        connection = mongoose.connect(stringConnection, { useNewUrlParser: true , useUnifiedTopology: true });
    }
    
    const db = mongoose.connection

     db.on('error', function(err){
         throw new Error(err);
     } );
     db.on('open', function() {
         console.log('je suis connecté')
        return connection
     });
}

module.exports = connect