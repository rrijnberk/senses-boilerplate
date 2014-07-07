'use strict';

/**
 * @ngdoc overview
 * @name sensesBoilerplateApp
 * @description
 * # sensesBoilerplateApp
 *
 * Main module of the application.
 */
angular
  .module('sensesBoilerplateApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
