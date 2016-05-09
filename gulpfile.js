/* globals require, exports */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
sass         = require('gulp-sass'),
gutil        = require('gulp-util'),
autoprefixer = require('gulp-autoprefixer');

// sass compiler task
gulp.task('sass', function () {
    return gulp.src('./src/natal.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist'))
   .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'));
});

gulp.task('watch', function () {
  gulp.watch([ './src/**/*.scss'], ['sass']);
});

gulp.task('build',['sass'], function () {
  gutil.log('Natal has been builded successfull !');
});

gulp.task('default',['build'], function () {
  gutil.log('Done');
});
