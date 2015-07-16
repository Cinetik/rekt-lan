// grab the nerd model we just created
var Game = require( '../models/game');
var _ = require('underscore');
module.exports = function(app) {
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
        })
    .put('/api/game/:id', function(req, res) {
        Game.findById(req.params.id, function(err, game) {
            if (err)
            res.send(err);
            game = _.extend(game, req.body);
            game.save(function(err){
                if(err)
                res.send(err)
                res.status(200).json(game);
            });
        });
    });
};
