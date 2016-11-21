var gulp = require('gulp');

var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');  

// path to javascript input files
var path = "./views/shared/javascripts/analytics/";

// javascript files to include - they will be 'loaded' in this order
var jsFiles = ["analytics.js", "audio_tracking.js", "hash_tracking.js", "video_tracking.js"];  

// directory in which to put the compiled file
var jsDest = './views/shared/javascripts/dist';

// generate the complete paths to the files
jsFiles = jsFiles.map((file) => path + file);

// build a minified and non-minified version of the concatenated javascript code
gulp.task('default', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('omeka-analytics.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('omeka-analytics.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

// watch the input files for changes - if they change, run default task
gulp.task('watch', function () {
  gulp.watch(jsFiles, ['default']);
});
