
angular.module("beerApp").service("mainServ", function($http){
this.getAllTheBeer = function(){
  return $http({
    method: "GET",
    url: "/beer"
  }).then(function(response){
      return response.data; //basically will always(usually) have data key
  });
};

this.addNewBeer = function(anotherOne){//this is the same as nextBeer in mainCtrl.  you are using the same argument DATA in each.  it's just called something for your benefit.
  return $http({
    method: 'POST',
    url: "/beer",
    data: anotherOne
  }).then(function(response){
    return response;//(y ou don't really care what it says about you adding a beer so your html will probably just getBeer again from your get function)
  });
};

this.destroyTheBeer = function(beerToDestroy){//again, just inserting an argument
  return $http({
    method: "DELETE",
    url: "/beer/" + beerToDestroy.key//dont forget that second dash on beer, make sure you add key
  }).then(function(response){
    return response;//just to update
  });

};

this.changeTheBeer = function(beerToChange){
  return $http({
    method: "PUT",
    url: "/beer/"+beerToChange.key,//ask about this?  it represents req.params.id
//     url: "/dogs/:id"
    data: beerToChange
  }).then(function(response){
    return response;
  });
};



});//service end

//your server is your model.  reference it as a model
