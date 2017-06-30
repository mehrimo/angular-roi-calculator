
"use strict";

// var CalcCtrl;

// CalcCtrl = function($scope) {


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
  $scope.items = [
    {
      text: "learn angular",
      once: 25,
      monthly: 100,
      done: false
    }, {
      text: "build an angular app",
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

//    $scope.revTotalOne = function() {
//     var total = 0;

//     angular.forEach($scope.items, function(item) {
//       return item.oneTime + item.oneTime;
//     });

//     return total;
//   };


//    $scope.revTotalOne = function() {
//     var total = 0;

//     angular.forEach($scope.items, function(item) {
//       return item.oneTime + item.oneTime;
//     });

//     return total;
});







//take all item.oneTime and add together

// var rev.Total = 0
//rev.Total = revTotalOne + revTotalMonth

// angular.module("calcApp", []).controller("CalcCtrl", CalcCtrl);
