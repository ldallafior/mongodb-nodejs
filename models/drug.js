let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let DrugSchema = new Schema({
    CodeCIS: { type: String, required: false, index: true },
    Denominationdumedicament: { type: String, required: false, index: true },
    Formepharmaceutiquet :{ type: String, required: false, index: true},
    Voiesdadministration : { type: String, required: false, index: true },
    Statutadministratif : { type: String, required: false, index: true },
    Typeprocedure : { type: String, required: false, index: true  },
    Etatcommercialisation : { type: String,required: false, index: true  },
    Dateamm : { type: String, required: false, index: true  },
    StatutBdm : { type: String, required: false, index: true  },
    Titulaire :  { type: String, required: false, index: true  },
    Surveillancerenforcee :  { type: String, required: false, index: true  },
});


let drug = mongoose.model('drug', DrugSchema);

module.exports =  function() {
    return  drug;
};



