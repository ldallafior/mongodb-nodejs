let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Drug8Schema = new Schema({
    CodeCIS : { type: String, required: false, index: true },
    Datedebut: { type: String, required: false, index: true },
    datefin : { type: String, required: false, index: true },
    Texteafficher: { type: String, required: false, index: true }


});

let drug9 = mongoose.model('drug9', Drug8Schema);

module.exports =  function() {
    return  drug9;
};

