var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var merge = require('merge-stream');

gulp.task('copy', function(){
    if(argv.app == null && argv.brand == null){
        var apps =  {
            'cliente': {0 : 'marca1'}
            // 'outroApp': {0: 'marca1', 1: 'marca2'}
         }

         var app = Object.keys(apps);

         app.forEach(function(app) {
           var items = Object.keys(apps[app]);

           items.forEach(function(brand) {
             copyTask(app, apps[app][brand]);
           });
         });

    }else{
        copyTask(argv.app, argv.brand);
    }
});

function copyTask(app, brand) {
    var sourceCommon = [
        '**/!('+ app +')/*',
        '*.*',
        '!' + '**/svg{,/**}',
        '!' + '**/styles{,/**}'
    ];

    var sourceContext = [
        '**/*',
        '!' + '**/styles{,/**}',
        '!' + '**/sprites{,/**}'
    ];

    var copyCommon = gulp
        // .src(config.env.appDir + '/common/**/!(svg|sprites|styles|'+ app +')/*')
        .src(sourceCommon, {cwd: config.env.appDir + '/common/'})
        .pipe(gulp.dest(config.env.buildDir + '/' + app + '/' + brand + '/common'))

    var copyApp = gulp
        .src('**/*', {cwd: config.env.appDir + '/common/' + app})
        .pipe(gulp.dest(config.env.buildDir + '/' + app + '/' + brand))

    var copyAppBrand = gulp
        .src(sourceContext, {cwd: config.env.appDir + '/'+ brand +'/' + app})
        .pipe(gulp.dest(config.env.buildDir + '/'+ app + '/' + brand))

    return merge(
            copyCommon,
            copyApp,
            copyAppBrand
        )
        .pipe(browserSync.reload({stream:true}));
}
