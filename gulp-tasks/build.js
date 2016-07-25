var gulp = require('gulp');
var argv = require('yargs').argv;
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', ['clean'], defaultTask);

function defaultTask() {
    if(argv.prod) {
        // runSequence('copy', ['cssmin', 'imagemin']);
        runSequence('sass','copy');
    } else {
        runSequence('watch');
    }
}
