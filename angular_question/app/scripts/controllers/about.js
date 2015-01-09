'use strict';

/**
 * @ngdoc function
 * @name angularQuestionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularQuestionApp
 */
angular.module('angularQuestionApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
