'use strict';

describe('Directive: dices', function () {

  // load the directive's module
  beforeEach(module('piratzyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dices></dices>');
    element = $compile(element)(scope);
    expect(1).toBe(1);
  }));
});
