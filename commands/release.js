/**
 * Created by kongxiaojian on 2017/4/28.
 */
var util = require('util');
var Base = require('./base');
var Release=function () {
    this.cmdList=[
        {name:'build',desc:'项目编译'},
        {name:'config',desc:'config文件生成'},
    ];
};
util.inherits(Release,Base);
Release.prototype.modulesPreAction=function (gulp) {
    // var taskList = ['build'];
    // this.options=taskList.concat(this.options);
    // for(var i=0;i<taskList.length;i++){
    //     new (require('../options/'+this.cmd.name+'_'+taskList[i]))(gulp,taskList[i]);
    // }
};
module.exports = new Release();
// console.log(module.exports.config);