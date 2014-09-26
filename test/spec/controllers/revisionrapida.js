'use strict';

describe('Controller: RevisionrapidaCtrl', function () {

  // load the controller's module
  beforeEach(module('manocoolApp'));

  var RevisionrapidaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RevisionrapidaCtrl = $controller('RevisionrapidaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
