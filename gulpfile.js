const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
	const tsResult = tsProject.src().pipe(tsProject());
	return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('static', () => {
	return gulp.src(['src/**/*.json']).pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
	return gulp.src('dist').pipe(clean());
});

gulp.task('build', gulp.series('clean', 'static', 'scripts'));
