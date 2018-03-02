module.exports = function(app) {

    let site = app.controllers.site; // le chemin  controllers.site


    app.get('/1', site.creation1);
    app.get('/2', site.creation2);
    app.get('/3', site.creation3);
    app.get('/4', site.creation4);
    app.get('/4', site.creation5);
    app.get('/6', site.creation6);
    app.get('/7', site.creation7);
    app.get('/8', site.creation8);
    app.get('/9', site.creation9);


    let recover = app.controllers.recover;

    app.get('/', recover.find);

    app.post('/find', recover.find);










};

