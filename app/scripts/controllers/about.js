'use strict';

/**
 * @ngdoc function
 * @name sensesBoilerplateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sensesBoilerplateApp
 */
angular.module('sensesBoilerplateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
