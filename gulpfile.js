
var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
//var bower = require('gulp-bower');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});		
		
 
 gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});   
    
		
gulp.task("default", ['sass']);

/* autoprefixer sample work */
/*gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('./app/libs/css'));
}); */

/*bower*/
// gulp.task('bower', function() {
//   return bower('./bower_components')
//     .pipe(gulp.dest('./app/libs/'))
// });