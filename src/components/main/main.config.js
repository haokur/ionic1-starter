export default [('$stateProvider'), function ($stateProvider) {
  $stateProvider.state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        template: require('./main.view.html'),
        controller: 'mainCtrl'
      }
    }
  });
}]
