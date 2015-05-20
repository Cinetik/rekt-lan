// grab the nerd model we just created
var Game = require( '../models/game');

module.exports = function(app) {

    // server routes
    // handle things like api calls
    // authentication routes

    // sample api route
    app.route('/api/game')
    .get( function(req, res) {
        Game.find(function(err, games) {
            if (err)
            res.send(err);
            res.json(games);
        });
    })
    .post( function (req, res) {
        var game = new Game(req.body);
        game.save(function(err){
            if(err)
                res.send(err);
            res.json(game);
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)
};
