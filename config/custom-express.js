//Carrega o express, consign: responsável por realizar as chamadas do get em controllers
var express = require('express'); //Carrega o arquivo.
var consign = require('consign');

module.exports = function() {
    var app = express(); //objeto.

    consign()
    .include('controllers')
    .into(app);

    return app;

}