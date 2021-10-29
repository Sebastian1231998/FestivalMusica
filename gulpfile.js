const gulp = require('gulp');
const  sass  = require('gulp-sass'); 
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//funcion que compila SASS

function css(){

  return gulp.src('src/scss/app.scss')
         .pipe( sass.sync().on('error', sass.logError) )
         .pipe( gulp.dest('./build/css') )  

}

function javascript(){

  return gulp.src('src/js/**/*')
  .pipe(concat('bundle.js'))
  .pipe( gulp.dest('./build/js'))
 
}



function watch(){
  gulp.watch('src/scss/**/*.scss' , css);
  gulp.watch('src/js/**/*.js' , javascript);
}

function imagenes(){

  return gulp.src('src/img/**/*')
  .pipe(imagemin())
  .pipe( gulp.dest('./build/img'))
   .pipe(notify({message:"minificando imagenes"}))
}

function versionWebp(){

  return gulp.src('src/img/**/*')
  .pipe( webp())
  .pipe( gulp.dest('./build/img'))
  .pipe(notify({message:"generando webp"}))
}



exports.css = css; 
exports.watch = watch;

exports.default = gulp.series(css,javascript,versionWebp,imagenes,watch );

  