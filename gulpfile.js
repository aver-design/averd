const gulp = require('gulp');
const merge = require('merge2');
const clean = require('gulp-clean');
const typescript = require('gulp-typescript')
const babel = require('gulp-babel');
const less = require('gulp-less');

function clear(dir) {
  return function clear() {
    return gulp.src(dir, { read: false, allowEmpty: true })
      .pipe(clean());
  }
}

function es() {
  const compileTs = typescript.createProject('./tsconfig.json')
  return gulp.src('./components/**/*.tsx')
    .pipe(compileTs())
    .pipe(gulp.dest('./es'));
}

function lib() {
  const js = gulp.src('./es/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
  const dts = gulp.src('./es/**/*.d.ts')
    .pipe(gulp.dest('./lib'));
  return merge(js, dts);
}

function style() {
  return gulp.src('./components/**/*.less')
    .pipe(gulp.dest('./es'))
    .pipe(gulp.dest('./lib'))
    .pipe(less())
    .pipe(gulp.dest('./es'))
    .pipe(gulp.dest('./lib'));
}

exports.default = gulp.series(
  clear(['./es', './lib']),
  gulp.parallel(
    gulp.series(es, lib),
    style,
  ),
);
