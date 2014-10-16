'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:DicesCtrl
 * @description
 * # DicesCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('DicesCtrl', function ($scope, $rootScope, Game, RollService) {
         RollService.init();

        $scope.numberOfTries = -1;
        $scope.dicesArray = [];
        $scope.gameActive = Game.getGameActive();
        $scope.playerTurnStatus = Game.getPlayerTurnStatus();

        $scope.$watch('dicesArray', function(newArray, oldArray, scope){
          var selectedHand = [];
          for (var i = 0; i < scope.dicesArray.length;i++)
          {
           if (scope.dicesArray[i].selected)
           {
             selectedHand.push(i);
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

              var dices = [ { value: randomNumber()}, { value: randomNumber()}, { value: randomNumber()}];
              var newDices = [];

              if ($scope.numberOfTries === 1)
              {
                 dices=[{ value: randomNumber()}, { value: randomNumber()}, { value: randomNumber()}, { value: randomNumber()}, { value: randomNumber()}];
              }

              for (var i = 0; i < dices.length; i++)
              {
               newDices.push(dices[i].value);
              }
              console.log(newDices);

              for (var j = 0; i < dicesArray.length;i++)
              {
               if (!dicesArray[j].selected && newDices[0])
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
