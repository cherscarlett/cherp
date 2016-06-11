var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer');

gulp.task("default", ["sass"]);

gulp.task('sass', function() {

    gulp.src('./lib/ui/core.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/stylesheets/')
    );

});
