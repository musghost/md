'use strict';

/**
 * @ngdoc function
 * @name manocoolApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the manocoolApp
 */
angular.module('manocoolApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
