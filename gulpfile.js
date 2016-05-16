/* globals require, exports */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
sass         = require('gulp-sass'),
path          = require('path'),
less         = require('gulp-less'),
gutil        = require('gulp-util'),
autoprefixer = require('gulp-autoprefixer'),
server       = require('gulp-server-livereload'),
open         = require('gulp-open'),
os           = require('os');


// browser Settings
var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

// less compiler task
gulp.task('less', function () {
  return gulp.src('./src/natal.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'));
});

gulp.task('browser', function(){
  gulp.src('./example/index.html')
  .pipe(open({app: browser}));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.less', ['less']);
});

gulp.task('build',['less'], function () {
  gutil.log('Natal has been builded successfull !');
});

gulp.task('default',['build','browser','watch'], function () {
  gutil.log('Done');
});
