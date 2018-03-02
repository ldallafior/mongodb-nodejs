let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Drug2Schema = new Schema({
    CodeCIS: { type: String, required: false, index: true },
    CodeCIP7: { type: String, required: false, index: true },
    Libelleresentation : { type: String, required: false, index: true },
    Statutadministratifpresentation: { type: String, required: false, index: true },
    AMM : { type: String, required: false, index: true },
    Datedeclaration : { type: String, required: false, index: true },
    CIP13 : { type: String, required: false, index: true },
    collectivites : { type: String, required: false, index: true },
    remboursement  : { type: String, required: false, index: true },
    prix : { type: String, required: false, index: true },
    Textepresentant : { type: String, required: false, index: true },

});


    let drug2 = mongoose.model('drug2', Drug2Schema);

    module.exports =  function() {
        return  drug2;
    };