export default [('$stateProvider'), function ($stateProvider) {
  $stateProvider.state('wechat.chat', {
    url: '/chat',
    views: {
      'mainContent': {
        template: require('./chat.view.html'),
        controller: 'chatCtrl'
      }
    }
  });
}]
