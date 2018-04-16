var gulp = require("gulp");
var server= require("gulp-webserver");
var sass = require("gulp-sass");
var data = require("./src/data/data.json")
gulp.task("server", function() {
    gulp.src(".")
        .pipe(server({
            port: '9090',
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                if (/\/list/g.test(req.url)) {
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})

gulp.task("mincss", function() {
    return gulp.src("src/css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
})