let express = require('express'); load = require('express-load');
let mongoose = require('mongoose');
let ejs = require('ejs');
let app = express();
let papaparse = require ('papaparse');
let bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());


    load('db')
        .then('models')
        .into(app);

    global._db = app.models;


    load('controllers')
        .then('routes')
        .into(app);

        app.set('view engine', 'ejs' );


        app.listen(8080);




