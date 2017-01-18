var gulp = require('gulp'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    es = require('event-stream'),
    config = require('../gulpconfig.json'),
    mocha = require('gulp-mocha');

gulp.task('test', function() {
    return gulp.src(config.paths.test + 'test.js', { read: false })
        .pipe(mocha({ reporter: 'spec' }))
});
