(function() {
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
})

.filter('percentage', ['$filter', function ($filter) {
      return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
      };
    }])

  .controller("CalcCtrl", function($scope) {
  // Items
  $scope.items = [
    {
      text: "Event tickets",
      once: 100,
      monthly: 50,
      done: false
    }, {
      text: "Whitepaper downloads",
      once: 50,
      monthly: 25,
      done: false
    }, {
      text: "Online Sales",
      once: 25,
      monthly: 85,
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

  $scope.deleteRv = function() {
    var oldItems;
    oldItems = $scope.items;
    $scope.items = [];
    angular.forEach(oldItems, function(item) {
      if (!item.done) {
        return $scope.items.push(item);
      }
    });
  };

  // Expenses
  $scope.expenses = [
    {
      text: "Event space",
      once: 500,
      monthly: 20,
      done: false
    }, {
      text: "Marketing collateral",
      once: 200,
      monthly: 40,
      done: false
    }
  ];

  $scope.addExpense = function() {
    $scope.expenses.push({
      text: $scope.expenseText,
      once: $scope.expenseOne,
      monthly: $scope.expenseMonthly,
      done: false
    });
    $scope.expenseText = "";
    return $scope.expenseText;
  };

  $scope.remaining = function() {
    var count;
    count = 0;
    angular.forEach($scope.expenses, function(expense) {
      return count += expense.done ? 0 : 1;
    });

    return count;
  };

  $scope.deleteExp = function() {
    var oldExpenses;
    oldExpenses = $scope.expenses;
    $scope.expenses = [];
    angular.forEach(oldExpenses, function(expense) {
      if (!expense.done) {
        return $scope.expenses.push(expense);
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


// $scope.sumPrice = function() {return $scope.revTotalOne + $scope.revTotalMonthly;};

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

    // $scope.sumPrice = function(price){return price/$scope.currRate * $scope.initialAmt;}

// $scope.sumPrice = function(products) {
//   var total = 0;
//   angular.forEach(products,function(value,index){
//     total += parseFloat(value.price);
//   });
//   return total.toFixed(2);
// };

console.log("hello");

});

})();
