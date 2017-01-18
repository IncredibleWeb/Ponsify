var gulp = require('gulp'),
    clean = require('gulp-clean'),
    config = require('../gulpconfig.json');

// cleans the jsBuild except the vendor.* files
gulp.task('clean', function() {
    return gulp.src([config.paths.jsBuild + "**/*.*"], { read: false })
        .pipe(clean());
});