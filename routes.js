// app/routes.js

// grab the nerd model we just created
var Game = require('./models/game');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/api/game', function(req, res) {
    Game.find(function(err, games) {
      if (err)
      res.send(err);
      res.json(games);
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  app.get('*', function(req,res){
    res.sendFile('public/index.html', {root: __dirname});
  });
};
