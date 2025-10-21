const mongoose = require('mongoose');

async function dbConnection() {
    try {
        console.log('Conectando a MongoDB...');
        console.log(process.env.MONGODB_CNN); // Usa un nombre de variable en mayúsculas

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            //Los otros 2 argumentos estan deprecados.
        });

        console.log('✅ Base de datos Online');
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error.message);
        throw new Error('Error al iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
};
