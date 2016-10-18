angular.module("beerApp").controller("mainCtrl", function($scope, mainServ){

    $scope.getBeer = function(){
      mainServ.getAllTheBeer()
      .then(function(response){
        $scope.allTheBeer = response;//alltheBeer is now the thing that goes to your index
      });
    };//you can do () here to invoke but not as good


  $scope.postNewBeer = function(newBeer){//SET YOUR FREAKIN ARGUMENT RACHAEL
    mainServ.addNewBeer(newBeer)
    .then(function(response){
      $scope.newBeer.name = "";//this thingy clears out the name in your form because <form> is lazy
      $scope.getBeer();
    });
  };

$scope.deleteTheBeer = function(beerToRemove){
  console.log(beerToRemove);
  mainServ.destroyTheBeer(beerToRemove)
  .then(function(response){
    $scope.getBeer();//to update list
  });

};

$scope.putTheBeer = function(beerToPut){
  mainServ.changeTheBeer(beerToPut)
  .then(function(response){
    $scope.getBeer();
  })
}


});//end of ctrl


//your controller is your controller


//
// MVC architecture with Angular & Node:
//
// UI SIDE
// index.html
// mainCtrl
// mainServ
//
// DATASIDE
// index.js = "view" (source of view)
// server controllers = controller
// mongo models(schema) = model
