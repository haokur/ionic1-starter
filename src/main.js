/* constants */
import 'ionic-sdk/release/js/ionic.bundle.min';
import 'ng-cordova';

import modConstant from './config/constant.mod';
import configRun from './config/run.config';
import configRouter from './config/router.config';
import configIonic from './config/ionic.config';
import facConnMonitor from './shared/factories/connectivityMonitor.factory';
// /* my modules */
// /*********************my modules*************************/
import modHome from './components/home';
// import modLocation from './components/location';
import modReddit from './components/reddit';
import modSettings from './components/settings';
import mainPage from './components/main';
import wechatHome from './components/wechat/home';
import wechatChat from './components/wechat/chat'
// /********************************************************/


const app = angular.module('app', [
  'ionic', 'ui.router', 'ngCordova',
  modConstant,
  modHome, modReddit,
  // modLocation,
  modSettings,mainPage,wechatHome,wechatChat
]);

/* set up configuration */
app.config(configRouter);
app.config(configIonic);
app.factory('ConnectivityMonitor', facConnMonitor);
app.run(configRun);

