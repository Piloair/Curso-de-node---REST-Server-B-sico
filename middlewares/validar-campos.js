const {validationResult} = require('express-validator');

function validarCampos(req, res, next) {
    const errors = validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(404).json(errors);
    }
    next();
}
// const validarCampos = () => {}


module.exports = {
    validarCampos
}
