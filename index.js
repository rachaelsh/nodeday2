var express = require('express');//goes into installed folder and runs express
var bodyParser = require('body-parser'); //makes sure your data object format is JSON
var cors = require('cors');
var session = require('express-session');//sessions are the login timeout/server update, current ui view etc.  you can control the user's login based on built cues.

var beerCtrl = require("./beerCtrl.js")//DOT SLASH!!!!!
var beerList = require('./beerList.js')
var userCtrl = require('./userCtrl.js')
var config = require('./config.js');

var app = express(); //instantiating this app variable uses express

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());//take html code and converts it properly to json(user input etc)
app.use(session(config))//config.secret goes to your config.js file.  secret is actually potato.  potato can be anything.  if your site is super secret, make it anything super complicated.  look @ config.  if you don't want a config file, do your object here..{secret:"potatp"}
app.use(express.static(__dirname +'/public')); // __dirname represents your root directory on ANY app(nodemon finds your package.json> index.js.  when you have your __dirname defined, it can open the public(or whatever) folder to find your index page.)

//crud functions go here
app.get('/beer', beerCtrl.read);
app.post('/beer', beerCtrl.create);
app.put('/beer/:id', beerCtrl.update);//dont forget id
app.delete('/beer/:id', beerCtrl.delete);


app.post('/login', userCtrl.login);




//type out your functions in index.js as follows...
// app.get('/dogs', function (req, res){
// res.send(dogs);
//
// });
//
// app.post('/dogs', function (req, res){
// req.body.key = dogs[dogs.length-1].key+1;
// dogs.push(req.body);
// res.send(dogs);
// });
//
// app.put('/dogs/:id', function(req, res){
//   for (var i = 0; i < dogs.length; i++) {
//     if(dogs[i].key ==req.params.id){
//       dogs[i] = req.body;
//       //example
//       console.log(req.params); //.params cuts down your request to just the object.  if you add the key it will be just the object of that key.
//       console.log(req.body);//body is the data, whereas params is more concerned with finding the location by id
//       //example
//     }
//   }
//   res.send(dogs);
// });
//
// app.delete('/dogs/:id', function(req,res){
//   for (var i = 0; i < dogs.length; i++) {
//     if(dogs[i].key ==req.params.id){
//       dogs.splice(i,1);
//     }
//   }
//   res.send(dogs);
// });

// app.post('/kittens', function(req, res){ ///if your API request is for beer, it's not going to look here.
//
//
//
// })


app.listen(7000, function(){//6000 does not work on your browser fyi
  console.log("if you can hear me, eat a cookie on 7000");
});
