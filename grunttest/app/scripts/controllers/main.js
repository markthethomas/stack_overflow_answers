'use strict';

/**
 * @ngdoc function
 * @name grunttestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the grunttestApp
 */
angular.module('grunttestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
