/**
 * Created by kongxiaojian on 2017/4/28.
 */
var util = require('util');
var Base = require('./base');
var cmdList=[];
var Server=function () {
    this.cmdList=cmdList;
};
util.inherits(Server,Base);
module.exports = new Server();
// console.log(module.exports.config);