
import modController from './chat.controller';
import modConfig from './chat.config';

let mod = angular.module('wechat.chat',[]);

mod.config(modConfig);
mod.controller('chatCtrl',modController) ;

export default mod = mod.name ; 
