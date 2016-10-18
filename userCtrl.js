var userList = require('./userList.js');

module.exports = {
  login: function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var userfound = false;
    for (var i = 0; i < userList.length; i++) {
      if(username == userList[i].username && password == userList[i].password){
        userfound = true;
        req.session.currentUser = userList[i];//makes a cookie. mm.  this line is in syntax specific to express-session. use it verbatim.
        req.session.cookie.maxAge = 3600000//this too. in ms. (currently 1 hour.  you could also do 1000 * 60 * 60)
      }
    }
    if (userfound){
      res.send("user has been found. you may login.");
    }else {
      res.send("username or password not found");
    }
  },
  logout: function(req, res){
    req.logout();
  }
}
