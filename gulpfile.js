var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');
    imagemin = require('gulp-imagemin');


var pizzaStyles = 'views/css/dev/*.css',
    mainStyles = 'css/dev/*.css',
    pizzaImages = 'views/images/dev/*',
    mainImages = 'img/dev/*',
    pizzaJS = 'views/js/dev/main.js';

gulp.task('pizzaCSS', function() {
  gulp.src(pizzaStyles)
    .pipe(cleanCSS())
    .pipe(gulp.dest('views/css/production/'))
});

gulp.task('mainCSS', function() {
  gulp.src(mainStyles)
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/production/'))
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

gulp.task('pizzaJS', function() {
  gulp.src(pizzaJS)
    .pipe(uglify())
    .pipe(gulp.dest('views/js/'))
});


gulp.task('default', ['pizzaCSS', 'mainCSS', 'pizzaImages', 'mainImages', 'pizzaJS']);
