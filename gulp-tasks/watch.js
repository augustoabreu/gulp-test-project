var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var browserSync = require('browser-sync');

gulp.task('watch', ['imageSprite', 'sass', 'copy', 'browserSync'], watchTask);

function watchTask(){
    var filesToCopy = [
        config.env.appDir + '/**/*.{html,js}',
        config.env.appDir + '/**/images/*'
    ];

    var filesToCompile = [
      config.env.appDir + '/**/*.scss'
    ];

    gulp.watch(filesToCompile, ['sass']);
    gulp.watch(filesToCopy, ['copy']);
}
