var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var cssnano = require('gulp-cssnano');

gulp.task('cssmin', ['sass'], function(){
    // cssContextTask(argv.app, argv.brand);
    cssLibsTask();
});

function cssLibsTask() {
    return gulp
        .src(config.env.buildDir + '/**/*.css')
        .pipe(
            cssnano({
                discardComments: {
                    removeAll: true
                }
            })
        )
        .pipe(gulp.dest(config.env.buildDir))
}

// function cssContextTask(app, brand) {
//     return gulp
//         .src(config.env.appDir + '/' + brand + '/' + app + '/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(cssnano())
//         .pipe(gulp.dest(config.env.buildDir + '/' + app + '/' + brand))
// }
