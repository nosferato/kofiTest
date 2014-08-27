'use strict';

describe('Controller: SinglegameCtrl', function () {

  // load the controller's module
  beforeEach(module('piratzyApp'));

  var SinglegameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SinglegameCtrl = $controller('SinglegameCtrl', {
      $scope: scope
    });
  }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
});
