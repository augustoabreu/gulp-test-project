var gulp = require('gulp');
var config = require('./config.js');
var iconfont = require('gulp-iconfont');
var async = require('async');
var consolidate = require('gulp-consolidate');
var iconFontName = 'icons';

gulp.task('build:icons', iconFontTask);

function iconFontTask(done){
    var iconStream = gulp
                        .src([config.env.appDir + '/common/icons-svg/*.svg'])
                        .pipe(iconfont({ fontName: iconFontName }));

    async.parallel([
        function handleGlyphs (cb) {
            iconStream.on('glyphs', function(glyphs, options) {
                gulp.src(config.env.appDir + '/common/**/templates/_icons.scss')
                .pipe(consolidate('lodash', {
                    glyphs: glyphs,
                    fontName: iconFontName,
                    fontPath: config.env.appDir + '/common/fonts/icons',
                    className: 's',
                    normalize: true,
                    fontHeight: 1001
                }))
                .pipe(gulp.dest(config.env.appDir + '/common/styles/elements/'))
                .on('finish', cb);
            });
        },
        function handleFonts (cb) {
            iconStream
                .pipe(gulp.dest(config.env.appDir + '/common/fonts/icons'))
                .on('finish', cb);
        }
    ], done);
}