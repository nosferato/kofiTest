'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:BoardCtrl
 * @description Board data and functionality
 * # BoardCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('BoardCtrl', function ($rootScope, $scope, UserScore, Game, RollService) {

    $scope.usersScore = [];
    //change board - fake board that you get from server when you submit score
    $scope.changedBoard = {
                               'score':
                               [
                                 {
                                   'userId': '123',
                                   'scoreBoxes':
                                   [
                                     {'box': '1', 'score': 2},
                                     {'box': '2', 'score': -1},
                                     {'box': '3', 'score': -1},
                                     {'box': '4', 'score': -1},
                                     {'box': '5', 'score': -1},
                                     {'box': '6', 'score': -1},
                                     {'box': '1pair', 'score': -1},
                                     {'box': '2pair', 'score': -1},
                                     {'box': '3ofAKind', 'score': -1},
                                     {'box': '4ofAKind', 'score': -1},
                                     {'box': 'smallStreight', 'score': -1},
                                     {'box': 'largeStreight', 'score': -1},
                                     {'box': 'fullHouse', 'score': -1},
                                     {'box': 'yatzy', 'score': -1},
                                     {'box': 'chance', 'score': -1}
                                   ]
                                 },
                                 {
                                   'userId': '321',
                                   'scoreBoxes':
                                   [
                                     {'box': '1', 'score': -1},
                                     {'box': '2', 'score': -1},
                                     {'box': '3', 'score': -1},
                                     {'box': '4', 'score': -1},
                                     {'box': '5', 'score': -1},
                                     {'box': '6', 'score': -1},
                                     {'box': '1pair', 'score': -1},
                                     {'box': '2pair', 'score': -1},
                                     {'box': '3ofAKind', 'score': -1},
                                     {'box': '4ofAKind', 'score': -1},
                                     {'box': 'smallStreight', 'score': -1},
                                     {'box': 'largeStreight', 'score': -1},
                                     {'box': 'fullHouse', 'score': -1},
                                     {'box': 'yatzy', 'score': -1},
                                     {'box': 'chance', 'score': -1}
                                   ]
                                 }
                               ]
                             };

    //define empty board
    $scope.clearBoard = {
                           'score':
                           [
                             {
                               'userId': '123',
                               'scoreBoxes':
                               [
                                 {'box': '1', 'score': -1},
                                 {'box': '2', 'score': -1},
                                 {'box': '3', 'score': -1},
                                 {'box': '4', 'score': -1},
                                 {'box': '5', 'score': -1},
                                 {'box': '6', 'score': -1},
                                 {'box': '1pair', 'score': -1},
                                 {'box': '2pair', 'score': -1},
                                 {'box': '3ofAKind', 'score': -1},
                                 {'box': '4ofAKind', 'score': -1},
                                 {'box': 'smallStreight', 'score': -1},
                                 {'box': 'largeStreight', 'score': -1},
                                 {'box': 'fullHouse', 'score': -1},
                                 {'box': 'yatzy', 'score': -1},
                                 {'box': 'chance', 'score': -1}
                               ]
                             },
                             {
                               'userId': '321',
                               'scoreBoxes':
                               [
                                 {'box': '1', 'score': -1},
                                 {'box': '2', 'score': -1},
                                 {'box': '3', 'score': -1},
                                 {'box': '4', 'score': -1},
                                 {'box': '5', 'score': -1},
                                 {'box': '6', 'score': -1},
                                 {'box': '1pair', 'score': -1},
                                 {'box': '2pair', 'score': -1},
                                 {'box': '3ofAKind', 'score': -1},
                                 {'box': '4ofAKind', 'score': -1},
                                 {'box': 'smallStreight', 'score': -1},
                                 {'box': 'largeStreight', 'score': -1},
                                 {'box': 'fullHouse', 'score': -1},
                                 {'box': 'yatzy', 'score': -1},
                                 {'box': 'chance', 'score': -1}
                               ]
                             }
                           ]
                         };

    //set empty board by default
     //for some reason it doesn't trigger watch on fiveDiceGame if it isn't written like this
     //$scope.fiveDiceGame = $scope.clearBoard   there must be other solution, investigate this
    $scope.fiveDiceGame = angular.fromJson(angular.toJson($scope.clearBoard));

    //convert the board to angular object
    //this UserScore (userscore.js) should have additional methods for making the custom totals (for displaying on cardboard)
    //that are not given from the server
    $scope.convertToAngular = function (){
     $scope.usersScore = [];
     for (var i = 0; i < $scope.fiveDiceGame.score.length; i++)
     {
       $scope.usersScore.push(new UserScore($scope.fiveDiceGame.score[i]));
     }
    };

    //if value of board has been changed, render board again
    $scope.$watch('fiveDiceGame',function(newVal, oldVal){
     if(newVal !== oldVal)
     {
        $scope.convertToAngular();
     }
    });

    $scope.submitScore = function(box){
          //box is empty
      if (box.score === -1) //and player turn condition should be added
      {
        //temporary...
        box.score = Game.getTotalSelectedDices();

        RollService.submitScore('putScore', { box: box.box, dices: Game.getUserHand()}).then(function(){},function(){

         //whole board should be returned from the server
         // $scope.fiveDiceGame = $scope.changedBoard;
        });

        console.log('Submit score....');
        Game.finishTurn();
        Game.startTurn();
      }
      else
      {
        alert('Can\'t touch this');
      }
    };

     $rootScope.$on('game:gameStatus',function(event, gameActive){
       if (gameActive){
        $scope.resetBoard();
       }
     });

     $scope.resetBoard = function (){
     //for some reason it doesn't trigger watch on fiveDiceGame if it isn't written like this
     //$scope.fiveDiceGame = $scope.clearBoard   there must be other solution, investigate this
        $scope.fiveDiceGame = angular.fromJson(angular.toJson($scope.clearBoard));
     };

     $scope.convertToAngular();
});