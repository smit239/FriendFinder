const friendList = require('../data/friend.js');

module.exports = function(app){
  //GET route that displays JSON of possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    //Compare the new friend's scores with friends in friendList array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //checks through all current friends in list
    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
      //checks through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results to scoresArray
      scoresArray.push(scoresDiff);
    }

    // find best match after all friends are compared
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var bff = friendList[bestMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    friendList.push(req.body);
  });
};