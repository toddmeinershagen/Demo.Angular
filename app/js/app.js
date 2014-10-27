(function () {
   'use strict';

    var app = angular.module('calculatorApp', []);

    app.controller('MainCtrl', function($scope) {
      $scope.name = 'World';
    });
}());
