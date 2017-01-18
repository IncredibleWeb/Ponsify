var gulp = require('gulp'),
    path = require('path'),
    requireDir = require('require-dir'),
    gutil = require('gulp-util');

requireDir('./gulptasks');

gulp.task('default', ['scripts', 'test']);