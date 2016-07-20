var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var browserSync = require('browser-sync');

gulp.task('watch', ['sass', 'copy', 'browserSync'], watchTask);

function watchTask(){
    gulp.watch(config.env.appDir + '/**/*.scss', ['sass']);
    gulp.watch(config.env.appDir + '/**/*.{html,js}', ['copy']);
}
