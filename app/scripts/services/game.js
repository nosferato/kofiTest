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
        turnStatus = true,
        userHand = [];

    var emitGameStatus = function(){
      $rootScope.$emit('game:gameStatus', gameActive);
    };

    var emitTurnStatus = function(){
      $rootScope.$emit('game:playerTurnStatus', turnStatus);
    };

    function startGame() {
      gameActive = true;
      turnStatus = true;
      emitGameStatus();
      emitTurnStatus();
    }

    function finishGame (){
      gameActive = false;
      turnStatus = false;
      emitTurnStatus();
      emitGameStatus();
    }

    function setUserHand(selectedNumbers){
      userHand = selectedNumbers;
    }
    //calculate total of all selected dices
    function getTotalSelectedDices () {
      var total = 0;
      for (var i = 0; i < userHand.length; i++)
      {
        total += userHand[i];
      }

      return total;
    }

    function getUserHand () {
      return userHand;
    }

    function startTurn () {
      console.log('startTurn....');
      turnStatus = true;
      emitTurnStatus();
    }

    function finishTurn () {
      console.log('finishTurn....');
      turnStatus = false;
      emitTurnStatus();
    }

    function getGameActive () {
      return gameActive;
    }

    function getPlayerTurnStatus () {
      return turnStatus;
    }

    // Public API here
    return {
      startGame: startGame,
      finishGame: finishGame,
      getUserHand: getUserHand,
      setUserHand: setUserHand,
      getTotalSelectedDices: getTotalSelectedDices,
      startTurn: startTurn,
      finishTurn: finishTurn,
      getGameActive: getGameActive,
      getPlayerTurnStatus: getPlayerTurnStatus
    };
  });
