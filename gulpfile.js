var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("compile", () => {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"));
  // .pipe(
  //   gulp.dest(file => {
  //     return file.base;
  //   })
  // )
});

gulp.task("watch", () => {
  return gulp.watch("./scss/**/*.scss", gulp.series("compile"));
});

gulp.task("default", gulp.series("compile"));
