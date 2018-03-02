let mongoose = require('mongoose');
let Schema = mongoose.Schema;

    let Drug4Schema = new Schema({
        CodeCIS: { type: String, required: false, index: true },
        Motifevaluation: { type: String, required: false, index: true },
        transparence : { type: String, required: false, index: true },
        ValeurSMR: { type: String, required: false, index: true },
        LibelleSMR : { type: String, required: false, index: true },

    });


        let drug4 = mongoose.model('drug4', Drug4Schema);

        module.exports =  function() {
            return  drug4;
        };