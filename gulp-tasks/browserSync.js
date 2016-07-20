var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var browserSync = require('browser-sync');

gulp.task('browserSync', browserSyncTask(argv.app, argv.brand));

function browserSyncTask(app, brand) {
    browserSync({
        port: 3000,
        server: {
          baseDir: config.env.buildDir + '/' + app + '/' + brand
        }
    })
}
