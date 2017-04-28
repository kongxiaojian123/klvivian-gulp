/**
 * Created by kongxiaojian on 2017/4/28.
 */
var util = require('util');
var Base = require('./base');
var cmdList=[
    {name:'optimize',desc:'资源压缩'},
];
var Release=function () {
    this.cmdList=cmdList;
};
util.inherits(Release,Base);
Release.prototype.modulesInit=function () {
    for(var i=0;i<this.cmdList.length;i++){
        this.commander.option('-'+this.cmdList[i].name[0]+', --'+this.cmdList[i].name, this.cmdList[i].desc);
    }
};
module.exports = new Release();
// console.log(module.exports.config);