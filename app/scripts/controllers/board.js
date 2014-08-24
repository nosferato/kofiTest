'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('BoardCtrl', function ($rootScope, $scope, UserScore, Game) {

     $scope.usersScore = [];

     $scope.clearBoard = {
                           "score":
                           [
                             {
                               "userId": "123",
                               "scoreBoxes":
                               [
                                 {"box": "1", "score": -1},
                                 {"box": "2", "score": -1},
                                 {"box": "3", "score": -1},
                                 {"box": "4", "score": -1},
                                 {"box": "5", "score": -1},
                                 {"box": "6", "score": -1},
                                 {"box": "1pair", "score": -1},
                                 {"box": "2pair", "score": -1},
                                 {"box": "3ofAKind", "score": -1},
                                 {"box": "4ofAKind", "score": -1},
                                 {"box": "smallStreight", "score": -1},
                                 {"box": "largeStreight", "score": -1},
                                 {"box": "fullHouse", "score": -1},
                                 {"box": "yatzy", "score": -1},
                                 {"box": "chance", "score": -1}
                               ]
                             },
                             {
                               "userId": "321",
                               "scoreBoxes":
                               [
                                 {"box": "1", "score": -1},
                                 {"box": "2", "score": -1},
                                 {"box": "3", "score": -1},
                                 {"box": "4", "score": -1},
                                 {"box": "5", "score": -1},
                                 {"box": "6", "score": -1},
                                 {"box": "1pair", "score": -1},
                                 {"box": "2pair", "score": -1},
                                 {"box": "3ofAKind", "score": -1},
                                 {"box": "4ofAKind", "score": -1},
                                 {"box": "smallStreight", "score": -1},
                                 {"box": "largeStreight", "score": -1},
                                 {"box": "fullHouse", "score": -1},
                                 {"box": "yatzy", "score": -1},
                                 {"box": "chance", "score": -1}
                               ]
                             }
                           ]
                         };

    //set empty board by default
    $scope.fiveDiceGame = angular.fromJson(angular.toJson($scope.clearBoard));

    $scope.convertToAngular = function (){
     $scope.usersScore = [];
     for (var i = 0; i < $scope.fiveDiceGame.score.length; i++)
     {
       $scope.usersScore.push(new UserScore($scope.fiveDiceGame.score[i]))
     }
    };

    $scope.$watch('fiveDiceGame',function(newVal, oldVal){
    console.log("asdas")
    console.log(newVal)
    console.log(oldVal)
     if(newVal !== oldVal)
     {
        $scope.convertToAngular();
     }
    });

    $scope.submitScore = function(box){
          //box is empty
      if (box.score === -1) //and player turn
      {
        box.score = Game.getTotalSelectedDices();
        console.log("Submit score....");
        Game.finishTurn();
        Game.startTurn();
      }
      else
      {
        alert("Can't touch this");
      }
    };


     $rootScope.$on('game:gameStatus',function(event, gameActive){
       if (gameActive){
        $scope.resetBoard();
       }
     });

     $scope.resetBoard = function (){
//     alert("asdas");
        console.log( $scope.fiveDiceGame);
        $scope.fiveDiceGame = angular.fromJson(angular.toJson($scope.clearBoard));
        console.log( $scope.clearBoard);
        console.log( $scope.fiveDiceGame);

     };

     $scope.convertToAngular();
});