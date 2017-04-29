/**
 * Created by kongxiaojian on 2017/4/28.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');

function Base() {}

Base.prototype = {
    config:require('../config/config'),
    runSequence:runSequence,
    init: function (commander,cmd) {
        this.cmd = cmd;
        this.options = [];
        this.parseArgv();
        this.commander = commander.command(this.cmd.name).description(this.cmd.desc);
        this.modulesInit();
        this.modulesAction();
    },
    modulesInit:function () {
        for(var i=0;i<this.cmdList.length;i++){
            this.commander.option('-'+this.cmdList[i].name[0]+', --'+this.cmdList[i].name, this.cmdList[i].desc);
        }
    },
    modulesPreAction:function () {

    },
    modulesAction:function () {
        var _this = this;
        _this.commander.action(function(cmd){
            for(var i = 0;i<_this.options.length;i++){
                new (require('../options/'+_this.cmd.name+'_'+_this.options[i]))(gulp,_this.options[i]);
            }
            if(_this.cmdList.length){
                if(_this.options.length){
                    _this.modulesPreAction(gulp);
                    runSequence.apply(null,_this.options);
                }else{
                    _this.commander.help();
                }
            }
        });
    },
    parseArgv:function () {
        var argv = process.argv.slice(3);
        var parseArgv = [];
        for(var i=0;i<argv.length;i++){
            if(argv[i].indexOf('--')<0){
                argv[i]=argv[i].replace('-','');
                for(var j=0;j<argv[i].length;j++){
                    for(var t=0;t<this.cmdList.length;t++){
                        if(this.cmdList[t].name[0]==argv[i][j]){
                            parseArgv.push(this.cmdList[t].name);
                        }
                    }
                }
            }else{
                argv[i]=argv[i].replace('--','');
                parseArgv.push(argv[i]);
            }
        }
        this.setArgv(parseArgv);
    },
    setArgv:function (argv) {
        var argvObj = {};
        var argvLen =0;
        for(var i=0;i<argv.length;i++){
            if(!argvObj[argv[i]]){
                argvObj[argv[i]]=i;
                argvLen++;
            }
        }
        for(var j=0;j<argvLen;j++){
            for(var attr in argvObj){
                if(argvObj[attr]==j)this.options.push(attr);
            }
        }
    }
};


module.exports = Base;