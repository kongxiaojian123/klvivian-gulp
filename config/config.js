/**
 * Created by kongxiaojian on 2017/4/28.
 */
var cwd = process.cwd();
var objectCwd=cwd.replace(/kongxiaojian123\.github\.com.*/,'kongxiaojian123.github.com');
var config = {
    cwd: cwd,
    objectCwd:objectCwd,
    git: {
        url:'https://github.com/kongxiaojian123/kongxiaojian123.github.com.git'
    },
    paths: {
        scss:{
            src:cwd+'/css',
            dist:cwd+'/css',
        },
        imgs:{
            src:cwd+'/imgs',
            dist:cwd+'/imgs',
        },
        config:{
            src:objectCwd+'/modules',
            name:'config.json'
        }
    },
};

module.exports = config;