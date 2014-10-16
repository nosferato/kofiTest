'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:DicesCtrl
 * @description Dices data and functionality
 * # DicesCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('DicesCtrl', function ($scope, $rootScope, Game, RollService) {
        //should be removed after refactoring rollservice.js
        RollService.init();

        $scope.numberOfTries = -1;
        $scope.dicesArray = [];
        $scope.gameActive = Game.getGameActive();
        $scope.playerTurnStatus = Game.getPlayerTurnStatus();

        //on change of the dicesArray variable, set user hand (selected dices)
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


        function randomNumber() {
          Math.random();
          Math.random();
          Math.random();
          Math.random();
          Math.random();

          return Math.floor(Math.random() * 6) + 1;
        }

        $scope.getDices = function (){
          if ($scope.numberOfTries < 3)
          {
            var dicesArray = $scope.dicesArray;
            var dicesForRoll = [];

            //if dice is selected, put it into new array and send it to Roll function
            //probably should extend userHand in game.js to set and get the ordinal number of selected dices
            if ($scope.numberOfTries !== 0)
            {
              for (var i = 0; i < dicesArray.length;i++)
              {
                if (!dicesArray[i].selected)
                {
                  dicesForRoll.push(i+1);
                }
              }
            }

            RollService.roll('roll', dicesForRoll).then(function(){},function(){
            //faking the response from server and putting the dices from server into array

              //new dices is array of dices returned from server
              var newDices = [];

              //faking the newDices array that should be returned from server
              for (var i = 0; i < dicesArray.length; i++)
              {
                newDices.push(randomNumber());
              }

              //replace dices with the new one
              for (var j = 0; j < dicesArray.length;j++)
              {
               if (!dicesArray[j].selected)
               {
                 dicesArray[j].number = newDices[0];
                 newDices.splice(0,1);
               }
              }

            });

            $scope.numberOfTries++;
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

        $scope.resetHand();
  });
