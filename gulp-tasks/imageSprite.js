var gulp = require('gulp');
var config = require('./config.js');
var argv = require('yargs').argv;
var spritesmith = require('gulp.spritesmith');

gulp.task('imageSprite', imageSpriteTask(argv.app, argv.brand));

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

    sprite.css.pipe(gulp.dest(config.env.appDir + '/' + brand + '/' + app + '/styles'));
    sprite.img.pipe(gulp.dest(config.env.appDir + '/' + brand + '/' + app + '/images'));
}
