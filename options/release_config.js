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
                        pageList.push({
                            "name":path==_this.config.paths.config.src?files[i].toUpperCase():files[i],
                            "url":"./modules/"+files[i]+"/"
                        });
                    }
                    data.data.pageList = pageList;
                    fs.writeFile(path+'/'+_this.config.paths.config.name, JSON.stringify(data), function () {});
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