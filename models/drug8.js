let mongoose = require('mongoose');
let Schema = mongoose.Schema;

    let Drug8Schema = new Schema({
        CodeCIS : { type: String, required: false, index: true },
        prescription: { type: String, required: false, index: true },


    });

            let drug8 = mongoose.model('drug8', Drug8Schema);

            module.exports =  function() {
                return  drug8;
            };