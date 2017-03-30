export default [('$stateProvider'), function ($stateProvider) {
  $stateProvider.state('wechat.home', {
    url: '/home',
    views: {
      'mainContent': {
        template: require('./home.view.html'),
        controller: 'homeCtrl'
      }
    }
  });
}]
