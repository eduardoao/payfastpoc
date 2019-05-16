//Carrega o express, consign: responsável por realizar as chamadas do get em controllers
var express = require('express'); //Carrega o arquivo.
var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');

module.exports = function() {
    var app = express(); //objeto.

    app.use(bodyParser.json());
    app.use(validator());

    consign()
    .include('controllers')
    .then('persistencia')
    .into(app);

    return app;

}