var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var outputStyle = argv.prod ? 'compressed' : 'expanded';
var sourceComments = argv.prod ? '' : true;

gulp.task('sass', function(){
    sassTask(argv.app, argv.brand);
});

function sassTask(app, brand) {
    return gulp
        .src(config.env.appDir + '/' + brand + '/' + app + '/**/*.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle,sourceComments}).on('error', sass.logError))
        .pipe(gulp.dest(config.env.buildDir + '/' + app + '/' + brand))
        .pipe(browserSync.reload({stream:true}))
}
