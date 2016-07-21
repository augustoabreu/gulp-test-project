var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config.js');
var argv = require('yargs').argv;

gulp.task('browserSync', function(){
    browserSyncTask(argv.app, argv.brand)
});

function browserSyncTask(app, brand) {
    return browserSync({
        port: 3000,
        server: {
          baseDir: config.env.buildDir + '/' + app + '/' + brand
        }
    })
}
