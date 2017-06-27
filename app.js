"use strict";
var app = angular.module('roi', []);

app.controller('StartupController', function ($scope) {
  var date = new Date().getDate();

  $scope.funding = { dailycount:0, monthlycount:0, dailyaftertax:0, monthlyaftertax:0 };

  var computeDaily = function() {
    $scope.funding.dailyaftertax = (($scope.funding.dailycount * 28) / 1.33)
  };

  var computeMonthly = function() {
    $scope.funding.monthlyaftertax = ((28 * $scope.funding.monthlycount / date) / 1.33 )
  };

  $scope.$watch('funding.dailycount', computeDaily);
  $scope.$watch('funding.monthlycount', computeMonthly);

});


app.controller('TextController', function ($scope) {
  $scope.text = "Welcome";
});
