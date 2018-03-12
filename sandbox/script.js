const sandbox = angular.module('sandbox', [])

sandbox.run([
  '$rootScope', '$location', '$timeout', '$filter',
  ($rootScope, $location, $timeout, $filter) => {
    window.root = $rootScope;
    window.debo = {};
  }
]);


sandbox.controller('appController',
  ['$rootScope', '$scope',
  ($rootScope, $scope) => {
    $scope.text = "Hello World"
    $scope.changeText = () => {
      debugger
      $scope.text += " abc"
    }
  }
])