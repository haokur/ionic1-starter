export default /* @ngInject */ function($stateProvider) {
  $stateProvider.state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        template: require('./test.view.html'),
        controller: 'homeCtrl'
      }
    }
  });
}
