let mongoose = require('mongoose');
let Papa = require ('papaparse');
let fs = require('fs');
let path = require('path');
let DELIMITER_CSV = '\t';



exports.creation1 = function(req, res ) {

Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/CISbdpm.txt'), 'latin1'), {

    worker: true,// 1 à 1
    delimiter: DELIMITER_CSV, // , ou ;
    step : function(item) {

        let new_CIS_bdpm1 = {
            CodeCIS: item.data[0][0],
            Denominationdumedicament : item.data[0][1],
            Formepharmaceutique : item.data [0][2],
            Voiesdadministration : item.data [0][3],
            Statutadministratif : item.data [0][4],
            Typeprocedure : item.data [0][5],
            Etatcommercialisation : item.data [0][6],
            Dateamm : item.data[0][7],
            StatutBdm : item.data[0][8],
            Titulaire : item.data[0][9],
            Surveillancerenforcee : item.data[0][10]
        };
console.log(new_CIS_bdpm1);

        let drug = _db.drug(new_CIS_bdpm1);

        drug.save((err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });

    }});

return res.send(true);
};

exports.creation2 = function(req, res ) {

    Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/CIS_CIP_bdpm.txt'), 'latin1'), {

        worker: true,// 1 à 1
        delimiter: DELIMITER_CSV, // , ou ;
        step : function(item) {

            let new_CIS_CIP_bdpm = {
                CodeCIS: item.data[0][0],
                CodeCIP7:item.data[0][1],
                Libelleresentation: item.data[0][2],
                Statutadministratifpresentation: item.data[0][3],
                AMM : item.data[0][4],
                Datedeclaration  : item.data[0][5],
                CIP13  : item.data[0][6],
                collectivites  : item.data[0] [7],
                remboursement  : item.data[0] [8],
                prix  : item.data[0] [9],
                Textepresentant   : item.data[0] [10],

            };

    console.log(new_CIS_CIP_bdpm);

    let drug2 = _db.drug2(new_CIS_CIP_bdpm);

    drug2.save((err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });

}});

return res.send(true);

};

exports.creation3 = function(req, res ) {

    console.log("import 3");

    Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/CIS_COMPO_bdpm.txt'), 'latin1'), {

        worker: true,// 1 à 1
        delimiter: DELIMITER_CSV, // , ou ;
        step : function(item) {

            console.log(item);

            let new_CIS_COMPO_bdpm = {
                CodeCIS: item.data[0][0],
                Designationelementharmaceutique: item.data[0][1],
                substance : item.data[0][2],
                Denominationsubstance: item.data[0][3],
                Dosagesubstance  : item.data[0][4],
                Referencedosage  : item.data[0][5],
                Naturecomposant   : item.data[0][6],
                therapeutiques   : item.data[0][7]
            };

            console.log(new_CIS_COMPO_bdpm);

            let drug3 = _db.drug3(new_CIS_COMPO_bdpm);

            drug3.save((err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            });

        }

    });

    return res.send(true);

};

exports.creation4 = function(req, res ) {

    console.log("import 4");

    Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/CIS_HAS_SMR_bdpm.txt'), 'latin1'), {

        worker: true,// 1 à 1
        delimiter: DELIMITER_CSV, // , ou ;
        step : function(item) {

            console.log(item);

            let new_CIS_HAS_SMR_bdpm = {
                CodeCIS: item.data[0][0],
                Motifevaluation : item.data[0][1],
                transparence : item.data[0][2],
                ValeurSMR : item.data[0][3],
                LibelleSMR  : item.data[0][4],

            };

            console.log(new_CIS_HAS_SMR_bdpm);

            let drug4 = _db.drug4(new_CIS_HAS_SMR_bdpm);

            drug4.save((err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            });

        }

    });

    return res.send(true);

};





