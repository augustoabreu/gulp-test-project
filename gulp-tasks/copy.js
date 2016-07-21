var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var browserSync = require('browser-sync');

gulp.task('copy', function(){
    copyCommonTask(argv.app, argv.brand);
    copyAppTask(argv.app, argv.brand);
    copyBrandTask(argv.app, argv.brand);
});

function copyCommonTask(app, brand) {
    var sourceCommon = [
        config.env.appDir + '/common/**/!('+ app +')/*',
        config.env.appDir + '/common/*.*',
        '!' + config.env.appDir + '/common/**/svg{,/**}',
        '!' + config.env.appDir + '/common/**/styles{,/**}'
    ];

    return gulp
        // .src(config.env.appDir + '/common/**/!(svg|sprites|styles|'+ app +')/*')
        .src(sourceCommon)
        .pipe(gulp.dest(config.env.buildDir + '/' + app + '/' + brand + '/common'))
        .pipe(browserSync.reload({stream:true}))
}

function copyAppTask(app, brand) {
    return gulp
        .src(config.env.appDir + '/common/' + app + '/**/*')
        .pipe(gulp.dest(config.env.buildDir + '/' + app + '/' + brand))
        .pipe(browserSync.reload({stream:true}))
}


function copyBrandTask(app, brand) {
    var sourceContext = [
        config.env.appDir + '/'+ brand +'/' + app + '/**/*',
        '!' + config.env.appDir + '/'+ brand +'/' + app + '/**/styles{,/**}',
        '!' + config.env.appDir + '/'+ brand +'/' + app + '/**/sprites{,/**}'
    ];

    return gulp
        .src(sourceContext)
        .pipe(gulp.dest(config.env.buildDir + '/'+ app + '/' + brand))
        .pipe(browserSync.reload({stream:true}))
}
