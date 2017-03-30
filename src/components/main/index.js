
import modController from './main.controller';
import modConfig from './main.config';

let mod = angular.module('app.main',[]);

mod.config(modConfig);
mod.controller('mainCtrl',modController) ;

export default mod = mod.name ; 
