#!/usr/bin/env node
/**
 * Created by kongxiaojian on 2017/4/28.
 */
var commander = require('commander');
var cmdList=[
    {name:'release',desc:'编译项目'},
    {name:'server',desc:'搭建服务器'},
];
commander.version('0.0.1').usage('<command> [options]');
//command create
for(var i=0;i<cmdList.length;i++){
    var cmdModule = require('./commands/'+cmdList[i].name);
    cmdModule.init(commander,cmdList[i]);
}
commander.parse(process.argv);

if(process.argv.length<=2){
    commander.help();
}