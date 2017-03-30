






let mod = angular.module('app.home', []);

mod.config(['$stateProvider',function($stateProvider){
  $stateProvider.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        template: require('../home/home.view.html'),
        controller: 'homeCtrl'
      }
    }
  });
}]);

mod.controller('homeCtrl',['$scope',function($scope){
  console.log(1)
  console.log(angular)
}])


export default mod = mod.name;


// app.controller('homeCtrl', ['$scope', function ($scope) {
//   console.log($scope)
// }])

// var appHome = angular.module('app',[]) ;
// var tmpl = require('./test.view.html');



// appHome.controller('homeCtrl',['$scope',function($scope){
//   console.log($scope)
// }])
