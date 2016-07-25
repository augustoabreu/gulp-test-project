var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');

gulp.task('imagemin', imageminTask);

function imageminTask() {
    return gulp
        .src(config.env.appDir + '/**/*.+(png|jpg|gif|svg)')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest(config.env.buildDir))
}