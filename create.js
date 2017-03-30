var path = require('path')
var PAGE_PATH = path.resolve(__dirname, 'src/components')
var fs = require('fs')


// 获取到参数
var arguments = process.argv.splice(2)

// 拼接文件路径
var toCreateFilePath = path.resolve(PAGE_PATH, arguments[0])

// 查找文件是否存在
fs.exists(toCreateFilePath,(result)=>{
    if(!result) {
        fs.mkdir(toCreateFilePath,0777,(err)=>{
            if(err){
                console.log(err)
            }
            else {
                createFiles()
            }
        });
    }
    else{
        console.log(`文件夹已经存在 ${toCreateFilePath}`)
    }
})

var modNameArr = arguments[0].split('/')
var modName = (modNameArr.length === 1) ? arguments[0] : modNameArr[1]
var containerName = (modNameArr.length === 1) ? arguments[0] : modNameArr[0]


var templateText = {
    config : 
`export default [('$stateProvider'), function ($stateProvider) {
  $stateProvider.state('${containerName}.${modName}', {
    url: '/${modName}',
    views: {
      'menuContent': {
        template: require('./${modName}.view.html'),
        controller: '${modName}Ctrl'
      }
    }
  });
}]
`,
    controller:
`
import styles from './${modName}.style.scss';

export default ['$scope',function($scope){
  $scope.styles = styles; 
}]
`,
    view :
`
<ion-view ng-class="styles.local" view-title="${modName}">
  <ion-content>
    
  </ion-content>
</ion-view>
`,
    style :
`
@import '../../assets/scss/index';

:local(.local) {
  ion-content {

  }
}
`,
    index:
`
import modController from './${modName}.controller';
import modConfig from './${modName}.config';

let mod = angular.module('${containerName}.${modName}',[]);

mod.config(modConfig);
mod.controller('${modName}Ctrl',modController) ;

export default mod = mod.name ; 
`
}

var fileNames = {
    config: `${modName}.config.js`,
    controller: `${modName}.controller.js`,
    view: `${modName}.view.html`,
    style: `${modName}.style.scss`,
    index: `index.js`
}

function createFile(filename) {
    var _filePath = `${toCreateFilePath}/${fileNames[filename]}`
    fs.exists(_filePath,function(result){
        if(result) {
            console.log(`已经存在 ${_filePath}`)
        }
        else {
            fs.writeFile(`${toCreateFilePath}/${fileNames[filename]}`,templateText[filename],(err)=>{
                if(err){
                    console.log(err)
                }
                else {
                    console.log(`创建${fileNames[filename]}成功!`)
                }
            })
        }
    })
}

function createFiles(){
    for(var fileName in fileNames) {
        createFile(fileName);
    }
}



