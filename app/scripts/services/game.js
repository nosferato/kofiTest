'use strict';

/**
 * @ngdoc service
 * @name piratzyApp.Game
 * @description
 * # Game
 * Factory in the piratzyApp.
 */
angular.module('piratzyApp')
  .factory('Game', function ($rootScope) {
    var gameActive = false,
        turnStatus = false,
        userHand = [];

    var emitGameStatus = function(){
      $rootScope.$emit('game:gameStatus', gameActive);
    }

    var emitTurnStatus = function(){
      $rootScope.$emit('game:playerTurnStatus', turnStatus);
    }

    function startGame() {
      gameActive = true;
      turnStatus = true;
      emitGameStatus();
      emitTurnStatus();
    };

    function finishGame (){
      gameActive = false;
      turnStatus = false;
      emitTurnStatus();
      emitGameStatus();
    };

    function setUserHand(selectedNumbers){
      userHand = selectedNumbers;
    };

    function getTotalSelectedDices () {
      var total = 0;
      for (var i = 0; i < userHand.length; i++)
      {
        total += userHand[i];
      }
      return total;
    };

    function startTurn () {
      console.log('startTurn....');
      turnStatus = true;
      emitTurnStatus();
    };

    function finishTurn () {
      console.log('finishTurn....');
      turnStatus = false;
      emitTurnStatus();
    };

    // Public API here
    return {
      startGame: startGame,
      finishGame: finishGame,
      setUserHand: setUserHand,
      getTotalSelectedDices: getTotalSelectedDices,
      startTurn: startTurn,
      finishTurn: finishTurn
    };
  });
