var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:prod', ['clean'], buildDevTask);

function buildDevTask() {
    runSequence('copy', ['cssmin', 'imagemin'])
}
