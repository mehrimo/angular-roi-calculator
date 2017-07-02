"use strict";
//JSBIN https://jsbin.com/yeloxam/10/edit?html,js,output
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

    };

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

//   $scope.revenueTotal = function() {
//   var total;
//   total = 0;
//
//     total = (2+3);
//
//   return total;
// };
//
// $scope.revTotalOne = function () {
//   var total;
//   total = 0;
//
//     total = (2+3);
//
//   return total;
// };
//
// $scope.revTotalMonthly = function () {
//   var total;
//   total = 0;
//
//     total = (2+3);
//
//   return total;
// };

// $scope.sumPrice = function() {
// var revSum2 = 1;
// var revSum2 = parseInt($scope.revTotalOne) + parseInt($scope.revTotalMonthly);
// return revSum2;
// $scope.revSum1 = revSum2;
  // };





// $scope.sumPrice = function() {
//   var total;
//   total = 1;
//
//   angular.forEach($scope.items.once, function(item) {
//     return total += items.once;
//
//   });
//
//   return total;
// };


// $scope.sumPrice = function(products) {
//   var total = 0;
//   angular.forEach(products,function(value,index){
//     total += parseFloat(value.price);
//   });
//   return total.toFixed(2);
// };

console.log("revsum");





});
