/**
 * Created by kongxiaojian on 2017/4/28.
 */
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
function Build (gulp,name) {
    this.gulp = gulp;
    this.name = name;
    this.init();
};
Build.prototype = {
    config:require('../config/config'),
    init:function () {
        var _this=this;
        this.gulp.task(this.name, function() {
            _this.compile_compass();
        });
    },
    compile_compass:function () {
        var _this=this;
        console.log('build: 编译css开始');
        _this.gulp.src(_this.config.paths.scss.src+'/*.scss')
            .pipe(compass({
                css: _this.config.paths.scss.dist,
                sass: _this.config.paths.scss.src,
                image: _this.config.paths.imgs.src
            }))
            .pipe(minifyCSS())
            .pipe(_this.gulp.dest(_this.config.paths.scss.dist))
            .on('end', function () {
                console.log('build: 编译css完成');
            });
    }
};
module.exports = Build;