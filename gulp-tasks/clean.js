var gulp = require('gulp');
var del = require('del');
var config = require('./config.js');

gulp.task('clean', cleanTask);

function cleanTask() {
    return del.sync(config.env.buildDir);
}
