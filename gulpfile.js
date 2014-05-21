var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var express = require('express');
var lr = require('tiny-lr')();
var connect = require('connect-livereload')();

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

function startExpress() {
  var app = express();
  app.use(connect);
  app.use(express.static(__dirname + "/www"));
  app.listen(8000);
}

function startLivereload() {
  lr.listen(35729);
}

function notifyLivereload(event) {
  var fileName = require('path').relative(__dirname, event.path);
  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('watch', function() {
  startExpress();
  startLivereload();
  gulp.watch(paths.sass, ['sass']);
  gulp.watch('www/**', notifyLivereload);
  gulp.watch('scss/*', notifyLivereload);
});

gulp.task('default', ['sass']);