let mongoose = require('mongoose');
exports.trouvetout = function(req, res) {

_db.drug.aggregate([{
    $lookup: {
        from: "drug2",
        localField: "CodeCIS",
        foreignField: "CodeCIS",
        as: "specialites"
    }
},
    {
        $lookup: {
            from: "drug3",
            localField: "CodeCIS",
            foreignField: "CodeCIS",
            as: "compositions"
        }
    }, {
    $lookup: {
        from: "drug7",
        localField: "CodeCIS",
        foreignField: "CodeCIS",
        as: "groupegenerique"
    }
},

    {
        $lookup: {
            from: "drug8",
            localField: "CodeCIS",
            foreignField: "CodeCIS",
            as: "conditiondepressition"
        }
    },
    {
        $lookup: {
            from: "drug5",
            localField: "CodeCIS",
            foreignField: "CodeCIS",
            as: "avisasmir"
        }
    },
    {
        $lookup: {
            from: "drug6",
            localField: "CodeCIS",
            foreignField: "CodedossierHAS",
            as: "liens"
        }
    },
    {
        $limit: 100
    }] ).exec(function(err, resultats) {
        if(err) console.log(err);
        return res.render('pages/trouvetout', {resultats : resultats});
}) ;

};















