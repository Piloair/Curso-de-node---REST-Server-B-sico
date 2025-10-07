const {response, request} = require('express');

const usuariosGet = (req, res) => {

    const {q, nombre, Apikey,page=1,limit} = req.query;
    // const query = req.query;
    res.json({msg: 'get API - usuariosGet', q, nombre, Apikey,page,limit});
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;
    res.json({msg: 'Post API - usuariosPost', nombre, edad});
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
