'use strict';

/**
 * @ngdoc function
 * @name ghIssueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ghIssueApp
 */
angular.module('ghIssueApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
