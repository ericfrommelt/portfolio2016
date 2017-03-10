var gulp = require('gulp');
var sass = require('gulp-sass');
var child = require('child_process');
var gutil = require('gulp-util');
var bower = require('gulp-bower');
var browserSync = require('browser-sync').create();

var bowerDir = 'bower_components';
var siteRoot = '_site';

// Bower
gulp.task('bower', function() {
  return bower()
  .pipe(gulp.dest('_site/bower_components'));
});

// Compile sass to css
gulp.task('sass', function() {
  return gulp.src('_dev/scss/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('_site/css'));
});

// Compile JS
gulp.src('_dev/js/**/*.js')
  .pipe(gulp.dest('_site/js'));

// Rebuild Jekyll
gulp.task('jekyll', function() {
  var jekyll = child.spawn('jekyll', ['build', '--watch', 'drafts']);
  var jekyllLogger = (buffer) => {
    buffer.toString().split(/\n/).forEach((message) => gutil.log('Jekyll: ' + message));
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// Watch files
gulp.task('watch', function() {
  gulp.watch('_dev/scss/**/*.scss', ['sass']);
  gulp.watch('_dev/js/**/*.js');
});

// Spin up local server
gulp.task('serve', function() {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task('default', ['bower', 'sass', 'watch', 'jekyll', 'serve']);
