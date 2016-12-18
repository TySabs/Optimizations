var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');
    imagemin = require('gulp-imagemin');


var pizzaStyles = 'views/css/dev/*.css';
var pizzaImages = 'views/images/dev/*';
var mainImages = 'img/dev/*';

gulp.task('pizzaCSS', function() {
  gulp.src(pizzaStyles)
    .pipe(cleanCSS())
    .pipe(gulp.dest('views/css/production/'))
});

gulp.task('pizzaImages', function() {
  gulp.src(pizzaImages)
    .pipe(imagemin())
    .pipe(gulp.dest('views/images/'))
});

gulp.task('mainImages', function() {
  gulp.src(mainImages)
    .pipe(imagemin())
    .pipe(gulp.dest('img/'))
});



gulp.task('default', ['pizzaCSS', 'pizzaImages', 'mainImages']);
