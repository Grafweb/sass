
var angularFilesort = require('gulp-angular-filesort');
var bowerMain = require('bower-main');
var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var inject = require('gulp-inject');
var fileinclude = require('gulp-file-include');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var cssmini = require('gulp-mini-css');
//var autoprefixer = require('gulp-autoprefixer');
//var bower = require('gulp-bower');

var bowerMainJavaScriptFiles = bowerMain('js','min.js'); 

gulp.task('compass', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'sass'
    }))
    .pipe(cssmini({ext:'.css'}))
    .pipe(gulp.dest('./css'));
}); 

 gulp.task('compass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['compass']);
});   

gulp.task('bower', function() {
  gulp.src(['./bower_components/**'])
    .pipe(gulp.dest('./js'));
});

gulp.task('bower:watch', function() {
  gulp.watch(['./bower_components/**'], ['bower']);
});

gulp.task('fileinclude', function() {
  gulp.src(['./template/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('inject', ['compass'], function() {
  gulp.src('./template/index.html')
  .pipe(inject(gulp.src(bowerMainJavaScriptFiles.minified)))
  .pipe(inject(gulp.src(['./css/*.css'], {read: false})))
  .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
  .pipe(gulp.dest('./'));
});

gulp.task('compressjs', function() {
  return gulp.src(['./js/bxslider-4/dist/jquery.bxslider.js','./js/custom/**/*.js',])
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('compress-modernizer-js', function() {
  return gulp.src('./js/modernizr/modernizr-custom.js')
    .pipe(uglify())
    .pipe(concat('modernizr.min.js'))
    .pipe(gulp.dest('./js/modernizr'));
});


gulp.task('compressjs:watch', function () {
  gulp.watch(['./js/bxslider-4/dist/jquery.bxslider.js','./js/custom/**/*.js',], ['compressjs']);
}); 

 
gulp.task("default", ['compass', 'compass:watch', 'bower', 'bower:watch', 'compress-modernizer-js', 'compressjs', 'compressjs:watch']);


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