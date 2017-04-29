/**
 * Created by kongxiaojian on 2017/4/28.
 */
var fs = require('fs');
function Config (gulp,name) {
    this.gulp = gulp;
    this.name = name;
    this.init();
};
Config.prototype = {
    config:require('../config/config'),
    init:function () {
        var _this=this;
        this.gulp.task(this.name, function() {
            _this.create_config();
        });
    },
    create_config:function () {
        var _this=this;
        console.log('config: 生成config开始');
        map(_this.config.paths.config.src);
        function map(path) {
            fs.readdir(path, function(err, files) {
                if (err) {
                    console.log('config: 生成config失败');
                } else {
                    for(var i =0;i<files.length;i++){
                        if(files[i]=='modules'){
                            map(path+'/modules');
                            return;
                        }
                    }
                    var data={
                        "code":1,
                            "data":{}
                        };
                    var pageList=[];
                    for(var i =0;i<files.length;i++){
                        if(files[i].indexOf('.')>=0)continue;
                        (function (i) {
                            fs.readFile(path+'/'+files[i]+'/index.html',function(err,readData){
                                if(err){}else{
                                    var str = readData.toString();
                                    var title = str.match(/<\s*title.*?>(.*?)<\s*\/title\s*>/)||['',''];
                                    var desc = str.match(/<\s*meta.*?name\s*=\s*["']description["'].*?content\s*=\s*["'](.*?)["']/)||['',''];
                                    title=title[1];
                                    desc=desc[1];
                                    pageList.push({title:title,desc:desc,url:'./modules/'+files[i]+'/'});
                                    data.data.pageList = pageList;
                                    fs.writeFile(path+'/'+_this.config.paths.config.name, JSON.stringify(data), function () {});
                                }
                            });
                        })(i);
                    }
                    if(files.toString().search(/css|index|js|imgs/)<0){
                        for(var i =0;i<files.length;i++){
                            if(files[i].search('.')>=0)continue;
                            map(path+'/'+files[i]);
                        }
                    }
                    if(path==_this.config.paths.config.src)console.log('config: 生成config完成');
                }
            });
        }
    }
};
module.exports = Config;