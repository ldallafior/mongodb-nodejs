let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Drug5Schema = new Schema({
    CodeCIS: { type: String, required: false, index: true },
    CodedossierHAS: { type: String, required: false, index: true },
    Motifevaluation : { type: String, required: false, index: true },
    Date: { type: String, required: false, index: true },
    ValeurASMR: { type: String, required: false, index: true },
    LibelleASMR: { type: String, required: false, index: true },

});

let drug5 = mongoose.model('drug5', Drug5Schema);

module.exports =  function() {
    return  drug5;
};

