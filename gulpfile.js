// change it to v4 syntax

let postcss = require('gulp-postcss');
let gulp = require('gulp');
let autoprefixer = require('autoprefixer');

gulp.task('serve', ['css'], function() {
    gulp.watch("./css/*.css", ['css']);
});

gulp.task('css', function() {
    let plugin = [
        autoprefixer(),
        // PostCSS plugins here
    ];
    return gulp.src('./css/*.css')
    .pipe(postcss(plugin))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['serve']);
