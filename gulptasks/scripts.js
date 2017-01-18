var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    es = require('event-stream'),
    config = require('../gulpconfig.json');

gulp.task('scripts', ['clean'], function() {
    return es.merge(
        gulp.src(config.paths.js + "**/*.js")
        .pipe(plumber())
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.jsBuild))
    )
});
