'use strict';

/**
 * @ngdoc function
 * @name piratzyApp.controller:SinglegameCtrl
 * @description start single game
 * # SinglegameCtrl
 * Controller of the piratzyApp
 */
angular.module('piratzyApp')
  .controller('SingleGameCtrl', function ($scope, Game) {
    Game.startGame();
  });
