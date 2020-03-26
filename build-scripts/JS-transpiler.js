const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.src(__dirname + '/../static/scripts/keySuggestions.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(gulp.dest(__dirname + '/../static/transpiled/'))

gulp.src(__dirname + '/../static/scripts/newSession.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(gulp.dest(__dirname + '/../static/transpiled/'))

gulp.src(__dirname + '/../static/scripts/progress.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(gulp.dest(__dirname + '/../static/transpiled/'))