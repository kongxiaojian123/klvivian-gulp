/**
 * Created by kongxiaojian on 2017/4/28.
 */
var util = require('util');
var Base = require('./base');
var browserSync = require('browser-sync').create();
var cmdList=[];
var Server=function () {
    this.cmdList=cmdList;
};
util.inherits(Server,Base);
Server.prototype.modulesPreAction=function (gulp) {
    var _this = this;
    console.log(_this.config.objectCwd);
    browserSync.init({
        browser: "google chrome",
        files: [_this.config.objectCwd+'/**'],
        server: {
            baseDir: _this.config.objectCwd
        },
        startPath: 'index.html',
        port:8585
    });
};
module.exports = new Server();
// console.log(module.exports.config);