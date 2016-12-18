var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');


var pizzaStyles = 'views/css/dev/*.css';

gulp.task('pizzaCSS', function() {
  gulp.src(pizzaStyles)
    .pipe(cleanCSS())
    .pipe(gulp.dest('views/css/production/'))
});

gulp.task('devJs', function() {
  gulp.src(jsSources)
    .pipe(concat('app.dev6.js'))
    .pipe(gulp.dest('js/'))
});

gulp.task('liveJs', function() {
  gulp.src(jsSources)
    .pipe(concat('app.min6.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

gulp.task('default', ['devJs', 'liveJs']);
