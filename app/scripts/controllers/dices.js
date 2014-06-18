'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:DicesCtrl
 * @description
 * # DicesCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('DicesCtrl', function ($scope) {
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
          };

          scope.selectedDices = selectedHand;

        },true);
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

        $scope.newGame = function(){
        $scope.numberOfTries = 0;
         $scope.resetHand();
        };
        $scope.resetHand = function(){
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
