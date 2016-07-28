var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');


gulp.task('imageSprite', function() {
    return imageSpriteTask(argv.app, argv.brand);
});

function imageSpriteTask(app, brand) {
    var sprite = gulp
        .src(config.env.appDir + '/' + brand + '/' + app +'/**/sprites/*.png')
        .pipe(
            spritesmith({
                imgName: 'sprite.png',
                imgPath: '../images/sprite.png',
                cssName: '_sprite.scss',
                algorithm: 'top-down',
                padding: 5
            })
        );

    var css = sprite.css.pipe(
        gulp.dest(config.env.appDir + '/' + brand + '/' + app + '/styles')
    );
    var img = sprite.img.pipe(
        gulp.dest(config.env.appDir + '/' + brand + '/' + app + '/images')
    );

    return merge(css, img);
}
