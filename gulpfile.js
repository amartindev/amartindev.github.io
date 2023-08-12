const { src, dest, watch, parallel } = require("gulp");


const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const plumber = require("gulp-plumber");

function css(done) {
    src('sass/style.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('css'));
    done();
}

function dev(done){
    watch('sass/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = parallel(dev);
