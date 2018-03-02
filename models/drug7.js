let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Drug5Schema = new Schema({
    Identifiant: { type: String, required: false, index: true },
    Libelle : { type: String, required: false, index: true },
    CodeCIS : { type: String, required: false, index: true },
    type : { type: String, required: false, index: true },
    Numero  : { type: String, required: false, index: true },


});

let drug7 = mongoose.model('drug7', Drug5Schema);

module.exports =  function() {
    return  drug7;
};

