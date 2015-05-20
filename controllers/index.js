module.exports = function(app) {

    require('./game')(app);

 // frontend routes
  app.get('*', function(req,res){
    res.sendFile('public/index.html', {root: __dirname});
  });
};
