'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:SinglegameCtrl
 * @description
 * # SinglegameCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('SingleGameCtrl', function ($scope, Game) {
  console.log("asd")
    Game.startGame();
  });
