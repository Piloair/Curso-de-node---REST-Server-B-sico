const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;//Por si acaso no tiene env
        this.usuariosRoutePath = '/api/usuarios';
        //Conectar a base de datos
        this.conectarDB();

        // Middleware Funciones que añaden funciones al servidor.
        this.middelwares();

        // Rutas de mi aplicacion
        this.routes();
    }
    async conectarDB(){
        await dbConnection();
    }
    middelwares() { // Directorio Publico
        //CORS
        this.app.use(cors())
        //Directorio 
        this.app.use(express.static('public'));

        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(process.env.PORT,"0.0.0.0", () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}
module.exports = Server;
