var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('sass', function(){
	return gulp.src('css/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('css/main.css'))
});