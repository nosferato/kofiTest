'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:DicesCtrl
 * @description
 * # DicesCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('DicesCtrl', function ($scope, $rootScope, Game) {
        $scope.numberOfTries = -1;
        $scope.dicesArray = [];

        $scope.$watch('dicesArray', function(newArray, oldArray, scope){
          var selectedHand = [];
          for (var i = 0; i < scope.dicesArray.length;i++)
          {
           if (scope.dicesArray[i].selected)
           {
             selectedHand.push(scope.dicesArray[i].number);
           }
          }

          Game.setUserHand(selectedHand);
        },true);

        $scope.showRollButton = function(){
          return $scope.gameActive && $scope.playerTurnStatus;
        };
        $scope.showNewGameButton = function(){
          return !$scope.gameActive;
        };

        $scope.getDices = function (){
          if ($scope.numberOfTries < 3)
          {
            $scope.numberOfTries++;
            for (var i = 0; i < $scope.dicesArray.length;i++)
            {
             if (!$scope.dicesArray[i].selected)
              {
                $scope.dicesArray[i].number = Math.floor((Math.random() * 6) + 1);
              }
            }
          }
        };

        $rootScope.$on('game:gameStatus', function(event,gameStatus){
          $scope.gameActive = gameStatus;
        });

        $rootScope.$on('game:playerTurnStatus', function(event,playerTurnStatus){
          $scope.playerTurnStatus = playerTurnStatus;
          if(!playerTurnStatus)
          {
            $scope.resetHand();
          }
        });

        $scope.newGame = function(){
          $scope.resetHand();
          Game.startGame();
        };

        $scope.resetHand = function(){

          $scope.numberOfTries = 0;
          $scope.dicesArray = [
            {selected: false},
            {selected: false},
            {selected: false},
            {selected: false},
            {selected: false}
          ];
        };
        $scope.selectDice = function(index){
          $scope.dicesArray[index].selected = !$scope.dicesArray[index].selected;
        };
  });
