import gulp from 'gulp';
import nodemon from 'nodemon';

export function serve() {
	setTimeout(() => {
		nodemon({
			script: 'bin/www',
			delay: '1s',
			inspect: true,
			watch: [
				'dist/server',
				'dist/shared',
			],
		});
	}, 1000);
}

gulp.task('serve', gulp.series(
	'default',
	serve,
));
