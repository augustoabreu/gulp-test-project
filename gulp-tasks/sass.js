var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./config.js');
var browserSync = require('browser-sync');
var argv = require('yargs').argv;

gulp.task('sass', function(){
    sassTask(argv.app, argv.brand);
});

function sassTask(app, brand) {
    return gulp
        .src(config.env.appDir + '/' + brand + '/' + app + '/**/*.scss')
        .pipe(
            sass({
                outputStyle: 'expanded',
                'sourceComments': 'true'
            })
            .on('error', sass.logError)
        )
        .pipe(gulp.dest(config.env.buildDir + '/' + app + '/' + brand))
        .pipe(browserSync.reload({stream:true}))
}
