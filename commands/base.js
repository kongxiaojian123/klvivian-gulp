/**
 * Created by kongxiaojian on 2017/4/28.
 */
var gulp = require('gulp');

function Base() {}

Base.prototype = {
    config:require('../config/config'),
    init: function (commander,cmd) {
        this.cmd = cmd;
        this.commander = commander.command(this.cmd.name).description(this.cmd.desc);
        this.modulesInit();
        this.modulesAction();
        if(process.argv.length<=3&&this.cmdList.length){
            this.commander.help();
        }
    },
    modulesInit:function () {},
    modulesAction:function () {
        this.commander.action(function(cmd){
            for(var i = 0;i<cmd.options.length;i++){
                var option = cmd.options[i];
                var option_name = option.long.replace(/^--/,'');
                require('../options/'+option_name);
            }
        });
    },
};


module.exports = Base;