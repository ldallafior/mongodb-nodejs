let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Drug5Schema = new Schema({
    CodeCIS: { type: String, required: false, index: true },
    LienpagesavisCT : { type: String, required: false, index: true },


});

let drug6 = mongoose.model('drug6', Drug5Schema);

module.exports =  function() {
    return  drug6;
};