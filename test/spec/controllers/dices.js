'use strict';

describe('Controller: DicesCtrl', function () {

  // load the controller's module
  beforeEach(module('piratzyApp'));

  var DicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DicesCtrl = $controller('DicesCtrl', {
      $scope: scope
    });
  }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
});
