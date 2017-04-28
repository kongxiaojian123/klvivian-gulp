/**
 * Created by kongxiaojian on 2017/4/28.
 */
var gulp = require('gulp');

function Base() {

}

Base.prototype = {

    seq: [],
    config:require('../config/config'),
    init: function (commander) {
        this.commander = commander;
    },
};


module.exports = Base;