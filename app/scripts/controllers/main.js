'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('MainCtrl', function ($scope, localStorageService, NewGameService) {
     NewGameService.reset();
     //set default values for the game
     $scope.amount = 0.0001;
     $scope.targetPoints = -1;
     //setting values from the input fields into NewGameService, validation needed
     $scope.setPlayType = function (playType){
      NewGameService.setPlayType(playType);
     };

     $scope.setAmount = function (amount){
      NewGameService.setAmount(amount);
     };

     $scope.setTargetPoints = function (targetPoints){
      NewGameService.setTargetPoints(targetPoints);
     };

     $scope.startGame = function (path){
       $scope.setTargetPoints($scope.targetPoints || -1);
       $scope.setAmount($scope.amount || 0.0001);
       NewGameService.startGame(path);
     };

  });
