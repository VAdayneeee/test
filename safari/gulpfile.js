var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));;

gulp.task('sass', function () {
    return gulp.src('/app/scss/style.scss',{ allowEmpty: true })
        .pipe(sass())
        .pipe(gulp.dest('/app/css/style.css',{ allowEmpty: true }));
});

