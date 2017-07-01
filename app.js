
"use strict";

angular.module("calcApp", [])

.filter('sumOfValue', function() {
    return function(data, key) {
      // debugger;
      if (angular.isUndefined(data) || angular.isUndefined(key))
        return 0;
      var sum = 0;

      angular.forEach(data, function(v, k) {
        sum = sum + parseInt(v[key]);
      });
      return sum;

    }

  }).controller("CalcCtrl", function($scope) {
  // $scope.items = [];
  $scope.items = [
    {
      text: "Event tickets",
      once: 25,
      monthly: 100,
      done: false
    }, {
      text: "Whitepaper downloads",
      once: 35,
      monthly: 100,
      done: false
    }
  ];


  $scope.addItem = function() {
    $scope.items.push({
      text: $scope.itemText,
      once: $scope.itemOne,
      monthly: $scope.itemMonthly,
      done: false
    });

    $scope.itemText = "";

    return $scope.itemText;
  };

  $scope.remaining = function() {
    var count;
    count = 0;

    angular.forEach($scope.items, function(item) {
      return count += item.done ? 0 : 1;
    });

    return count;
  };

  $scope.delete = function() {
    var oldItems;
    oldItems = $scope.items;
    $scope.items = [];

    angular.forEach(oldItems, function(item) {
      if (!item.done) {
        return $scope.items.push(item);
      }
    });
  };

  $scope.revenueTotal = function() {
  var total;
  total = 0;

    total = (2+3);

  return total;
};






});  
