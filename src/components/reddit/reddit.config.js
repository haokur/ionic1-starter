// export default /* @ngInject */ function($stateProvider) {
//   $stateProvider.state('app.reddit', {
//     url: '/reddit',
//     views: {
//       'menuContent': {
//         template: require('./reddit.view.html'),
//         controller: 'redditCtrl'
//       }
//     }
//   });
// }

export default ['$stateProvider',function($stateProvider){
  $stateProvider.state('app.reddit', {
    url: '/reddit',
    views: {
      'menuContent': {
        template: require('./reddit.view.html'),
        controller: 'redditCtrl'
      }
    }
  });
}]
