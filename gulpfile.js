var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify');

gulp.task('jshint', function() {
    return gulp.src('script.js')
        .pipe(jshint({ linter: 'jshint', lookup: true }))
        .pipe(jshint.reporter(stylish));
});

gulp.task('uglify', function() {
    return gulp.src('script.js')
        .pipe(uglify({mangle: true}))
        .pipe(rename("script.min.js"))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['jshint', 'uglify']);