const gulp = require('gulp');
const merge = require('merge2');
const clean = require('gulp-clean');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const typescript = require('gulp-typescript');
const less = require('gulp-less');
const postcss = require('gulp-postcss');

function clear() {
  return gulp.src(['./es', './lib'], { read: false, allowEmpty: true })
    .pipe(clean());
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
    .pipe(postcss([require('autoprefixer')]))
    .pipe(gulp.dest('./es'))
    .pipe(gulp.dest('./lib'));
}

function cssImporter() {
  return gulp.src('./es/**/style/index.js')
    .pipe(replace('.less', '.css'))
    .pipe(rename(path => {
      path.basename = 'css';
    }))
    .pipe(gulp.dest('./es'))
    .pipe(gulp.dest('./lib'));
}

const build = gulp.series(
  gulp.parallel(
    gulp.series(es, lib),
    style,
  ),
  cssImporter,
);

function watch() {
  return gulp.watch(['./components/**/*'], build);
}

exports.default = gulp.series(clear, build);
exports.watch = watch;
