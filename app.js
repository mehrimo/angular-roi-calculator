(function() {
//JSBIN https://jsbin.com/yeloxam/10/edit?html,js,output

angular.module("calcApp", [])

// Sum one-time and monthly values
.filter('sumOfValue', function() {
    return function(data, key) {
      if (angular.isUndefined(data) || angular.isUndefined(key))
        return 0;
      var sum = 0;

      angular.forEach(data, function(v, k) {
        sum = sum + parseInt(v[key]);
      });
      return sum;
    };
})
// Calculate percentage
.filter('percentage', ['$filter', function ($filter) {
      return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
      };
    }])

  .controller("CalcCtrl", function($scope) {
  // Revenue items
  $scope.items = [
    {
      text: "Event tickets",
      once: 100,
      monthly: 50,
      done: false
    }, {
      text: "Whitepaper downloads",
      once: 500,
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
    // clear input fields after add
    $scope.itemText = "";
    $scope.itemOne = "";
    $scope.itemMonthly = "";
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

  // Expenses items
  $scope.expenses = [
    {
      text: "Event space",
      once: 400,
      monthly: 20,
      done: false
    }, {
      text: "Travel",
      once: 350,
      monthly: 10,
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
    // clear input fields after add
    $scope.expenseText = "";
    $scope.expenseOne = "";
    $scope.expenseMonthly = "";
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

}); // Controller end

})();
