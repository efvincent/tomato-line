var gulp    = require('gulp');
var traceur = require('gulp-traceur');
var jshint  = require('gulp-jshint');
var summary = require('jshint-summary');
var newer   = require('gulp-newer');
var clean   = require('gulp-clean');
var summary = require('jshint-summary');
var echo    = require('./gulp-efv-echo.js');

var paths = {
  scripts: ['./app/**/*.js'],
  dist: './dist'
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(newer(paths.dist))
    .pipe(jshint())
    .pipe(jshint.reporter(summary()))
    .pipe(traceur({sourceMap: true}))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
})

gulp.task('default', ['scripts', 'watch']);

gulp.task('clean', function() {
  return gulp.src(paths.dist, { read: false })
    .pipe(clean());
})