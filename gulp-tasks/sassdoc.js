var gulp = require('gulp');
var config = require('./config.js');
var sassdoc = require('sassdoc');

gulp.task('sassdoc', sassdocTask);

function sassdocTask() {
    return gulp
        .src(config.env.appDir + '/styles/**/*.scss')
        .pipe(sassdoc());
}
