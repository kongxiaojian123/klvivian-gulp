/**
 * Created by kongxiaojian on 2017/4/28.
 */
var util = require('util');
var Base = require('./base');
var Init=function (name) {
    this.name = name;
};
util.inherits(Init,Base);
module.exports = new Init('init');
// console.log(module.exports.config);