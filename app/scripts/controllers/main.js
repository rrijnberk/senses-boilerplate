'use strict';

/**
 * @ngdoc function
 * @name sensesBoilerplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sensesBoilerplateApp
 */
angular.module('sensesBoilerplateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
