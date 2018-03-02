let mongoose = require('mongoose');

exports.find = function(req, res) {


    if(!req.body) {
        return res.render('pages/search');
    }
    else {
        //let query =_db.drug.find({$text: { $search: req.body.Search }});


        _db.drug.aggregate([
            {
            $match : {$text: { $search: req.body.Search }}
    },
            {
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
            }] ).exec(function (err, CIS_bdpm) {

            if (err) {
                console.log(err);
            }
            console.log(CIS_bdpm);
            return res.render('pages/search', {resultats : CIS_bdpm});
        } );
    }

};



