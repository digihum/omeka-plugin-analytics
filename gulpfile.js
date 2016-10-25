var gulp = require('gulp');

var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');  

var path = "./views/shared/javascripts/analytics/";

//script paths
var jsFiles = ["analytics.js", "audio_tracking.js", "hash_tracking.js", "video_tracking.js"],  
    jsDest = './views/shared/javascripts/dist';

jsFiles = jsFiles.map((file) => path + file);

gulp.task('default', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('omeka-analytics.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('omeka-analytics.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('watch', function () {
  gulp.watch(jsFiles, ['default']);
});
