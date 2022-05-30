'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
    return gulp.src('./scss/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
//            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./css-compiled'));
}

function buildScripts() {
    /* copy bootstrap java-script */
    return gulp.src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js*')
            .pipe(gulp.dest('js-compiled/'));
}

exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.build = gulp.series(buildStyles, buildScripts);