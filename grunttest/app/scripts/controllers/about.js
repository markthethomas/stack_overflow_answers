'use strict';

/**
 * @ngdoc function
 * @name grunttestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the grunttestApp
 */
angular.module('grunttestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
