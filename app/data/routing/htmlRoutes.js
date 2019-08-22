//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  //GET route that leads to home.html - displays home page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../../public/survey.html'));
  });

  //a USE route to home page
  app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname + '/../../public/home.html'));
  });
  //Test route
  app.get('/testing123',function (req, res){
    res.json ({
      name:'BootCamp',
      date: 'August 20'
    });
  })
};