let mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost:27017/test');

    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));
    db.once('open', function (){
        console.log("Connexion à la base OK");
    });

    return db;
};





