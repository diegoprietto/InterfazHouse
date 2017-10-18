var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

//Módulos própios
var rutas = require('./controllers/rutas.js');

//Definir las acciones para las rutas
router.route('/getlist')
    .get(rutas.getlist);

//Iniciar Server
app.use(router);
app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});