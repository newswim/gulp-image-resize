var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
// var imageResize = require("./index.js");

gulp.task('resize', function () {
  gulp.src('_originals/*')
    .pipe(imageResize({
      width : 600,
      height : 0,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));
});
