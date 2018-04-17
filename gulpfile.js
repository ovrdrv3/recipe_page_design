var gulp = require('gulp');
var browserSync = require('browser-sync').create(); // create a browser sync instance.
var sass = require('gulp-sass');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true})); // prompts a reload after compilation
});

gulp.task('watch',['browser-sync'], function(){
	gulp.watch("scss/*.scss", ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});
