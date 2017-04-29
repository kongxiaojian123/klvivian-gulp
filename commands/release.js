/**
 * Created by kongxiaojian on 2017/4/28.
 */
var util = require('util');
var Base = require('./base');
var Release=function () {
    this.cmdList=[
        {name:'optimize',desc:'资源压缩'},
    ];
};
util.inherits(Release,Base);
module.exports = new Release();
// console.log(module.exports.config);