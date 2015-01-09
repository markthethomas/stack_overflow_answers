(function() {
  var app = angular.module("store", []);
  var gem = [{
    name: "Dodec",
    price: 2.95,
    canPurchase: true,
    soldOut: false
  }, {
    name: "Panta",
    price: 20.4,
    canPurchase: true,
    soldOut: false
  }];
  app.controller("storeController", function($scope) {
    $scope.product = gem;
  });

  app.controller("tabController", function($scope) {
    $scope.tab = 1;
    $scope.SetTab = function(value) {
      $scope.tab = value;
    };
  });


})();
