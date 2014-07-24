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

     $scope.fiveDiceGame = {
                              "score":
                              [
                                {
                                  "userId": "123",
                                  "scoreBoxes":
                                  [
                                    {"box": "1", "score": 3},
                                    {"box": "2", "score": 6},
                                    {"box": "3", "score": 12},
                                    {"box": "4", "score": -1},
                                    {"box": "5", "score": 20},
                                    {"box": "6", "score": 12},
                                    {"box": "1pair", "score": 8},
                                    {"box": "2pair", "score": 18},
                                    {"box": "3ofAKind", "score": 15},
                                    {"box": "4ofAKind", "score": 0},
                                    {"box": "smallStreight", "score": 15},
                                    {"box": "largeStreight", "score": -1},
                                    {"box": "fullHouse", "score": 28},
                                    {"box": "yatzy", "score": 50},
                                    {"box": "chance", "score": 28}
                                  ]
                                },
                                {
                                  "userId": "321",
                                  "scoreBoxes":
                                  [
                                    {"box": "1", "score": 5},
                                    {"box": "2", "score": 2},
                                    {"box": "3", "score": 9},
                                    {"box": "4", "score": 4},
                                    {"box": "5", "score": 15},
                                    {"box": "6", "score": 24},
                                    {"box": "1pair", "score": 8},
                                    {"box": "2pair", "score": 18},
                                    {"box": "3ofAKind", "score": 15},
                                    {"box": "4ofAKind", "score": -1},
                                    {"box": "smallStreight", "score": 15},
                                    {"box": "largeStreight", "score": -1},
                                    {"box": "fullHouse", "score": 28},
                                    {"box": "yatzy", "score": 0},
                                    {"box": "chance", "score": 30}
                                  ]
                                }
                              ]
                            };

     $scope.convertToAngular = function (){
       $scope.usersScore = [];
       for (var i = 0; i < $scope.fiveDiceGame.score.length; i++)
       {
         $scope.usersScore.push(new UserScore($scope.fiveDiceGame.score[i]))
       }
     };

    $scope.$watch('fiveDiceGame',function(newVal, oldVal){
     if(newVal !== oldVal)
     {
        $scope.convertToAngular();
     }
    });

    $scope.submitScore = function(box){

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


     $rootScope.$on('game:gameStatus',function(event,data){
     if (data){
      $scope.promenaDicea();
     }

     });
     $scope.promenaDicea = function (){
        $scope.fiveDiceGame = $scope.clearBoard;
     };

     $scope.convertToAngular();
});