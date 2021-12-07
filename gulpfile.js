const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('zip', function () {
  return gulp
    .src(['dist/*', 'manifest.json', 'icons/*'], {
      base: './'
    })
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('dist'));
});
