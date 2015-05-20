// grab the nerd model we just created
var Game = require( '../models/game');

module.exports = function(app) {

    // server routes
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/game', function(req, res) {
        Game.find(function(err, games) {
            if (err)
            res.send(err);
            res.json(games);
        });
    })
    .get('/api/game/:id', function(req, res) {
        Game.findById(req.params.id, function(err, game) {
            if (err)
            res.send(err);
            res.json(game);
        });
    })
    .post('/api/game', function (req, res) {
        var game = new Game(req.body);
        game.save(function(err){
            if(err)
            res.send(err);
            res.json(game);
        });
    })
    .delete('/api/game/:id',function (req, res){
        console.log(req);
        var game = Game.findOneAndRemove(req.params.id, function(err){
            if(err)
            res.send(err);
            res.json(req.params.id);
        });
    });


    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)
};
