// OBJECT ORIENTED LANGUAGE:
//
// {
//   keyname: function(){
//     stuff stuff
//   }
// }
//
// thats a function...but it's also an object

var beerList = require('./beerList.js');

module.exports = {


create: function (req, res){
req.body.key = Math.floor(Math.random()*100000000);
beerList.push(req.body);
res.send(beerList);
},

read: function (req, res){
res.send(beerList);

},
update: function(req, res){
  for (var i = 0; i < beerList.length; i++) {
    if(beerList[i].key ==req.params.id){
      beerList[i] = req.body;
    }
  }
  res.send(beerList);
},
delete: function(req,res){
  for (var i = 0; i < beerList.length; i++) {
    if(beerList[i].key ==req.params.id){
      beerList.splice(i,1);
    }
  }
  res.send(beerList);
},


};//module.exports end
