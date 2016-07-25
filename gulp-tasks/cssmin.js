var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var config = require('./config.js');

gulp.task('cssmin', vendorCSSTask);

function vendorCSSTask() {
    return gulp
        .src(config.env.buildDir + '/**/*.css')
        .pipe(cssnano({
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(gulp.dest(config.env.buildDir))
}
