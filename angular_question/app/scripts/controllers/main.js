'use strict';

/**
 * @ngdoc function
 * @name angularQuestionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularQuestionApp
 */
angular.module('angularQuestionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.news = [{
      entry: '1',
      title: 'Title blah blah blah',
      image: 'http://placehold.it/200x200',
      link: 'placehold.it/200x200'
    }

    ];


  });
