let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Drug3Schema = new Schema({
    CodeCIS: { type: String, required: false, index: true },
    Designationelementharmaceutique: { type: String, required: false, index: true },
    substance : { type: String, required: false, index: true },
    Denominationsubstance: { type: String, required: false, index: true },
    Dosagesubstance   : { type: String, required: false, index: true },
    Referencedosage   : { type: String, required: false, index: true },
    Naturecomposant : { type: String, required: false, index: true },
    therapeutiques  : { type: String, required: false, index: true },


});


    let drug3 = mongoose.model('drug3', Drug3Schema);

    module.exports =  function() {
        return  drug3;
};