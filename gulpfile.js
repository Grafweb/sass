
var angularFilesort = require('gulp-angular-filesort');
var bowerFiles = require('main-bower-files');
var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var inject = require('gulp-inject');
//var autoprefixer = require('gulp-autoprefixer');
//var bower = require('gulp-bower');
 
 
gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'stylesheets',
      sass: 'sass'
    }))
    .pipe(gulp.dest('./stylesheets'));
}); 

gulp.task('inject', ['compass'], function() {
  gulp.src('./template/index.html')
  .pipe(inject(gulp.src(bowerFiles(), {read: false})))
  .pipe(inject(gulp.src(['./stylesheets/*.css'], {read: false})))
  .pipe(gulp.dest('./dest'));
});

gulp.task("default", ['inject']);


// gulp.task('sass', function () {
//   return gulp.src('./sass/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });		
		
 
//  gulp.task('sass:watch', function () {
//   gulp.watch('./sass/*.scss', ['sass']);
// });   

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