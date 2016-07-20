var gulp = require('gulp');
var config = require('./config.js');
var del = require('del');

gulp.task('clean', cleanTask);

function cleanTask() {
    return del.sync(config.env.buildDir);
}
