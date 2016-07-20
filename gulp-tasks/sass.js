var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', ['imageSprite'], function(){
    sassTask(argv.app, argv.brand);
});

function sassTask(app, brand) {
    return gulp
        .src(config.env.appDir + '/' + brand + '/' + app + '/**/*.scss')
        .pipe(sass({outputStyle: 'expanded', 'sourceComments': 'true'}).on('error', sass.logError))
        .pipe(gulp.dest(config.env.buildDir + '/' + app + '/' + brand))
        .pipe(browserSync.reload({stream:true}))
}
