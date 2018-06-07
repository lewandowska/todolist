// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins

var autoprefixer = require('gulp-autoprefixer');
var compass = require('gulp-compass');


var gutil = require("gulp-util");

taskSass = gulp.task('sass', function(){
    return gulp.src('sass/**/*.scss')
        .pipe(compass({config_file: 'config.rb'}))
        .on('error', function() {
            this.emit('end');
        })
        .pipe(autoprefixer({
            browsers: ['last 2 versions','ie >= 9'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
        .on('end', function() {
            console.log('the end');
        })
});

taskWatch = gulp.task('watch', ['sass'], function() {
    gulp.watch('sass/**/*.scss', ['sass']);
    console.log('watching.. press ctrl + c to leave.');
});

taskDefault = gulp.task('default', ['sass', 'watch']);
