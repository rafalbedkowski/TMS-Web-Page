// list of dependencies ( things require to run the below funcitions)
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const imagewebp = require('gulp-webp');
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack");
const fileInclude = require('gulp-file-include');

// create functions

// SCSS
function compilescss() {
    return src('./src/styles/**/*.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(sourcemaps.write("."))
        .pipe(dest('.//dist/styles'))
}

function webPack (cb) { 
    return webpack(require("./webpack.config.js"), function(err, stats) {
        if (err) throw err;
        console.log(stats);
        browserSync.reload();
        cb();
    })
}

// JS
function jsmin(){
    return src('./src/scripts/**/*.js')
        .pipe(terser())
        .pipe(dest('./dist/scripts'))
}

// images
function optimizeimg() {
    return src('./src/images/**/*.{jpg,png}')
        .pipe(imagemin([
            imagemin.mozjpeg({quality: 80, progressive: true}),
            imagemin.optipng({optiminzationLevel: 2})
        ]))
        .pipe(dest('./dist/images'))
}


// webp images
function webpImage() {
    return src('./dist/images/**/*.{jpg,png}')
        .pipe(imagewebp())
        .pipe(dest('./dist/images'))
}


// create watchlist
function watchTask(){
    watch('./src/styles/*.scss', compilescss);
    watch('./src/scripts/*.js', jsmin);
    watch('./src/scripts/*.js', webPack, );
    watch('./src/**/*.html', html),
    watch('./src/resources/*.pdf', pdf),
    watch('./src/imges/*.{jpg,png}', optimizeimg);
    watch('./dist/imges/*.{jpg,png}', webpImage);
}

function html(cb){
    return src('./src/**/*.html')
    .pipe(fileInclude({
        prefix: "@@",
        basepath: "@file"
    }))
    .pipe(dest('./dist'))
}

function pdf(cb){
    return src('./src/resources/*.pdf')
    .pipe(fileInclude({
        prefix: "@@",
        basepath: "@file"
    }))
    .pipe(dest('./dist'))
}


// default gulp
exports.default = series(
    compilescss,
    jsmin,
    optimizeimg,
    webpImage,
    watchTask,
    html,
);