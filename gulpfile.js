'use strict';

var gulp            = require('gulp');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var uglify          = require('gulp-uglify');
var cleanCSS        = require('gulp-clean-css');
var order           = require("gulp-order");
var autoprefixer    = require("gulp-autoprefixer");

// COMPILE SASS

gulp.task('sass', function () {
    return gulp.src('./public/assets/sass/**/*.scss')

        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./public/dist/css'));
});

// CONCATENATE AND MINIFY JS

gulp.task('scripts', function() {

    return gulp.src("public/assets/js/**/*.js")
        .pipe(order([
            'vendors/jquery.fancybox.min.js',
            'vendors/owl.carousel.min.js',
            'vendors/eqHeight.js',
            'vendors/scrollme.js',
            'vendors/vid.js',
            'vendors/validate.js',
            'vendors/additional-methods.js',
            'vendors/jquery.forms.js',
            'vendors/stacktable.js',
            'forms.js',
            'custom.js'
        ]))
        .pipe(concat("all.js"))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest("./public/dist/js"));

});

gulp.task('default', function () {
    gulp.watch('./public/assets/sass/**/*.scss', ['sass']);
    gulp.watch('./public/assets/js/**/*.js', ['scripts']);
});