exports.creation5 = function(req, res ) {

    console.log("import 5");

    Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/CIS_HAS_ASMR_bdpm.txt'), 'latin1'), {

        worker: true,// 1 à 1
        delimiter: DELIMITER_CSV, // , ou ;
        step : function(item) {

            console.log(item);

            let new_CIS_HAS_ASMR_bdpm = {
                CodeCIS: item.data[0][0],
                CodedossierHAS : item.data[0][1],
                Motifevaluation : item.data[0][2],
                Date  : item.data[0][3],
                ValeurASMR : item.data[0][4],
                LibelleASMR  : item.data[0][5],

            };

            console.log(new_CIS_HAS_ASMR_bdpm);

            let drug5 = _db.drug5(new_CIS_HAS_ASMR_bdpm);

            drug5.save((err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            });

        }

    });

    return res.send(true);

};



exports.creation6 = function(req, res ) {

    console.log("import 6");

    Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/HAS_LiensPageCT_bdpm.txtt'), 'latin1'), {

        worker: true,// 1 à 1
        delimiter: DELIMITER_CSV, // , ou ;
        step : function(item) {

            console.log(item);

            let new_HAS_LiensPageCT= {
                CodeCIS: item.data[0][0],
                LienpagesavisCT : item.data[0][1],


            };

            console.log(new_HAS_LiensPageCT);

            let drug6 = _db.drug6(new_HAS_LiensPageCT);

            drug6.save((err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            });

        }

    });

    return res.send(true);

};


//ici

exports.creation6 = function(req, res ) {

    console.log("import 6");

    Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/HAS_LiensPageCT_bdpm.txtt'), 'latin1'), {

        worker: true,// 1 à 1
        delimiter: DELIMITER_CSV, // , ou ;
        step : function(item) {

            console.log(item);

            let new_HAS_LiensPageCT= {
                CodeCIS: item.data[0][0],
                LienpagesavisCT : item.data[0][1],


            };

            console.log(new_HAS_LiensPageCT);

            let drug6 = _db.drug6(new_HAS_LiensPageCT);

            drug6.save((err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            });

        }

    });

    return res.send(true);

};


exports.creation7 = function(req, res ) {

    console.log("import 7");

    Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/CIS_GENER_bdpm.txt'), 'latin1'), {

        worker: true,// 1 à 1
        delimiter: DELIMITER_CSV, // , ou ;
        step : function(item) {

            console.log(item);

            let new_CIS_GENER_bdpm= {
                Identifiant: item.data[0][0],
                Libelle : item.data[0][1],
                CodeCIS  : item.data[0][2],
                Type   : item.data[0][3],
                Numero   : item.data[0][4],


            };

            console.log(new_CIS_GENER_bdpm);

            let drug7 = _db.drug7(new_CIS_GENER_bdpm);

            drug7.save((err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            });

        }

    });

    return res.send(true);

};



exports.creation8 = function(req, res ) {

    console.log("import 8");

    Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/CIS_CPD_bdpm.txt'), 'latin1'), {

        worker: true,// 1 à 1
        delimiter: DELIMITER_CSV, // , ou ;
        step : function(item) {

            console.log(item);

            let new_CIS_CPD_bdpm= {
                CodeCIS : item.data[0][0],
                prescription  : item.data[0][1],


            };

            console.log(new_CIS_CPD_bdpm);

            let drug8 = _db.drug8(new_CIS_CPD_bdpm);

            drug8.save((err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            });

        }

    });

    return res.send(true);

};

// ici


exports.creation9 = function(req, res ) {

    console.log("import 9");

    Papa.parse(fs.createReadStream(path.join(__dirname + '/../file/CIS_InfoImportantes_20180216162626_bdpm.txt'), 'latin1'), {

        worker: true,// 1 à 1
        delimiter: DELIMITER_CSV, // , ou ;
        step : function(item) {

            console.log(item);

            let new_CIS_Info = {
                CodeCIS:  item.data[0][0],
                Datedebut : item.data[0][1],
                datefin  : item.data[0][2],
                Texteafficher : item.data[0][3],


            };

            console.log(new_CIS_Info);

            let drug9 = _db.drug9(new_CIS_Info);

            drug9.save((err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            });

        }

    });

    return res.send(true);

};
















