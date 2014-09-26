'use strict';

/**
 * @ngdoc overview
 * @name manocoolApp
 * @description
 * # manocoolApp
 *
 * Main module of the application.
 */
angular
  .module('manocoolApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/report', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/report/revision-rapida', {
        templateUrl: 'views/filters/revision-rapida.html',
        controller: 'RevisionrapidaCtrl'
      })
      .when('/report/revision-rapida/:id', {
        templateUrl: 'views/filters/lista.html',
        controller: 'listCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
