var ModuloMongo = require('../ModuloMongo.js').Qux;
var moduloMongo = new ModuloMongo();



//GET - Obtener lista de PCs conectadas
exports.getlist = function(req, res) {
    moduloMongo.consultarDatos(function (data){
        getlistOk(req, res, data);
    },function (msj) {
        getlistError(req, res,msj);
    } ,"mongodb://localhost/dprbd","Fuente",{})
};

function getlistOk(req, res, data){
    res.send(data);
}

function getlistError(req, res, msj){
    console.log("Error al intentar consultar la BD:");
    console.log(msj);

    res.send("ERROR");
}