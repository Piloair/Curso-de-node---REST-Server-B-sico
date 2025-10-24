const {response, request} = require('express');
const bcryptjs = require('bcryptjs')


const Usuario = require('../models/usuario');

const usuariosGet = (req, res) => {

    const {
        q,
        nombre,
        Apikey,
        page = 1,
        limit
    } = req.query;
    // const query = req.query;
    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        Apikey,
        page,
        limit
    });
}

const usuariosPost = async (req, res) => {


    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    // verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo: correo});
    // const existeEmail = await Usuario.findOne({correo}); Si es reduntante en JS pero preferible verlo.
    if (existeEmail) {
        return res.status(400).json({msg: "Este correo ya esta registrado."});
    }


    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    // Guardar en BD
    await usuario.save();

    res.json({msg: 'Post API - usuariosPost', usuario});
}

const usuariosPut = (req, res) => {
    const id = req.params.id;
    res.json({msg: 'Put API - usuariosPut', id});
}
function usuariosPatch(req, res) {
    res.json({msg: 'Patch API - usuariosPatch'});
}
function usuariosDelete(req, res) {
    res.json({msg: 'Delete API - usuariosDelete'});
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
