var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:dev', ['clean'], buildDevTask);

function buildDevTask() {
    runSequence(
        'watch'
    )
}
