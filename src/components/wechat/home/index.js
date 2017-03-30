
import modController from './home.controller';
import modConfig from './home.config';

let mod = angular.module('wechat.home',[]);

mod.config(modConfig);
mod.controller('homeCtrl',modController) ;

export default mod = mod.name ; 
