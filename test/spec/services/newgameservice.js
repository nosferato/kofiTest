'use strict';

describe('Service: NewGameService', function () {

  // load the service's module
  beforeEach(module('piratzyApp'));

  // instantiate service
  var NewGameService;
  beforeEach(inject(function (_NewGameService_) {
    NewGameService = _NewGameService_;
  }));

  it('should do something', function () {
    expect(!!NewGameService).toBe(true);
  });

});
