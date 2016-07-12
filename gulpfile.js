// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp`
//   `gulp watch`
//
// *************************************

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");

var sassDir = 'app/sass/main.scss';
var targetCssDir = 'dist/css';
var imageConfig = {
    src:'./app/images/**/*.{jpg,png}',
    dist:'./dist/img/',
    sizes: [1280, 1024, 960, 800, 640, 480, 320, 160]
}

// -------------------------------------
//   Task: SASS
// -------------------------------------
//

gulp.task('sass', function(){
  return gulp.src([sassDir])
    .pipe(sass({includePaths: './node_modules/foundation-sites/scss/', outputStyle: 'compressed'}))
    .pipe(gulp.dest(targetCssDir))
});

// -------------------------------------
//   Task: IMAGE-RESIZE
// -------------------------------------
//

var imageResizeTasks = [];

function createTask(size)
{
    gulp.task("image-resize-"+size, function() {
    return gulp.src(imageConfig.src)
      .pipe(imageResize({ width : size }))
      .pipe(rename(function (path) {
        var suffix = "_"+size;
        path.basename += suffix;
  }))
      .pipe(gulp.dest(imageConfig.dist));
    });
}

imageConfig.sizes.forEach(function (item, index, array) {
    createTask(item);
    imageResizeTasks.push("image-resize-" + item);
});

gulp.task('img-resize', imageResizeTasks);

// -------------------------------------
//   Task: COPY FILES
// -------------------------------------
//

gulp.task('icons', function() {
  return gulp.src('app/icons/**/*')
  .pipe(gulp.dest('dist/icons'))
})

gulp.task('icon-fonts', function() {
  return gulp.src('app/sass/fonts/**/*')
  .pipe(gulp.dest('dist/css/fonts'))
})

gulp.task('data', function() {
  return gulp.src('app/data/**/*')
  .pipe(gulp.dest('dist/data'))
})

gulp.task('copy', ['icons', 'icon-fonts', 'data']);

// -------------------------------------
//   Task: JS-LINT
// -------------------------------------
//

gulp.task('jslint', function() {
  return gulp.src('./app/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// -------------------------------------
//   Task: WATCH
// -------------------------------------
//

gulp.task('watch', function(){
  gulp.watch('app/sass/**/*.scss', ['sass']); 
  // Other watchers
})

// -------------------------------------
//   Task: BUILD
// -------------------------------------
//

gulp.task('build', ['sass','img-resize', 'copy']);

