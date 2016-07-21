var gulp = require('gulp');
var sassdoc = require('sassdoc');
var config = require('./config.js');

gulp.task('sassdoc', sassdocTask);

function sassdocTask() {
    return gulp
        .src(config.env.appDir + '/styles/**/*.scss')
        .pipe(sassdoc());
}
