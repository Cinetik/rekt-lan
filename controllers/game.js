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
            res.status(200).json(games);
        });
    })
    .get('/api/game/:id', function(req, res) {
        Game.findById(req.params.id, function(err, game) {
            if (err)
            res.send(err);
            res.status(200).json(game);
        });
    })
    .post('/api/game', function (req, res) {
        var game = new Game(req.body);
        game.save(function(err){
            if(err)
            res.send(err);
            res.status(200).json(game);
        });
    })
    .delete('/api/game/:id',function (req, res){
        Game.findByIdAndRemove(req.params.id, {},
            function(err, obj) {
                if (err) next(err);
                res.status(200).json(obj);
            });
        });


        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)
    };
